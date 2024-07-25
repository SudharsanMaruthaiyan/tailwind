import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Booter = () => {
  return (
    <footer className=" max-container">
      <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className=" flex flex-col items-start">
          <a href="">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p className=" text-white mt-6 font-montserrat leading-7 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards.
          </p>
          <div className=" flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className=" flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex justify-between lg:gap-10 gap-20 flex-wrap flex-1">
          {footerLinks.map((section) => (
            <div key={section} className="">
              <h4 className=" text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className=" mt-3 text-white-400 font-montserrat leading-normal hover:text-slate-gray cursor-pointer"
                    key={link.name}
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex mt-24 max-sm:flex-col max-sm:items-center text-white-400 justify-between">
        <div className=" flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copy right sign" width={20} height={20} />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className=" font-montserrat cursor-pointer">Terms & Condition</p>
      </div>
    </footer>
  );
};

export default Booter;
