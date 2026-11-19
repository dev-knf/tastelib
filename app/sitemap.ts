import { metadata as metadataOfAbout } from "./about/about.mdx"

export const baseUrl = "https://tastelib.vercel.app"

export default async function sitemap() {
  const routes = [metadataOfAbout].map((metadata) => ({
    url: `${baseUrl}${metadata.title}`,
    lastModified: metadata.publishedAt,
  }))

  return [...routes]
}
