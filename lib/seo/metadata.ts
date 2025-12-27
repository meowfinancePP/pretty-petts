import { Metadata } from 'next'

export const siteConfig = {
  name: 'PrettyPets NFT',
  description: 'Premium NFT marketplace for digital pets with Web3 integration',
  url: 'https://prettypets.io',
  ogImage: 'https://prettypets.io/og-image.png',
  twitter: '@prettypets',
}

export function generateMetadata(
  title: string,
  description: string,
  image?: string,
  path?: string
): Metadata {
  const url = path ? `${siteConfig.url}${path}` : siteConfig.url

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image || siteConfig.ogImage],
      creator: siteConfig.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
  }
}

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: 'Premium NFT Marketplace',
    description: 'Discover and trade rare digital pets on the most advanced NFT marketplace',
    image: 'https://prettypets.io/og-home.png',
  },
  market: {
    title: 'NFT Marketplace',
    description: 'Browse, buy, and sell premium digital pet NFTs with advanced trading tools',
    image: 'https://prettypets.io/og-market.png',
  },
  profile: {
    title: 'Your Profile',
    description: 'Manage your NFT collection, reputation, and premium membership',
    image: 'https://prettypets.io/og-profile.png',
  },
  create: {
    title: 'Create NFT',
    description: 'Mint your own digital pet NFT and join the creator community',
    image: 'https://prettypets.io/og-create.png',
  },
  shelter: {
    title: 'Animal Shelters',
    description: 'Support real animal shelters through NFT purchases and donations',
    image: 'https://prettypets.io/og-shelter.png',
  },
}
