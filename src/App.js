// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BasicExample}  from './Components/Navbar'
import { Header } from "./Components/Header";
import {Collectin} from "./Components/Collection"
import { Collectionimage } from "./Components/Collectionimage";
import { Foote } from "./Components/Footer";

function App() {
  return (
    <div className='App '>
      <BasicExample />
      <Header />
      <Collectin />
      <Collectionimage />
      <Foote />
    </div>
  );
}

export default App;
