import React from 'react'
import Head from 'next/head'

import Footer from '@local/components/Footer'

import styles from '@local/styles/Home.module.css'

const HomePage: React.FC = () => (
    <div className={styles.container}>
        <Head>
            <title>/</title>
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Hi 👋 I&apos;m <a>chrepl</a>, but my real name is <a>Alper</a>.{' '}
                <span className={styles.title__description}>
                    Here, I share through my writing my experience as a{' '}
                    <a>Full-Stack Software Engineer</a> and everything I&apos;m learning
                    about on <code className={styles.code}>React</code>,{' '}
                    <code className={styles.code}>TypeScript</code>, and{' '}
                    <code className={styles.code}>Testing</code>.
                </span>
            </h1>
        </main>

        <Footer />
    </div>
)

export default HomePage
