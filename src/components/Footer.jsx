import { Instagram } from "lucide-react";
import {
  FaFacebookSquare,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaPinterestSquare,
} from "react-icons/fa";

const visionDirectInfo = [
  "Why choose Vision Direct?",
  "Contact Us",
  "Delivery Information",
  "Returns & refunds policy",
  "Vision Direct coupon code",
  "Recycle your contact lenses",
  "Help and news",
  "Vision Direct Reviews",
  "Buyer's Guides",
  "Frequently Asked Questions",
  "Learn about your blinking pattern",
];

const contactLensInfo = [
  "Contact lenses student discount",
  "Cheap contact lenses",
  "Free contact lens trial",
  "Free eye test",
  "How to order contact lenses online",
  "Understanding your prescription",
  "Contact lens base curve & diameter",
  "How to put in contact lenses",
  "How to take out contact lenses",
  "opticians own brand contact lenses",
];

const top10Sellers = [
  "1 Day Acuvue Moist",
  "Biofinity",
  "Dailies AquaComfort Plus",
  "Acuvue Oasys",
  "1 Day Acuvue Moist for Astigmatism",
  "Dailies Total 1",
  "Acuvue Oasys 1 Day with HydraLuxe",
  "1 Day Acuvue Trueye",
  "Acuvue Oasys for Astigmatism",
  "Focus Dailies All Day Comfort",
];

const links = [
  "About us",
  "Blog",
  "Terms & Conditions",
  "Privacy Policy",
  "Cookie Policy",
  "Affiliates",
];

const countries = [
  "Belgium",
  "France",
  "Ireland",
  "Italy",
  "Netherlands",
  "Spain",
];

const socials = [
  { icon: FaFacebookSquare, name: "Facebook" },
  { icon: Instagram, name: "Instagram" },
  { icon: FaTiktok, name: "Tiktok" },
  { icon: FaTwitter, name: "Twitter" },
  { icon: FaYoutube, name: "Youtube" },
  { icon: FaLinkedin, name: "Linkedin" },
  { icon: FaPinterestSquare, name: "Pinterest" },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-[#f7f7f9] hidden lg:block xl:px-0 px-8">
        <div className="max-container py-12">
          <div className="grid md:grid-cols-4 grid-cols-1 ">
            <img src="vision-direct-logo.png" className="h-14" />
            <div>
              <p className=" uppercase font-semibold text-base mb-5">
                VISION DIRECT INFO
              </p>
              <ul className="flex flex-col gap-1">
                {visionDirectInfo.map((info) => (
                  <li key={info}>
                    <a className="text-sm">{info}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className=" uppercase font-semibold text-base mb-5">
                CONTACT LENS INFO
              </p>
              <ul className="flex flex-col gap-1">
                {contactLensInfo.map((info) => (
                  <li key={info}>
                    <a className="text-sm">{info}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className=" uppercase font-semibold text-base mb-5">
                TOP 10 SELLERS
              </p>
              <ul className="flex flex-col gap-1">
                {top10Sellers.map((info) => (
                  <li key={info}>
                    <a className="text-sm">{info}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full border mt-14 mb-4" />
          <div className="grid md:grid-cols-4 grid-cols-1">
            <div>
              <p className=" uppercase font-semibold text-base mb-5">
                WE ACCEPT
              </p>
              <img src="cards.png" className="h-14" />
            </div>
            <div>
              <p className=" uppercase font-semibold text-base mb-5">
                PHONE SUPPORT
              </p>
              <ul className="text-sm text-black/40">
                <li className="text-black">UK - 020 7768 5000</li>
                <li>Mon - Fri: 08:00 to 21:00</li>
                <li>Sat - Sun: 08:00 - 18:00</li>
              </ul>
            </div>
            <div>
              <p className=" uppercase font-semibold text-base mb-5">
                OUR POSTAL ADDRESS
              </p>
              <ul className="text-sm mb-2">
                <li>Vision Direct</li>
                <li>Unit 2 Hudson Court</li>
                <li>Great North Way, York Business Park</li>
                <li>Nether Poppleton, YORK, YO26 6RB</li>
              </ul>
              <a className="text-blue-700 text-sm">Returns & Refunds Policy</a>
            </div>
            <div>
              <p className=" uppercase font-semibold text-base mb-5">
                EMAIL SUPPORT
              </p>
              <ul className="text-sm">
                <li>Reach out via email on</li>
                <li>
                  <a className="text-blue-700">help@visiondirect.co.uk</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#e9e9ef]">
        <div className="max-container py-6 flex items-center justify-between xl:px-0 px-8">
          <div>
            <ul className="flex flex-col md:flex-row gap-4">
              {links.map((link) => (
                <li key={link}>
                  <a className="text-black/40 text-sm">{link}</a>
                </li>
              ))}
            </ul>
            <ul className="flex gap-4 flex-col md:flex-row">
              {countries.map((country) => (
                <li key={country}>
                  <a className="text-black/40 text-sm">{country}</a>
                </li>
              ))}
              <li>
                <a className="text-sm text-black/50 font-semibold">
                  United Kingdom
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:inline ">
            <ul className="flex gap-3 mb-1">
              {socials.map((social) => (
                <li key={social.name}>
                  <a>
                    <social.icon className="h-6 w-6 text-black/60" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-black/40 font-semibold">
              ©2024 Vision Direct. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
