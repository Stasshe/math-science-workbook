import { remark } from 'remark';
import remarkMath from 'remark-math';
import remarkHtml from 'remark-html';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

export async function processMarkdown(content: string): Promise<string> {
  const result = await remark()
    .use(remarkMath)
    .use(remarkHtml, { sanitize: false })
    .use(rehypeRaw)
    .use(rehypeKatex)
    .use(rehypeHighlight)
    .process(content);

  return result.toString();
}