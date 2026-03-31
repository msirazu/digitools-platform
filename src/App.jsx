import { Suspense, useState } from "react";
import ToolsCard from "./components/common/ToolsCard";
import Navbar from "./components/layout/header/Navbar";
import HeroBanner from "./components/ui/HeroBanner";
import UserStats from "./components/ui/UserStats";
import Cart from "./components/common/Cart";
import Footer from "./components/layout/footer/Footer";
import WorkFlow from "./components/layout/other/WorkFlow";
import TransparentPricing from "./components/layout/other/TransparentPricing";
import ThreeSteps from "./components/layout/other/ThreeSteps";
import Loading from "./components/common/Loading";

const dataFetch = async () => {
  const res = await fetch('/data/toolsData.json');
  return res.json();
}

const App = () => {
  const dataPromise = dataFetch();
  const [activeTab, setActiveTab] = useState('product');
  const [cart, setCart] = useState([]);

  const handleCart = (data) => {
      setCart([...cart, data]);
  }

  return (
    <div className="font-manrope space-y-5">
      <header id="header-section" className="w-11/12 lg:w-10/12 mx-auto">
        <Navbar/>
        <HeroBanner/>
      </header>

      <section id="user-stats-section">
        <UserStats/>
      </section>

      <main id="main-section" className="w-11/12 lg:w-10/12 mx-auto">
        <section className="space-y-2 text-center mt-10">
          <h3 className="font-bold text-2xl">Premium Digital Tools</h3>
          <p className="text-[12px]">Choose from our curated collection of premium digital products designed<br/>to boost your productivity and creativity.</p>
        </section>

        <section id="tab-section" className="my-10 flex justify-center">
          <div className="tabs tabs-box">
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Products" defaultChecked onClick={()=> setActiveTab('product')}/>
  <input type="radio" name="my_tabs_1" className="tab" aria-label={`Cart: (${cart.length})`} onClick={()=> setActiveTab('cart')}/>
</div>
        </section>

        <section id="card-section">
          {activeTab === 'product' ? <div>
          <Suspense fallback={<Loading/>}>
          <ToolsCard dataPromise={dataPromise} handleCart={handleCart} cart={cart} setCart={setCart}/>
          </Suspense>
          </div> : <div>
            <Cart/>
          </div>}
        </section>

      </main>

      <section id="other-section">
        <ThreeSteps/>
        <TransparentPricing/>
        <WorkFlow/>
      </section>

      <footer id="footer-section" className="bg-three pt-10 pb-5">
        <Footer/>
      </footer>
    </div>
  );
};

export default App;