import type { ArtData } from "../types";
import styles from "../css/art.module.scss";
import { useWindowSize } from "../lib/useWindowSize";
import { ViewLightBox } from "./ViewLightBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion, AnimatePresence } from "framer-motion";

type ArtProps = {
  artData: ArtData;
};

export const Art = ({ artData }: ArtProps) => {
  const window = useWindowSize();
  const { name, year, description, source, artist, images } = artData;

  const imgSrc =
    window.width && window.width >= 600 ? images.hero.large : images.hero.small;

  return (
    <div className={styles.artContainer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.heroImageContainer}>
            <motion.div
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LazyLoadImage
                className={styles.heroImage}
                // effect="blur"
                // effect="opacity"
                alt={name}
                src={imgSrc}
                // delayMethod="debounce"
                // delayTime={100}
                // threshold={100}
              />
            </motion.div>
            {/* <img
                            className={styles.heroImage}
                            src={imgSrc}
                        /> */}

            <ViewLightBox image={images.gallery} />
          </div>

          <div className={styles.authorTitle}>
            <div>
              <h2 className={styles.title2}>{name}</h2>
              <p className={styles.author2}>{artist.name}</p>
            </div>
          </div>
          <img
            className={styles.artistImage}
            src={artist.image}
            alt={artist.name}
          />

          <div className={styles.info}>
            <h2 className={styles.display}>{year}</h2>
            <div className={styles.descriptionContainer}>
              {description.split(/\r\n|\n|\r/gm).map((line, idx) => {
                return (
                  <p className={styles.description} key={idx}>
                    {line}
                    <br />
                  </p>
                );
              })}

              <a
                target="_blank"
                rel="noreferrer noopener"
                href={source}
                className={styles.link2}
              >
                Go to source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
