import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="">
            <img src={footerLogo} alt="footer-logo" width={150} height={46} />
          </a>
          <p className="mt-6 tex-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get your shoes ready for the new term at your nearest Nike store.
            Find Your Perfect Size In Store. get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={item.src} alt={item.alt} width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((item) => (
            <div key={item}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {item.title}
              </h4>
              <ul>
                {item.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-2 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center font-montserrat gap-2 cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights resereved </p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
