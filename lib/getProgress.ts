import type { Paintings } from "../types"

export const getProgress = (paintings: Paintings, name: string) => {
    let percent = 0

    for (let i = 0; i < paintings.length; i++) {
        if (paintings[i].name === name) {
            i = i + 1
            percent = (i / paintings.length) * 100
            break;
        }
    }
    return percent
}