import { ShoppingBag } from "lucide-react";
const links = ["Contact Lenses", "Eye Care", "Solutions", "Help & News"];

const Navbar = () => {
  return (
    <nav className="bg-[#013da7] xl:px-0 px-8">
      <div className=" max-container flex items-center justify-between">
        <div className="flex gap-10 h-9 items-center">
          {links.map((link) => (
            <a className="text-white font-light text-sm " key={link}>
              {link}
            </a>
          ))}
          <a className="text-black font-light bg-[#b1e1fe] px-3 h-full flex items-center text-sm">
            OFFERS
          </a>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-white">Darshit P.</p>
          <div className="flex items-center gap-2">
            <ShoppingBag className=" text-white h-4 w-4" />
            <p className="text-white">£0.00</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
