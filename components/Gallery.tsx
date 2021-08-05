import styles from "../css/gallery.module.scss";
import paintings from "../data.json"

export const Gallery = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.wrapper} ${styles.masonry}`}>
                {paintings.map((painting, idx) => {
                    return (
                        <div className={`${styles.imageBox} ${styles.masonryItem}`}>
                            <img key={idx} className={styles.image} src={painting.images.thumbnail} />
                            <div className={styles.info}>
                                <h4 className={styles.title1}>{painting.name}</h4>
                                <p className={styles.author1}>{painting.artist.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}