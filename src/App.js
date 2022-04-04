import "./App.css";
import { NavBar, Footer, NavRoutes } from "./Components";

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
