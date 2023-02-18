// @SEE https://www.npmjs.com/package/next-seo#default-seo-configuration

import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.hiring.robbypambudi.com/',
    siteName: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  titleTemplate: '%s | Hiring',
  description: 'this is a description',
  defaultTitle: 'Hiring',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/images/favicon.ico',
    },
  ],
};

export default config;
