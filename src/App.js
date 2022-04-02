import "./App.css";
import { NavBar, Footer } from "./Components";
import { NavRoutes } from "./Components/Routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main_container">
        <NavRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
