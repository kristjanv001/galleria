import type { GetStaticPaths, GetStaticProps } from 'next'
import type { ArtData } from "../../types"
import { Art } from "../../components/Art";
import { Header } from "../../components/Header"
import { MetaTags } from "../../components/Metatags"
import paintings from "../../data.json"
import { getAllArtIds } from "../../lib/getAllArtIds";
import { getArtData } from "../../lib/getArtData";
import { FooterNav } from "../../components/FooterNav"
import styles from "../../css/artpage.module.scss"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router'




type ArtPageProps = {
  artData: ArtData
}


const variants = {
  hidden: { opacity: 1, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 1, x: 0, y: 0 },
}


export default function ArtPage({ artData }: ArtPageProps) {

  const router = useRouter()


  return (
    <div className={styles.masterContainer}>

      <MetaTags
        title={`Galleria | ${artData.name}`}
        description={artData.description}
      />

      <Header />

      <AnimatePresence exitBeforeEnter>
        <motion.div
        // transition={{ duration: .6 }}
        // key={artData.id}
        // key={router.asPath}
        // variants={variants}
        // initial="hidden"
        // animate="enter"
        // exit="exit"
        // transition={{
        //   x: { type: "spring" },
        //   // opacity: { duration: 0.3 }
        // }}
        >
          <Art artData={artData} />
        </motion.div>
      </AnimatePresence>


      <FooterNav artData={artData} />

    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArtIds(paintings)

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const artData = getArtData(params?.id)

  return {
    props: { artData }
  }
}



