import slugify from "slugify"
import { useState, useEffect } from "react";
import paintings from "../data.json"

type AdjacentArt = any

export const useAdjacentArt = () => {

    let [adjacentArt, setAdjacentArt] = useState<AdjacentArt>(null)

    useEffect(() => {
        const paintingsObj: any = {}

        for (let i = 0; i < paintings.length; i++) {
            let id = slugify(paintings[i].name, { lower: true })

            paintingsObj[id] = {
                next: paintings[i + 1]
                    ? slugify(paintings[i + 1].name, { lower: true })
                    : null,
                prev: paintings[i - 1]
                    ? slugify(paintings[i - 1].name, { lower: true })
                    : null
            }
        }
        setAdjacentArt(paintingsObj)
    }, [])

    return adjacentArt
}


