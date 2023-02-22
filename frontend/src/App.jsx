import Navbar from "./components/navbar/Navbar";
import PageWish from "./pages/pagewish/PageWish";
import "./App.css";
import PageMask from "./pages/pagesMask/PageMask";

function App() {
  return (
    <div className="App">
      <PageMask />
      <Navbar />
      <PageWish />
    </div>
  );
}

export default App;
