import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className=" w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10 xl:padding-l"
    >
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red ">
          Our Summer Collection
        </p>
        <h1 className=" max-sm:mt-4 mt-10 font-palanquin max-sm:text-4xl text-8xl max-sm:text-[72px] max-sm:leading-[-82px] font-bold ">
          <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 max-sm:mt-3">
            The New Arrival
          </span>
          <br />
          <span className=" text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p className=" font-montserrat text-lg mt-6 mb-14 sm:max-w-sm text-slate-gray leading-8">
          Discover Stylish Nike arrivals, quality comfort, and innovation fro
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className=" flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className=" text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className=" leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative justify-center items-center flex xl:min-h-screen flex-1 max-xl:py-40 bg-primary bg-cover bg-center bg-hero">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className=" object-contain relative z-10"
        />

        <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;