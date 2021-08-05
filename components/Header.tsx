import styles from "../css/header.module.scss"
import Link from "next/link"

export const Header = () => {

    return (

        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link href="/">
                    <a>
                        <img
                            className={styles.logo}
                            src="/assets/shared/logo.svg"
                        />
                    </a>
                </Link>
                <span className={styles.link1}>start slideshow</span>
            </div>
        </div>
    )
}
