import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Portfolio from "./routes/portfolio/Portfolio";
import Cv from "./routes/cv/Cv";

function App() {
    return (
        <>
            <Nav />

            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/cv" element={<Cv />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
