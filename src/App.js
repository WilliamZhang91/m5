import { Route, Routes } from "react-router-dom";
import Header from "./components/templates/Header";
import Footer from "./components/templates/Footer";
import Quote from "./components/financial_insurace/Quote";
import Apply from "./components/financial_insurace/Apply";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/quote" element={<Quote />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
