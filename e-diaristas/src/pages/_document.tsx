import * as React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { AppType } from 'next/app';
import theme from '../UI/themes/theme';
import createEmotionCache from '../data/services/createEmotionCache';
import { MyAppProps } from './_app';

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link 
          rel="shortcut icon" 
          href="/favicon.ico" 
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="/e-diaristas/public/fonts/tw-icons/css/treinaweb-icons.css"
          rel="stylesheet"
        />
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  
  const originalRenderPage = ctx.renderPage;
  
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  
  ctx.renderPage = () =>
  originalRenderPage({
    enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>) =>
    function EnhanceApp(props) {
      return <App emotionCache={cache} {...props} />;
    },
  });
  
  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
    data-emotion={`${style.key} ${style.ids.join(' ')}`}
    key={style.key}
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: style.css }}
    />
    ));
    
    return {
      ...initialProps,
      emotionStyleTags,
    };
  };
  //----------------------------------------------------------------
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  //----------------------------------------------------------------
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  //----------------------------------------------------------------