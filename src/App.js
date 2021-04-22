import Header from "./components/Header";
import HomePage from "./components/HomePage"
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"
import Page4 from "./components/Page4"
import Page5 from "./components/Page5"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
    </div>
  );
}

export default App;
