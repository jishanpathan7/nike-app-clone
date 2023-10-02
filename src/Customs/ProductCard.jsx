import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="object-contain w-[280px] h-[280px]"
      />
      <div className="mt-3 ml-4 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={18} height={18} />
        <p className="font-montserrat text-l leading-normal text-slate-gray">
          (4.6)
        </p>
      </div>
      <div className="mt-2 ml-4  flex flex-col justify-start gap-1">
        <h3 className="text-l leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="font-semibold font-montserrat text-coral-red text-l leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
