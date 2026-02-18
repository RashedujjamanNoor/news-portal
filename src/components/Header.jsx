import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-12 gap-2">
      <img src={logo} alt="website-logo" className="w-80 md:w-80 lg:w-117" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-accent">
        {format(new Date(), "EEEE, MMMM, dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
