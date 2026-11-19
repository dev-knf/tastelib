import { metadata as aboutMetadata } from "./about/content.mdx"

type ContentMetadata = {
  url: string
  title: string
  description: string
  publishedAt: string
}

export const baseUrl = "https://tastelib.vercel.app"

export default async function sitemap() {
  const routes = [aboutMetadata satisfies ContentMetadata].map((metadata) => ({
    url: `${baseUrl}${metadata.url}`,
    lastModified: metadata.publishedAt,
  }))

  return [...routes]
}
