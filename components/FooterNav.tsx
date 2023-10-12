import type { ArtData } from "../types";
import styles from "../css/footernav.module.scss";
import Link from "next/link";
import slugify from "slugify";
import { ProgressBar } from "./ProgressBar";
import { ArrowNext, ArrowBack } from "./Arrows";
import { usePaintingsProgress } from "../lib/usePaintingsProgress";
import { useAdjacentArt } from "../lib/useAdjacentArt";

type FooterNavProps = {
  artData: ArtData;
};

export const FooterNav = ({ artData }: FooterNavProps) => {
  const { name, artist } = artData;
  const currentSlug = slugify(name, { lower: true });

  const paintingsProgress = usePaintingsProgress();
  const adjacentArt = useAdjacentArt();

  return (
    <div>
      {adjacentArt && paintingsProgress && (
        <div className={styles.whole}>
          <ProgressBar percent={paintingsProgress[currentSlug]} />
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div>
                <h2 className={styles.title3}>{name}</h2>
                <p className={styles.author3}>{artist.name}</p>
              </div>

              <div className={styles.iconNav}>
                {/* PREV */}
                <Link
                  scroll={false}
                  href={
                    adjacentArt[currentSlug].prev
                      ? `/art/${adjacentArt[currentSlug].prev}`
                      : `/art/${currentSlug}`
                  }
                >
                  <div
                    className={`${styles.back} ${
                      !adjacentArt[currentSlug].prev
                        ? styles.grayArrow
                        : undefined
                    }`}
                  >
                    <ArrowBack />
                  </div>
                </Link>

                {/* NEXT */}
                <Link
                  scroll={false}
                  href={
                    adjacentArt[currentSlug].next
                      ? `/art/${adjacentArt[currentSlug].next}`
                      : `/art/${currentSlug}`
                  }
                >
                  <div
                    className={`${styles.next} ${
                      !adjacentArt[currentSlug].next
                        ? styles.grayArrow
                        : undefined
                    }`}
                  >
                    <ArrowNext />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
