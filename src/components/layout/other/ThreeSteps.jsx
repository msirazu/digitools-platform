import StepsCard from "../../ui/StepsCard";

const ThreeSteps = () => {
    return (
        <div className="bg-four py-10 space-y-10">
            <div className="space-y-2">
                <h3 className="font-bold text-3xl text-center">Get Started in 3 Steps</h3>
                <p className="text-[10px] text-center">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div>
                <StepsCard/>
            </div>
        </div>
    );
};

export default ThreeSteps;