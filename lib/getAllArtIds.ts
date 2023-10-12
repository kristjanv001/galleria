import paintings from "../data.json"
import slugify from "slugify"

type PaintingsData = typeof paintings

export const getAllArtIds = (paintings: PaintingsData) => {

    return paintings.map(painting => {

        return {
            params: {
                id: slugify(painting.name, { lower: true, }),
            }
        }
    })
}