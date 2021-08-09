import { GetStaticProps } from 'next'
import paintings from "../data.json"
import { Header } from "../components/Header"
import { MetaTags } from "../components/Metatags"
import { Gallery } from "../components/Gallery"
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5 }}

      >

        <Header />
        <main >
          <Gallery paintings={paintings} />
        </main>
      </motion.div>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  return {
    props: { paintings }
  }
}