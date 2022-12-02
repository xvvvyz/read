import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import getPath from './get-path';

const DocPage = async ({ params: { path } }: { params: { path: string[] } }) => {
  const res = await fetch(`https://raw.githubusercontent.com/${path.join('/')}`, { next: { revalidate: 10 } });
  const markdown = await res.text();

  return (
    <ReactMarkdown
      components={{
        code: ({ children, inline }) => <code className={inline ? 'inline' : ''}>{children}</code>,
        link: ({ children, href, title }) => (
          <Link href={href ?? '#'} title={title}>
            {children}
          </Link>
        ),
      }}
      rehypePlugins={[rehypeSlug]}
      remarkPlugins={[remarkGfm, remarkGemoji]}
      skipHtml
      transformImageUri={(uri) => getPath({ path, uri })}
      transformLinkUri={(uri) => getPath({ path, uri })}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default DocPage;
