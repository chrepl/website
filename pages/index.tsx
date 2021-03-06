import React from 'react'
import Head from 'next/head'

import Heading from '@local/components/Heading'
import Footer from '@local/components/Footer'

import styles from '@local/styles/Home.module.css'

const HomePage: React.FC = () => (
    <div className={styles.container}>
        <Head>
            <title>/</title>
        </Head>

        <Heading text="Home" />

        <main className={styles.main}>
            <h1 className={styles.title}>
                Hi 👋 I&apos;m <a>chrepl</a>, but my real name is <a>Alper</a>.{' '}
                <span className={styles.title__description}>
                    Here, I share through my writing my experience as a{' '}
                    <a>Senior Full-Stack Software Engineer</a> and everything I&apos;m
                    learning about. My Development Stacks are <a>Web Development</a>,{' '}
                    <br />
                    <a>Site Reliability Engineering</a> and <a>Reverse Engineering</a>.
                </span>
            </h1>
        </main>

        <Footer />
    </div>
)

export default HomePage
