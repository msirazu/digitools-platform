const ToolCard = ({ data, handleCart}) => {

    const {name, description, price, period, tag, features, icon} = data;

    return (
        <div className="border p-5 rounded-xl border-gray-200 space-y-3 hover:shadow-md hover:border-gray-300 hover:cursor-pointer">
            <div className="flex justify-between items-center">
                {icon}
                <p className={`capitalize text-xsmall px-5 py-1 rounded-full ${tag == 'popular' && 'bg-tag-three text-one'} ${tag == 'new' && 'bg-tag-one text-tag-two'} ${tag == 'best seller' && 'bg-tag-four text-tag-five'}`}>{tag}</p>
            </div>
            <h2 className="font-bold text-xl">{name}</h2>
            <p className="text-sm">{description}</p>
            <h5>$ {price} / <span className="capitalize">{period}</span></h5>
            <div>
            {features.map((feature, index) => <p className="text-[12px]" key={index}>{feature}</p>)}
            </div>
            <button onClick={() => handleCart(data)} className="btn-one w-full">Buy Now</button>
        </div>
    );
};

export default ToolCard;