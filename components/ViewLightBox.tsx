import type { ViewLightBoxProps } from "../types"
import styles from "../css/viewlightbox.module.scss"
import ReactModal from 'react-modal';
import { useState, useEffect } from "react"

export const ViewLightBox = ({ image }: ViewLightBoxProps) => {
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        const body = document.querySelector("body")

        isOpen ? body?.classList.add("lockscroll") : body?.classList.remove("lockscroll")
    }, [isOpen, setIsOpen])

    return (

        <div >
            <button onClick={() => setIsOpen(true)} className={styles.button}><img src="/assets/shared/icon-view-image.svg" alt="" /><span>View Image</span></button>
            <ReactModal
                isOpen={isOpen}
                contentLabel="Image lightbox"
                overlayClassName={styles.lightBoxModalOverlay}
                className={styles.lightBoxModalContent}
                shouldCloseOnEsc={true}
                shouldFocusAfterRender={true}
                shouldCloseOnOverlayClick={true}
                parentSelector={() => document.body}
                closeTimeoutMS={0}
                preventScroll={false}
                onRequestClose={() => setIsOpen(false)}
            >
                <button className={styles.close} onClick={() => setIsOpen(false)}>Close</button>
                <img src={image} />
            </ReactModal>
        </div >

    )
}