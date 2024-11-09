import appConfig from '../../config/appConfig';

const Meta = () => (
    <Helmet>
        <title>{appConfig.title}</title>
        <meta name="title" content={appConfig.title} />
        <meta name="description" content={appConfig.description} />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={appConfig.title} />
        <meta property="og:description" content={appConfig.description} />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/logo192.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Favicon and Theme Color */}
        <link rel="icon" href={`${process.env.PUBLIC_URL}/favicon.ico`} />
        <meta name="theme-color" content="#000000" />
    </Helmet>   
);

export default Meta;
