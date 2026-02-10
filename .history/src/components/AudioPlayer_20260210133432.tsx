'use client';

import { useState, useEffect, useCallback } from 'react';

interface AudioPlayerProps {
  text: string;
}

export default function AudioPlayer({ text }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [language, setLanguage] = useState<'en-US' | 'ar-SA'>('en-US');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [hasArabicVoice, setHasArabicVoice] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setIsSupported(false);
      return;
    }

    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      const arabicVoices = availableVoices.filter(v => v.lang.startsWith('ar'));
      setHasArabicVoice(arabicVoices.length > 0);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const handlePlay = useCallback(() => {
    if (!utterance || !window.speechSynthesis) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  }, [utterance, isPaused]);

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
  }, []);

  if (!isSupported) {
    return null;
  }

  return (
    <div className="flex items-center gap-3 p-3 bg-[#f8f8f8] border border-[#eee] rounded-lg flex-wrap">
      <span className="text-sm text-[#666] font-medium">Listen to this article</span>
      
      <select
        value={language}
        onChange={(e) => {
          handleStop();
          setLanguage(e.target.value as 'en-US' | 'ar-SA');
        }}
        className="text-sm px-2 py-1 border border-[#ccc] rounded bg-white"
        aria-label="Select language"
      >
        <option value="en-US">English</option>
        <option value="ar-SA">العربية</option>
      </select>

      <div className="flex items-center gap-2">
        {!isPlaying ? (
          <button
            onClick={handlePlay}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] text-white text-sm rounded hover:bg-[#333] transition-colors"
            aria-label="Play audio"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            {isPaused ? 'Resume' : 'Play'}
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#666] text-white text-sm rounded hover:bg-[#555] transition-colors"
            aria-label="Pause audio"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Pause
          </button>
        )}
        
        {(isPlaying || isPaused) && (
          <button
            onClick={handleStop}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#999] text-white text-sm rounded hover:bg-[#888] transition-colors"
            aria-label="Stop audio"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
            </svg>
            Stop
          </button>
        )}
      </div>
    </div>
  );
}
