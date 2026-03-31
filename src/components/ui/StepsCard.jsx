import { FaBox, FaRegUser, FaRocket } from "react-icons/fa";

const StepsCard = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="border border-gray-200 rounded-xl p-10 bg-white relative">
            <div className="absolute top-3 right-3">
                <div className="bg-one w-8 h-8 rounded-full flex justify-center items-center text-white">
                <p className="text-small">01</p>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <div className="bg-gray-200 w-15 h-15 flex justify-center items-center rounded-full">
                <FaRegUser className="text-3xl"/>
                </div>
                <h4 className="font-bold">Create Account</h4>
                <p className="text-xsmall text-center">Sign up for free in seconds. No credit card required to get started.</p>
            </div>
        </div>

        <div className="border border-gray-200 rounded-xl p-10 bg-white relative">
            <div className="absolute top-3 right-3">
                <div className="bg-one w-8 h-8 rounded-full flex justify-center items-center text-white">
                <p className="text-small">02</p>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <div className="bg-gray-200 w-15 h-15 flex justify-center items-center rounded-full">
                <FaBox className="text-3xl"/>
                </div>
                <h4 className="font-bold">Choose Products</h4>
                <p className="text-xsmall text-center">Browse our catalog and select the tools that fit your needs.</p>
            </div>
        </div>

        <div className="border border-gray-200 rounded-xl p-10 bg-white relative">
            <div className="absolute top-3 right-3">
                <div className="bg-one w-8 h-8 rounded-full flex justify-center items-center text-white">
                <p className="text-small">03</p>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <div className="bg-gray-200 w-15 h-15 flex justify-center items-center rounded-full">
                <FaRocket className="text-3xl"/>
                </div>
                <h4 className="font-bold">Start Creating</h4>
                <p className="text-xsmall text-center">Download and start using your premium tools immediately.</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default StepsCard;
