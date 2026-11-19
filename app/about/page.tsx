import { formatDate } from "@/lib/utils"
import Content, { metadata } from "./content.mdx"

export { metadata }

export default function Page() {
  return (
    <section>
      <h1 className="title text-2xl font-semibold tracking-tighter">
        {metadata.title}
      </h1>
      <div className="mt-2 mb-8 flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <Content />
      </article>
    </section>
  )
}
