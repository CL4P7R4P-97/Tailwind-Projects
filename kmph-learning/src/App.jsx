import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import MainNav from "./components/header/MainNav";
import SecondaryNav from "./components/header/SecondaryNav";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Courses from "./components/pages/Courses";
import Home from "./components/pages/Home";
import Notes from "./components/pages/Notes";
import Tutorial from "./components/pages/Tutorial";
function App() {
  return (
    <>
      <Router>
        <div className="flex min-h-screen flex-col">
          <header className="fixed z-20 w-full divide-y-2 divide-purple-500/95 drop-shadow-sm  ">
            <MainNav />
            <SecondaryNav />
          </header>
          <main className="mt-40  grow ">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/courses" element={<Courses />}></Route>
              <Route path="/tutorials" element={<Tutorial />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/notes" element={<Notes />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
