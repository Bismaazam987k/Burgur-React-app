
import Header from './components/header';
import Content from './components/content';
import Textform from './components/textform';
import './App.css';
// import IngredientManager from './components/burgur builder';

function App() {
  return (
    <div className="App">
     <Header/>
     <Content/>
     {/* <IngredientManager/> */}
     <Textform  btn='SUBMIT' but='SIGNIN'/>
    </div>
  );
}

export default App;
