const UserStats = () => {
    return (
        <div className="gradient-one grid grid-cols-1 md:grid-cols-3 text-white p-10 gap-10">
          <div className="text-center">
            <h5 className="font-bold text-3xl">50K+</h5>
            <p className="text-[12px]">Active Users</p>
          </div>
          <div className="text-center">
            <h5 className="font-bold text-3xl">200+</h5>
            <p className="text-[12px]">Premium Tools</p>
          </div>
          <div className="text-center">
            <h5 className="font-bold text-3xl">4.9</h5>
            <p className="text-[12px]">Rating</p>
          </div>
        </div>
    );
};

export default UserStats;