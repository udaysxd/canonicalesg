'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

interface AudioPlayerProps {
  text: string;
}

const SPEEDS = [0.75, 1, 1.25, 1.5];
const BASE_WPM = 150;

export default function AudioPlayer({ text }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [rate, setRate] = useState(1);
  const [currentChar, setCurrentChar] = useState(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const { cleanText, wordCount } = useMemo(() => {
    const cleaned = text
      .replace(/<[^>]*>/g, ' ')
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/\*\*|__/g, '')
      .replace(/[*_`\[\]\(\)]/g, '')
      .replace(/^\s*[-*+]\s+/gm, '')
      .replace(/^\s*\d+\.\s+/gm, '')
      .replace(/---+/g, ' ')           // Remove horizontal rules (---)
      .replace(/\b[-–—]\b/g, ' ')       // Remove standalone dashes between words
      .replace(/\n+/g, '. ')
      .replace(/\s+/g, ' ')
      .trim();
    
    const words = cleaned.split(/\s+/).filter(w => w.length > 0);
    return { cleanText: cleaned, wordCount: words.length };
  }, [text]);

  const estimatedMinutes = useMemo(() => {
    const minutes = wordCount / (BASE_WPM * rate);
    return Math.ceil(minutes);
  }, [wordCount, rate]);

  const createUtterance = useCallback((textToSpeak: string, startChar: number = 0, speechRate: number = rate) => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = speechRate;
    utterance.pitch = 1;

    utterance.onboundary = (event) => {
      setCurrentChar(startChar + event.charIndex);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    return utterance;
  }, [rate]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setIsSupported(false);
      return;
    }

    utteranceRef.current = createUtterance(cleanText.slice(currentChar), currentChar, rate);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [cleanText, createUtterance]);

  const handleSpeedChange = (newRate: number) => {
    const wasPlaying = isPlaying;
    
    window.speechSynthesis.cancel();
    setRate(newRate);
    
    utteranceRef.current = createUtterance(cleanText.slice(currentChar), currentChar, newRate);
    
    if (wasPlaying && utteranceRef.current) {
      window.speechSynthesis.speak(utteranceRef.current);
    } else {
      setIsPlaying(false);
      setIsPaused(true);
    }
  };

  const handlePlay = useCallback(() => {
    if (!utteranceRef.current || !window.speechSynthesis) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      window.speechSynthesis.cancel();
      
      const startPos = currentChar >= cleanText.length - 10 ? 0 : currentChar;
      if (startPos === 0) setCurrentChar(0);
      
      utteranceRef.current = createUtterance(cleanText.slice(startPos), startPos, rate);
      window.speechSynthesis.speak(utteranceRef.current);
      setIsPlaying(true);
    }
  }, [cleanText, createUtterance, isPaused, currentChar, rate]);

  const handlePause = useCallback(() => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  }, []);

  const handleStop = useCallback(() => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentChar(0);
    utteranceRef.current = createUtterance(cleanText, 0, rate);
  }, [cleanText, createUtterance, rate]);

  if (!isSupported) {
    return null;
  }

  return (
    <div className="flex items-center gap-3 p-3 bg-[#f8f8f8] border border-[#eee] rounded-lg flex-wrap">
      {/* Play/Pause/Stop buttons */}
      <div className="flex items-center gap-1">
        {!isPlaying ? (
          <button
            onClick={handlePlay}
            className="p-2 bg-[#1a1a1a] text-white rounded hover:bg-[#333] transition-colors"
            aria-label="Play"
            title={isPaused ? 'Resume' : 'Play'}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="p-2 bg-[#666] text-white rounded hover:bg-[#555] transition-colors"
            aria-label="Pause"
            title="Pause"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        )}
        
        {(isPlaying || isPaused) && (
          <button
            onClick={handleStop}
            className="p-2 bg-[#999] text-white rounded hover:bg-[#888] transition-colors"
            aria-label="Stop"
            title="Stop"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-[#ddd]" />

      {/* Speed buttons */}
      <div className="flex items-center gap-1">
        {SPEEDS.map((speed) => (
          <button
            key={speed}
            onClick={() => handleSpeedChange(speed)}
            disabled={isPlaying}
            className={`px-2 py-1 text-xs rounded transition-colors ${
              rate === speed
                ? 'bg-[#1a1a1a] text-white'
                : 'text-[#666] hover:bg-[#eee]'
            } ${isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {speed}x
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-[#ddd]" />

      {/* Info */}
      <span className="text-xs text-[#888]">
        {wordCount.toLocaleString()} words • ~{estimatedMinutes} min
      </span>
    </div>
  );
}
