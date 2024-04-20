import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SecondaryNav from "./components/secondaryNav/SecondaryNav";
import SectionA from "./components/sections/SectionA";
import SectionB from "./components/sections/SectionB";
import SectionC from "./components/sections/SectionC";

function App() {
  return (
    <div className="flex-column">
      <header class="fixed z-20 w-full  divide-y-2 divide-purple-500/95  dark:divide-white">
        <Header />
        <SecondaryNav />
      </header>
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </div>
  );
}

export default App;
