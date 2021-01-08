import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
    render(){
        console.log("Inside _document.tsx");
        return (
            <Html>
                <Head>
                    <meta property="custom" content="customValue" />
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
          )
    }  
}
