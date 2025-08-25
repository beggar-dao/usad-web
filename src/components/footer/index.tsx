import { FaDiscord, FaGithub, FaTelegram, FaTwitter } from 'react-icons/fa';

import logo from '@/assets/images/logo.png';
import { history } from '@umijs/max';
export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-8 md:pt-16 pb-8">
      <div className="px-4 md:max-w-[1440px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-6">
              <img src={logo} className="h-[28px] md:h-[40px]" alt="" />
            </div>
            <p className="text-white/70 mb-6">
              The next generation of decentralized, asset-backed stablecoins.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#DAC89F] transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#DAC89F] transition-colors"
              >
                <FaTelegram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#DAC89F] transition-colors"
              >
                <FaDiscord className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#DAC89F] transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li
                onClick={() => {
                  history.push('/');
                }}
                className="cursor-pointer"
              >
                <a className="text-white/70 hover:text-[#DAC89F] transition-colors">
                  Home
                </a>
              </li>

              <li
                onClick={() => {
                  history.push('/');
                  setTimeout(() => {
                    let faq = document.getElementById('features');
                    if (faq) {
                      faq.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 500);
                }}
                className="cursor-pointer"
              >
                <a
                  href="#features"
                  className="text-white/70 hover:text-[#DAC89F] transition-colors"
                >
                  Features
                </a>
              </li>
              <li
                onClick={() => {
                  history.push('/');
                  setTimeout(() => {
                    let faq = document.getElementById('technology');
                    if (faq) {
                      faq.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 500);
                }}
                className="cursor-pointer"
              >
                <a
                  href="#tech"
                  className="text-white/70 hover:text-[#DAC89F] transition-colors"
                >
                  Technology
                </a>
              </li>
              <li
                onClick={() => {
                  history.push('/');
                  setTimeout(() => {
                    let faq = document.getElementById('faq');
                    if (faq) {
                      faq.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 500);
                }}
                className="cursor-pointer"
              >
                <a className="text-white/70 hover:text-[#DAC89F] transition-colors">
                  FAQ
                </a>
              </li>
              <li
                onClick={() => {
                  history.push('/');
                  setTimeout(() => {
                    let faq = document.getElementById('news');
                    if (faq) {
                      faq.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 500);
                }}
                className="cursor-pointer"
              >
                <a className="text-white/70 hover:text-[#DAC89F] transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#DAC89F] transition-colors"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#DAC89F] transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#DAC89F] transition-colors"
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#DAC89F] transition-colors"
                >
                  Audits
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#DAC89F] transition-colors"
                >
                  Reserve Reports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#DAC89F] transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa fa-envelope text-[#DAC89F] mt-1 mr-3"></i>
                <span className="text-white/70">info@usad.com</span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-map-marker text-[#DAC89F] mt-1 mr-3"></i>
                <span className="text-white/70">
                  123 Blockchain Avenue, Crypto City
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © 2025 USAD. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white/50 hover:text-[#DAC89F] text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-[#DAC89F] text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-[#DAC89F] text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
