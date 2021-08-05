import type { ArtData } from "../pages/art/[id]"
import styles from "../css/art.module.scss"

type ArtProps = {
    artData: ArtData
}

export const Art = ({ artData }: ArtProps) => {

    console.log(artData)

    const { name, year, description, source, artist, images } = artData


    return (
        <article className={styles.container}>
            <div className={styles.wrapper}>

                <img className={styles.heroImage} src={images.hero.small} />
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
                        <p className={styles.description}>{description}</p>
                    </div>
                    <a className={styles.link2}>Go to source</a>
                </div>

            </div>
        </article>
    )
}