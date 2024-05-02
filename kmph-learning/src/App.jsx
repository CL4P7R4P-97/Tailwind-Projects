import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Footer from "./components/footer/Footer";
import MainNav from "./components/header/MainNav";
import SecondaryNav from "./components/header/SecondaryNav";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Courses from "./components/pages/Courses";
import Home from "./components/pages/Home";
import Notes from "./components/pages/Notes";
import Tutorial from "./components/pages/Tutorial";
import Template from "./components/tutorials/Template";
function App() {
  return (
    <>
      <Router>
        <div className="-mb-6 flex flex-col  ">
          <header className="fixed z-20 w-full divide-y-2 divide-purple-500/95 drop-shadow-sm  ">
            <MainNav />
            <SecondaryNav />
          </header>
          <main className="  main-margin h-full grow  overflow-hidden break-words  ">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/courses" element={<Courses />}></Route>
              <Route path="/tutorials" element={<Tutorial />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/notes" element={<Notes />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/tutorial/*" element={<Template />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
