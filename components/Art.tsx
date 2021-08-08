import type { ArtProps } from "../types"
import styles from "../css/art.module.scss"
import { useWindowSize } from "../lib/useWindowSize"
import { ViewLightBox } from "./ViewLightBox"

export const Art = ({ artData }: ArtProps) => {

    const window = useWindowSize()
    const { name, year, description, source, artist, images } = artData

    return (
        <div className={styles.artContainer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>

                    <div className={styles.heroImageContainer}>
                        <img className={styles.heroImage} src={window.width && window.width >= 600 ? images.hero.large : images.hero.small} />
                        <ViewLightBox image={images.gallery} />
                    </div>

                    <div className={styles.authorTitle}>
                        <div>
                            <h2 className={styles.title2}>{name}</h2>
                            <p className={styles.author2}>{artist.name}</p>
                        </div>
                    </div>
                    <img className={styles.artistImage} src={artist.image} />

                    <div className={styles.info}>
                        <h2 className={styles.display}>{year}</h2>
                        <div className={styles.descriptionContainer}>

                            {/* <p className={styles.description}>{description}</p> */}

                            {description.split(/\r\n|\n|\r/gm).map((line, idx) => {
                                return <p className={styles.description} key={idx}>{line}<br /></p>
                            })}


                            <a target="_blank" rel="noreferrer noopener" href={source} className={styles.link2}>Go to source</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}