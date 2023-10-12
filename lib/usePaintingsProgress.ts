import { useState, useEffect } from "react";
import paintings from "../data.json"
import slugify from "slugify"

type PaintingsProgress = any

export const usePaintingsProgress = () => {
    let [paintingsProgress, setPaintingsProgress] = useState<PaintingsProgress>(null)

    useEffect(() => {
        const paintingsObj: any = {}
        let percent = 0;

        for (let i = 0; i < paintings.length; i++) {
            let id = slugify(paintings[i].name, { lower: true })
            i++
            percent = (i / paintings.length) * 100
            i--
            paintingsObj[id] = percent

        }
        setPaintingsProgress(paintingsObj)
    }, [])

    return paintingsProgress
}