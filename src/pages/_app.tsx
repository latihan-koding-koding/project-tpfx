/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-page-custom-font */
import '../../styles/index.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component: CompProps, pageProps }: AppProps) {
  const Component = CompProps as unknown as () => JSX.Element;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Layanan Trading Berlisensi Terbaik di Indonesia</title>
        <link rel="preload" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&family=Nunito+Sans:wght@200;300;400;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="facebook-domain-verification" content="k2t74lji55onaxfytfy01xhvxupfbv" />
        {/* <!-- Google Tag Manager --> */}

        <script
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-WWQKGDV');`
          }}
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-WWQKGDV" />

        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
      function gtag() {
          dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'GTM-WWQKGDV');`
          }}
        />

        {/* <!-- Twitter universal website tag code --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `! function (e, t, n, s, u, a) {
            e.twq || (s = e.twq = function () {
                    s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
                }, s.version = '1.1', s.queue = [], u = t.createElement(n), u.async = !0, u.src =
                '//static.ads-twitter.com/uwt.js',
                a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a))
        }(window, document, 'script');
        // Insert Twitter Pixel ID and Standard Event data below
        twq('init', 'o82y0');
        twq('track', 'PageView');`
          }}
        />
        {/* <!-- End Twitter universal website tag code --> */}

        {/* <!-- Mgid Sensor --> */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function() { var d = document, w = window; w.MgSensorData = w.MgSensorData || []; w.MgSensorData.push({ cid:712553, lng:"us", project: "a.mgid.com" }); var l = "a.mgid.com"; var n = d.getElementsByTagName("script")[0]; var s = d.createElement("script"); s.type = "text/javascript"; s.async = true; var dt = !Date.now?new Date().valueOf():Date.now(); s.src = "https://" + l + "/mgsensor.js?d=" + dt; n.parentNode.insertBefore(s, n); })();'
          }}
        />
        {/* <!-- /Mgid Sensor --> */}
      </Head>
      <Component {...pageProps}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWQKGDV"
            height="0"
            width="0" //"display:none;visibility:hidden"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </Component>
    </>
  );
}

export default MyApp;
