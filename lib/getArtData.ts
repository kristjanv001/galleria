import paintings from "../data.json"
import slugify from "slugify"

export const getArtData = (id: string | string[] | undefined) => {

    const paintingData = paintings.find((p) => {
        return slugify(p.name, { lower: true }) === id
    })

    return {
        id,
        ...paintingData
    }
}
