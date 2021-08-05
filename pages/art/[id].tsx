import { GetStaticPaths, GetStaticProps } from 'next'
import { Art } from "../../components/Art";
import { Header } from "../../components/Header"
import { MetaTags } from "../../components/Metatags"
import paintings from "../../data.json"
import { getAllArtIds } from "../../lib/getAllArtIds";
import { getArtData } from "../../lib/getArtData";


export type ArtData = {
  id: string,
  name: string,
  year: number,
  description: string,
  source: string,
  artist: {
    image: string,
    name: string
  },
  images: {
    thumbnail: string,
    hero: {
      small: string,
      large: string
    },
    gallery: string
  }
}

type ArtPageProps = {
  artData: ArtData
}

export default function ArtPage({ artData }: ArtPageProps) {
  return (
    <div>
      <MetaTags
        title=""
        description=""
      />
      <Header />
      <div >
        <Art artData={artData} />
      </div>
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



