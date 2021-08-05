import { Header } from "../components/Header"
import { MetaTags } from "../components/Metatags"
import { Gallery } from "../components/Gallery"

export default function Home() {
  return (
    <div>
      <MetaTags
        title="Galleria"
        description="Art gallery slideshow site challenge from Frontendmentor"
      />
      <Header />
      <main >
        <Gallery />
      </main>
    </div>
  )
}
