import {Header} from '../components/Header'; 
import {Main_music} from '../components/Main_music'; 
import {Footer} from '../components/Footer'; 
import '../stylesheets/app.scss'; 

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Main_music/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
