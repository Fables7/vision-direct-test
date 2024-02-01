import { Search, Phone } from "lucide-react";

const Header = () => {
  return (
    <div className="flex w-full justify-between items-center max-container py-4 xl:px-0 px-4">
      <img className="h-14" src="/vision-direct-logo.png" />
      <div className="flex gap-6">
        <div className=" items-center relative md:flex hidden">
          <input
            className="border h-8 px-3 text-xs rounded-none focus:outline-none pr-10 w-[250px]"
            placeholder="Search VisionDirect.co.uk"
          />
          <button className="h-8 w-8 bg-black flex items-center justify-center absolute right-0">
            <Search className=" text-white h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center">
          <Phone className=" fill-black h-3 w-3 mr-2" />
          <h3 className="text-xs">020 7768 5000</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
