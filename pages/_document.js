import { Html, Head, Main, NextScript } from 'next/document'
import HeaderComponent from '../components/headercomponent'
import FooterComponent from '../components/footercomponent'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <HeaderComponent/>
        <Main/>
        <FooterComponent/>
        <NextScript />
      </body>
    </Html>
  )
}
