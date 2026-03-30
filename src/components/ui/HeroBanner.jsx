import heroImg from '../../assets/images/banner.png';
const HeroBanner = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row py-10 gap-5 items-center justify-center">
                <div className='flex-1 space-y-5'>
                    <h5>New: AI-Powered Tools Available</h5>
                    <h2 className='font-bold text-5xl'>Supercharge Your Digital Workflow</h2>
                    <p className='text-sm'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                    <div className='flex gap-5'>
                        <button className='btn-one'>Explore Products</button>
                        <button className='btn btn-outline rounded-full'>Watch Demo</button>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src={heroImg}/>
                </div>
            </section>
        </>
    );
};

export default HeroBanner;