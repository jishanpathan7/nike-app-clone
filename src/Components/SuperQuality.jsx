import CustomButton from "../Customs/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold">
          We Provide You <br />
          <span className="text-coral-red inline-block mt-3">
            {" "}
            Super Quality
          </span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring the quality of our products is a top priority for us. We use
          the best quality materials to make our shoes. We also have a quality
          control team that checks the quality of our products before they are
          shipped to our customers.
        </p>
        <p className="mt-2 lg:max-w-lg info-text">
          Our dedication to quality has made us one of the most trusted brands.
        </p>
        <div className="mt-11">
          <CustomButton label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          className="object-contain w-[500px] h-[500px]"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
