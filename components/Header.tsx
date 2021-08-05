import styles from "../css/header.module.scss"
import { Logo } from "./Logo"
import Image from "next/image"
import { useWindowSize } from "../lib/useWindowSize"

export const Header = () => {

    const size = useWindowSize();

    return (

        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Image
                    src="/assets/shared/logo.svg"
                    width={size.width && size.width >= 1120 ? 170 : 113}
                    height={size.width && size.width >= 1120 ? 48 : 32}
                />
                <span className={styles.link1}>start slideshow</span>
            </div>
        </div>
    )
}