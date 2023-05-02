import { Html, Head, Main, NextScript } from 'next/document'
import HeaderComponent from '../components/headercomponent'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <HeaderComponent/>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
