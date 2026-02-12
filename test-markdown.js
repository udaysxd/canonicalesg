const { remark } = require('remark');
const remarkGfm = require('remark-gfm');
const remarkRehype = require('remark-rehype');
const rehypeRaw = require('rehype-raw');
const rehypeStringify = require('rehype-stringify');

const markdown = `
# Test

Some text

<section style="color: red;">
  <div>Test HTML</div>
</section>

More text
`;

async function test() {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdown);
  
  console.log('Output:');
  console.log(result.toString());
}

test();
