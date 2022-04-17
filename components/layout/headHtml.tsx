import React from 'react';
import Head from 'next/head';
import { HeadProps } from '@/types/headHtml';

function HeadHTML(props: HeadProps) {
  const { description, keywords, title, ogImage, ogKeywords, ogUrl } = props;
  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,400;1,500&display=swap"
        rel="stylesheet"
      />
      <title>{`KorShop - ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:keywords" content={ogKeywords} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
    </Head>
  );
}

export default HeadHTML;
