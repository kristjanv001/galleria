import type { FooterNavProps } from "../types"
import styles from "../css/footernav.module.scss"
import Link from "next/link"
import paintings from "../data.json"
import slugify from "slugify"
import { ProgressBar } from "./ProgressBar"
import { ArrowNext, ArrowBack } from "./Arrows"
import { getProgress } from "../lib/getProgress"
import { getAdjacentArt } from "../lib/getAdjacentArt"


export const FooterNav = ({ artData }: FooterNavProps) => {

    const { name, artist } = artData

    const adjacentSlugs = getAdjacentArt(paintings, name)
    const percent = getProgress(paintings, name)

    return (
        <div className={styles.whole}>

            <ProgressBar percent={percent} />
            <div className={styles.container}>

                <div className={styles.wrapper}>

                    <div>
                        <h2 className={styles.title3}>{name}</h2>
                        <p className={styles.author3}>{artist.name}</p>
                    </div>

                    <div className={styles.iconNav}>

                        <Link
                            scroll={false}
                            href={adjacentSlugs.previous ? `/art/${adjacentSlugs.previous}` : `/art/${slugify(name, { lower: true })}`}>
                            <a>
                                <div className={`${styles.back} ${!adjacentSlugs.previous ? styles.grayArrow : undefined}`}>
                                    <ArrowBack />
                                </div>
                            </a>
                        </Link>

                        <Link
                            scroll={false}
                            href={adjacentSlugs.next ? `/art/${adjacentSlugs.next}` : `/art/${slugify(name, { lower: true })}`}>
                            <a>
                                <div className={`${styles.next} ${!adjacentSlugs.next ? styles.grayArrow : undefined}`}>
                                    <ArrowNext />
                                </div>
                            </a>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}