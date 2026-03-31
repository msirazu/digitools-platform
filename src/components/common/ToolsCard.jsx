import { use } from "react";
import ToolCard from "./ToolCard";

const ToolsCard = ({ dataPromise }) => {
    const allData = use(dataPromise);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {allData.map(data => <ToolCard key={data.id} data={data}/>)}
        </div>
    );
};

export default ToolsCard;