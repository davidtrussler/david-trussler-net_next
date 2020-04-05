import Head from 'next/head';
import {Header} from '../components/Header'; 
import {Main} from '../components/Main'; 
import {Footer} from '../components/Footer'; 
import '../stylesheets/app.scss'; 

function App() {
  return (
    <React.Fragment>
      <Head>
        <title>david trussler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/jpg" href="/images/favicon.png"/>
      </Head>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
