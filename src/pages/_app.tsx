import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { useEffect, useState } from 'react';
import { PublicLayout } from 'components/layouts';
import AppConfigProvider from 'contexts/AppConfigProvider';
import theme from 'styles/theme';

NProgress.configure({ showSpinner: false });

type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Layout?: React.FC<any>;
};

type AppPropsWithLayout = AppProps<Record<string, unknown>> & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [clientLoaded, setClientLoaded] = useState(false);
  const [isGsspLoading, setIsGsspLoading] = useState(false);

  const Layout = Component.Layout ?? PublicLayout;
  useEffect(() => {
    setClientLoaded(true);
  }, []);

  useEffect(() => {
    const start = () => {
      setIsGsspLoading(true);
    };
    const end = () => {
      setIsGsspLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  useEffect(() => {
    const loading = !clientLoaded || isGsspLoading;
    if (loading) NProgress.start();
    else NProgress.done();
  }, [clientLoaded, isGsspLoading]);

  return (
    <ChakraProvider theme={theme}>
      <AppConfigProvider
        {...{
          pageTitle: pageProps.pageTitle,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppConfigProvider>
    </ChakraProvider>
  );
}

export default MyApp;
