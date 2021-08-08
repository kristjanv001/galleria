import paintings from "./data.json"

export type Paintings = typeof paintings


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

export type ArtPageProps = {
    artData: ArtData
}

export type FooterNavProps = {
    artData: ArtData
}

export type ArtProps = {
    artData: ArtData
}

export type ViewLightBoxProps = {
    image: string
}