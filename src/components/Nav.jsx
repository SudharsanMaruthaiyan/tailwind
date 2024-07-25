import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                className=" font-monts errat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
        <div className=" max-lg:hidden flex gap-3">
          <button className=" bg-blue-700 px-4 py-1 rounded text-white outline-none ring hover:ring-indigo-400 ">
            Login
          </button>
          <button className=" bg-blue-700 px-4 py-1 rounded text-white outline-none ring hover:ring-indigo-400">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
