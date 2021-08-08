import slugify from "slugify"
import type { Paintings } from "../types"

export const getAdjacentArt = (paintings: Paintings, name: string) => {

    let next = null
    let previous = null

    for (let i = 0; i < paintings.length; i++) {

        if (paintings[i].name === name) {

            if (paintings[i + 1]) {
                next = slugify(paintings[i + 1].name, { lower: true })
            }

            if (paintings[i - 1]) {
                previous = slugify(paintings[i - 1].name, { lower: true })
            }
            break
        }
    }

    return {
        next,
        previous,
    }
}