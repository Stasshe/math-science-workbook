'use client';

import { useEffect, useState } from 'react';
import { processMarkdown } from '@/lib/markdown';
import 'katex/dist/katex.min.css';

interface MarkdownPreviewProps {
  content: string;
  className?: string;
}

export default function MarkdownPreview({ content, className = '' }: MarkdownPreviewProps) {
  const [processedContent, setProcessedContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const process = async () => {
      try {
        setIsLoading(true);
        const html = await processMarkdown(content);
        setProcessedContent(html);
      } catch (error) {
        console.error('Markdown processing error:', error);
        setProcessedContent('<p>Error processing markdown content</p>');
      } finally {
        setIsLoading(false);
      }
    };

    process();
  }, [content]);

  if (isLoading) {
    return (
      <div className={`markdown-preview ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`markdown-preview ${className}`}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}