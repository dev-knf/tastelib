import About from "./about.mdx"

export const metadata = {
  title: "About",
  description: "About tastelib",
}

export default function Page() {
  return (
    <section>
      <About />
    </section>
  )
}
