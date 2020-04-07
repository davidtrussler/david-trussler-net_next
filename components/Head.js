import Head from 'next/head';

export function DocHead(props) {
	return (
    <Head>
      <title>david trussler | {props.pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" type="image/jpg" href="/images/favicon.png"/>
    </Head>
	)
}
