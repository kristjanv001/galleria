import styles from "../css/header.module.scss"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import paintings from "../data.json"
import slugify from "slugify"

export const Header = () => {
    const router = useRouter()

    const [isSlideShow, setIsSlideShow] = useState(false)

    useEffect(() => {
        router.asPath === "/" ? setIsSlideShow(false) : setIsSlideShow(true)
    }, [])

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
                <Link href={isSlideShow ? "/" : `/art/${slugify(paintings[0].name, { lower: true })}`}>
                    <a className={styles.link1}>
                        {isSlideShow ? "stop slideshow" : "start slideshow"}
                    </a>

                </Link>
            </div>
        </div>
    )
}
