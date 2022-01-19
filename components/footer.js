import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Copyright() {
    return (
        <footer className={styles.footer}>
            <Link href="/">Home</Link>
            <Link href="https://github.com/rnaudah" target="_blank">
                Made by Rnaudah
            </Link>
            <Link href="https://github.com/injoon5" target="_blank">
                Idea by Injoon5
            </Link>
            <p>
                copyrightⓒ 2022 All rights reserved by Rnaudah
            </p>
        </footer>
    )
}