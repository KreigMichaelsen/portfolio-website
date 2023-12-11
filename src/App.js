import logo from './logo.svg';
import './App.css';
import { NavBar } from './navbar/NavBar';
import { ApplicationViews } from './views/ApplicationViews';

function App() {
  return (
    <>
    <NavBar />
		<ApplicationViews />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload. This is Kreig's test
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
