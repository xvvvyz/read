import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import { GetStaticPropsContext } from 'next';
import { Inter, Roboto_Mono } from '@next/font/google';
import { NextSeo } from 'next-seo';
import getPath from '../get-path';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto_Mono({ subsets: ['latin'] });

const ReadMePage = ({ markdown, pathParts }: { markdown: string; pathParts: string[] }) => (
  <>
    <NextSeo title={pathParts.slice(-1)[0]} />
    <ReactMarkdown
      className={inter.className}
      components={{
        code: ({ children, inline }) => (
          <code className={`${roboto.className} ${inline ? 'inline' : ''}`}>{children}</code>
        ),
        link: ({ children, href, title }) => (
          <Link href={href ?? '#'} title={title}>
            {children}
          </Link>
        ),
      }}
      rehypePlugins={[rehypeSlug]}
      remarkPlugins={[remarkGfm, remarkGemoji]}
      skipHtml
      transformImageUri={(uri) => getPath({ pathParts, uri })}
      transformLinkUri={(uri) => getPath({ pathParts, uri })}
    >
      {markdown}
    </ReactMarkdown>
  </>
);

interface GetStaticProps extends GetStaticPropsContext {
  params: { path: string[] };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const res = await fetch(`https://raw.githubusercontent.com/${params.path.join('/')}`);
  const markdown = await res.text();
  return { props: { markdown, pathParts: params.path }, revalidate: 10 };
}

export async function getStaticPaths() {
  return { fallback: 'blocking', paths: [] };
}

export default ReadMePage;
