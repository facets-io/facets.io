import Head from 'next/head'

const FacetHead = () => <Head>
    <script src="https://api.facet.run/js?id=DOMAIN~ZmIzYzIzMTYtY2ZhYi00ZjY3LWFhOGQtOGM5YmVjMDdlMWQ4"></script>
    {/* google analytics */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3V7FRFN53H"></script>
    <script dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-3V7FRFN53H');
      `,
    }}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Facet</title>
    <link rel="icon" href="/favicon.ico" />
</Head >;

export default FacetHead;