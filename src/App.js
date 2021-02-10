import "./App.css";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header appVersion={`0.0.2`} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
