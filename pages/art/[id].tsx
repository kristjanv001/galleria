import type { GetStaticPaths, GetStaticProps } from 'next'
import type { ArtPageProps } from "../../types"
import { Art } from "../../components/Art";
import { Header } from "../../components/Header"
import { MetaTags } from "../../components/Metatags"
import paintings from "../../data.json"
import { getAllArtIds } from "../../lib/getAllArtIds";
import { getArtData } from "../../lib/getArtData";
import { FooterNav } from "../../components/FooterNav"
import styles from "../../css/artpage.module.scss"

export default function ArtPage({ artData }: ArtPageProps) {
  return (
    <div className={styles.masterContainer}>
      <MetaTags
        title=""
        description=""
      />
      <Header />
      <Art artData={artData} />
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



