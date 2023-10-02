import CustomButton from "../Customs/Button";
import { arrowRight } from "../assets/icons";

import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 w-full max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold">
          <span className="text-coral-red inline-block mt-3"> Special</span>{" "}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your Experience with
          unbeatable discounts and offers. From the latest trends to everyday
          essentials, we have everything you need to look your best.
        </p>
        <p className="mt-2 lg:max-w-lg info-text">
          Navigate through our wide range of products and get the best deals on
          your favorite brands. Your one-stop shop for all your fashion needs.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <CustomButton label="Shop Now" iconUrl={arrowRight} />
          <CustomButton
            label="Learn More"
            backGroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
