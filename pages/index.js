import {Header} from '../components/Header'; 
import {Main} from '../components/Main'; 
import {Footer} from '../components/Footer'; 
import '../stylesheets/app.scss'; 

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
