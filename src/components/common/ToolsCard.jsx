import { use } from "react";
import ToolCard from "./ToolCard";

const ToolsCard = ({ dataPromise, handleCart, cart, setCart }) => {
    const allData = use(dataPromise);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {allData.map(data => <ToolCard key={data.id} data={data} handleCart={handleCart} cart={cart} setCart={setCart}/>)}
        </div>
    );
};

export default ToolsCard;