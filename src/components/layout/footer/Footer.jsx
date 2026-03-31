import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="w-11/12 lg:w-10/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-white gap-5">
              <div className="space-y-2">
                <h4 className="font-bold text-3xl">DigiTools</h4>
                <p className="text-small">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-bold">Product</h5>
                <div className="text-small">
                <p>Features</p>
                <p>Pricing</p>
                <p>Templates</p>
                <p>Integrations</p>
                </div>
              </div>
              <div className="space-y-2">
                <h5 className="font-bold">Company</h5>
                <div className="text-small">
                <p>About</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Press</p>
                </div>
              </div>
              <div className="space-y-2">
                <h5 className="font-bold">Resources</h5>
                <div className="text-small">
                <p>Documentation</p>
                <p>Help Center</p>
                <p>Community</p>
                <p>Contact</p>
                </div>
              </div>
              <div className="space-y-2">
                <h5 className="font-bold">Social Links</h5>
                <div className="flex gap-2">
                <FaFacebookSquare/>
                <FaTwitterSquare/>
                <FaInstagramSquare/>
                </div>
              </div>
            </div>
            <hr className="border-dashed border-gray-500 mt-10 mb-3"/>
            <div className="text-white flex flex-col md:flex-row justify-between gap-5">
              <div className="flex justify-center">
                <p className="text-[12px]">© 2026 DigiTools. All rights reserved.</p>
              </div>
              <div className="flex gap-5 text-small justify-center">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies</p>
              </div>
            </div>
        </section>
    );
};

export default Footer;