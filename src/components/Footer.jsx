import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = ()=>{

  return (
    <footer className="bg-main py-10 mt-10 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">About ShoppyGlobe</h2>
            <p className="text-sm text-gray-400">
              ShoppyGlobe is your one-stop destination for beauty, fragrances, furniture, and groceries.<br/>
              Discover a better way to shop — only at ShoppyGlobe.
            </p>
          </div>

          {/* Categories section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Categories</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><Link to="" className="hover:text-white">Beauty</Link></li>
              <li><Link to="" className="hover:text-white">Groceries</Link></li>
              <li><Link to="" className="hover:text-white">Fragnance</Link></li>
              <li><Link to="" className="hover:text-white">Furniture</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
              <li><Link to="/checkout" className="hover:text-white">Checkout</Link></li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <Link className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaFacebookF />
              </Link>
              <Link className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaGithub />
              </Link>
              <Link className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaInstagram />
              </Link>
              <Link to="https://www.linkedin.com/in/aslambhati32/" target="_blank"
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="text-center text-gray-500 text-sm mt-4 border-t border-gray-700 pt-4">
              <span>&copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.</span>
              <span className="italic text-white block mt-1"># Aslam Bhati</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;