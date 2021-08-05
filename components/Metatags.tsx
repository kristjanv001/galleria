import Head from 'next/head'

interface IMetaTags {
    title: string,
    description: string,
    image?: string
}

export const MetaTags = ({ title, description, image }: IMetaTags) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="author" content="Kristjan Vingel" />
            <meta name="description" content={description} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@kristjanv001" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta name="og:image" content={image} />
        </Head>
    )
}