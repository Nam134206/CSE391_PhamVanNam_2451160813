import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />

            <Hero
                name="Phạm Văn Nam"
                title="Frontend Developer"
            />

            <About />

            <Skills />

            <Portfolio />

            <Contact />

            <Footer />
        </>
    );
}

export default App;