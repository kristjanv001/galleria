import styles from "../css/gallery.module.scss";
import type { Paintings } from "../pages/index";
import Link from "next/link";
import slugify from "slugify";
import { motion } from "framer-motion";

type GalleryProps = {
  paintings: Paintings;
};

export const Gallery = ({ paintings }: GalleryProps) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} ${styles.masonry}`}>
        {paintings.map((painting, idx) => {
          const slug = `/art/${slugify(painting.name, { lower: true })}`;
          return (
            <Link key={idx} href={slug}>
              <div className={`${styles.imageBox} ${styles.masonryItem}`}>
                <img className={styles.image} src={painting.images.thumbnail} alt={painting.name} key={idx} />
                <div className={styles.info}>
                  <h4 className={styles.title1}>{painting.name}</h4>
                  <p className={styles.author1}>{painting.artist.name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
