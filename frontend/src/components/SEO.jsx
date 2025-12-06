import { Helmet } from 'react-helmet-async';

export default function SEO({
    title,
    description,
    keywords,
    image = "/og-image.png",
    url = "https://zenvoa-technologies.onrender.com" // Updated Default URL
}) {
    const siteTitle = "Zenvoa Technologies | Premium Digital Solutions";
    const defaultDescription = "Zenvoa Technologies builds high-performance web applications, stunning websites, and scalable digital solutions for modern businesses.";
    const defaultKeywords = "web development, software agency, react, next.js, digital transformation, zenvoa";

    const fullTitle = title ? `${title} | Zenvoa Technologies` : siteTitle;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
}