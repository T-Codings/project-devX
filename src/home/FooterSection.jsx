import React from "react";
import { Link } from "react-router-dom";
import footerTwitter from "../assets/white_bird-removebg-preview.png";
import footerLinkedin from "../assets/LINKED IN 2.png";
import footerFacebook from "../assets/image 3.jpg";
import footerGithub from "../assets/gthub_2-removebg-preview.png";

export default function FooterSection() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-4">DEVX</h1>
          <p className="text-sm">
            Top Learning experiences that create more talent in the world
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/programs" className="hover:text-gray-800">Our Programs</Link></li>
              <li><Link to="/why-tpu" className="hover:text-gray-800">Why TPU</Link></li>
              <li><Link to="/community" className="hover:text-gray-800">Community</Link></li>
              <li><Link to="contact" className="hover:text-gray-800">Contact Us</Link> </li>
              <li><Link to="/faqs" className="hover:text-gray-800">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-400">LinkedIn</a></li>
              <li><a href="#" className="hover:text-purple-400">Facebook</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Terms</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400">Terms</a></li>
              <li><a href="#" className="hover:text-purple-400">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 flex justify-between items-center">
        <p className="text-sm">2023 DevX. All Rights Reserved</p>

        <div className="flex space-x-4">
          <img className="w-6 h-6" src={footerTwitter} alt="Twitter logo" />
          <img className="w-6 h-6" src={footerLinkedin} alt="LinkedIn logo" />
          <img className="w-6 h-6 rounded" src={footerFacebook} alt="Facebook logo" />
          <img className="w-6 h-6 rounded" src={footerGithub} alt="GitHub logo" />
        </div>
      </div>
    </footer>
  );
}
