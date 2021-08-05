import { GetStaticProps } from 'next'
import paintings from "../data.json"
import { Header } from "../components/Header"
import { MetaTags } from "../components/Metatags"
import { Gallery } from "../components/Gallery"


export type Paintings = typeof paintings

type HomePageProps = {
  paintings: Paintings
}

export default function HomePage({ paintings }: HomePageProps) {
  return (
    <div>
      <MetaTags
        title="Galleria"
        description="Art gallery slideshow site challenge from Frontendmentor"
      />
      <Header />
      <main >
        <Gallery paintings={paintings} />
      </main>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  return {
    props: { paintings }
  }
}