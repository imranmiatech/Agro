import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.Hero} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            numquam nam vero expedita adipisci sapiente repudiandae eius ratione
            delectus consectetur minus earum voluptatum laborum aut velit
            molestiae, exercitationem nulla autem facere. Sunt aliquid aliquam
            ipsa dolore asperiores quidem dolores ad.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            numquam nam vero expedita adipisci sapiente repudiandae eius ratione
            delectus consectetur minus earum voluptatum laborum aut velit
            molestiae, exercitationem nulla autem facere. Sunt aliquid aliquam
            ipsa dolore asperiores quidem dolores ad.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iste
            est mollitia eos debitis porro, consectetur eveniet suscipit
            eligendi delectus, vitae dignissimos perferendis voluptatem eius cum
            quo dolore quaerat laborum.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              totam pariatur recusandae, ipsa sint voluptate quidem dignissimos
              blanditiis voluptates quod id quae quis hic fuga! Exercitationem
              repellat dolorum labore magnam!
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              totam pariatur recusandae, ipsa sint voluptate quidem dignissimos
              blanditiis voluptates quod id quae quis hic fuga! Exercitationem
              repellat dolorum labore magnam!
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              totam pariatur recusandae, ipsa sint voluptate quidem dignissimos
              blanditiis voluptates quod id quae quis hic fuga! Exercitationem
              repellat dolorum labore magnam!
            </p>
          </div>
        </div>

      </div>
      <NewsletterBox/>
    </>
  );
};

export default About;
