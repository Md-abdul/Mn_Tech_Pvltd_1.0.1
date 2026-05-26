// import React from "react";
// // import logo from "../assets/web-logo-3.png"
// import logo from "../assets/sec-logo-2.png"
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <React.Fragment>
//       <footer className="dark:bg-gray-900 m-4">
//         <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
//           <div className="sm:flex sm:items-center sm:justify-between">
//             <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
//               <img
//                 src={logo}
//                 className="h-20"
//                 alt="Flowbite Logo"
//               />
              
//                <span className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-semibold tracking-tight whitespace-nowrap dark:text-white">
//   Primenova Consulting
// </span>
//             </Link>
//             <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
//               <li>
//                 <Link to="/refund-policy" className="hover:underline me-4 md:me-6">
//                   Refund Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/terms-conditions" className="hover:underline me-4 md:me-6">
//                   Terms & Conditions
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/cancellation-policy" className="hover:underline me-4 md:me-6">
//                   Cancellation Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link to='/login' className="hover:underline">
//                   Login
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 -mb-5 font-bold">
//             For More Information Contact Us :- 9674387425
//           </span>
//           <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
//           <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
//             © 2026 Primenova Consulting. All Rights Reserved.
//           </span>
//         </div>
//       </footer>
//     </React.Fragment>
//   );
// };

// export default Footer;
import React from "react";
import logo from "../assets/sec-logo-2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg-gradient-to-r from-cyan-500 via-sky-700 to-blue-950 text-white m-0">
        
        <div className="w-full max-w-screen-xl mx-auto px-6 py-10">
          
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                className="h-14 md:h-16 object-contain"
                alt="Primenova Logo"
              />

              <span className="text-xl md:text-2xl font-semibold tracking-wide">
                Primenova Consulting
              </span>
            </Link>

            {/* Links */}
            <ul className="flex flex-wrap gap-5 text-sm md:text-base font-light text-cyan-100">
              <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-white transition duration-300"
                >
                  Refund Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-conditions"
                  className="hover:text-white transition duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/cancellation-policy"
                  className="hover:text-white transition duration-300"
                >
                  Cancellation Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/manual-login"
                  className="hover:text-white transition duration-300"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-8 text-center">
            <p className="text-cyan-100 text-sm md:text-base font-medium">
              For More Information Contact Us :- 9674387425
            </p>
          </div>

          {/* Divider */}
          <hr className="my-6 border-cyan-300/30" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-cyan-100">
              © 2026 Primenova Consulting. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;