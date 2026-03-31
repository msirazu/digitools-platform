import { Suspense, useState } from "react";
import ToolsCard from "./components/common/ToolsCard";
import Navbar from "./components/layout/header/Navbar";
import HeroBanner from "./components/ui/HeroBanner";
import UserStats from "./components/ui/UserStats";
import Cart from "./components/common/Cart";

const dataFetch = async () => {
  const res = await fetch('/data/toolsData.json');
  return res.json();
}

const App = () => {
  const dataPromise = dataFetch();
  const [activeTab, setActiveTab] = useState('product');
  return (
    <div className="font-manrope">
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
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Cart" onClick={()=> setActiveTab('cart')}/>
</div>
        </section>

        <section id="card-section">
          {activeTab === 'product' ? <div>
          <Suspense fallback={<p>loading.....</p>}>
          <ToolsCard dataPromise={dataPromise}/>
          </Suspense>
          </div> : <div>
            <Cart/>
          </div>}
        </section>

      </main>

      <section id="workflow-section">

      </section>

      <footer id="footer-section" className="w-11/12 lg:w-10/12 mx-auto">

      </footer>
    </div>
  );
};

export default App;