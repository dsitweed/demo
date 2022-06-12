import React from "react";
import LOGO from "../resources/images/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-800 z-40">
      <div className="container px-3 py-2 mx-auto md:px-0 lg:px-8">
        <div className="w-full flex flex-col md:flex-row py-4">
          <div className="flex-1 text-center py-5">
            <Link to="/">
              <img
                src={LOGO}
                className="h-16 fill-current inline"
                alt="civizen logo"
              />
            </Link>
          </div>
        </div>
        <div className="text-center">
          <span className="text-gray-500">
            Copyright © Civizen {new Date().getFullYear()}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
