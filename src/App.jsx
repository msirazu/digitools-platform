import Navbar from "./components/layout/header/Navbar";
import HeroBanner from "./components/ui/HeroBanner";

const App = () => {
  return (
    <div className="font-manrope w-11/12 lg:w-10/12 mx-auto">
      <header>
        <Navbar/>
        <HeroBanner/>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
};

export default App;