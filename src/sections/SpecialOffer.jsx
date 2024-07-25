import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center gap-10 max-container justify-wrap max-xl:flex-col-reverse">
      <div className=" flex-1 ">
        <img src={offer} alt="" width={773} height={687} className=" w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className=" text-coral-red"> Special </span>
          <span className=" text-coral-red"></span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className=" info-text mt-4 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className=" flex justify-start gap-3 mt-11">
          <Button label="View details" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
