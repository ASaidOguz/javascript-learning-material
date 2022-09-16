import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User';
const age ="38"
const name="Ahmet Said"
const surname="Oğuz"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h2>{name} {surname}</h2>
        <User 
        name={name} 
        surname={surname} 
        age={age}
        isLoggedin={true}
        friends={["Yakup","Mehmet","Şahsuvar"]}
        
        //2 süslü parantez çünkü biri objenin biride jsx için 
        //bir diğeride tanımlamadan gelen parantez!!
        address={{
          title:"Yakuplu/Beylikdüzü",
          zip:"34640"
        }}/>
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Header>Burası children element için!!</Header>
        <label htmlFor='myInput'>
         Name:
         <input id="myInput"></input>
        </label>
      </header>
    </div>
  );
}

export default App;
