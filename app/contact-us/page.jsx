import React from "react";
import Link from "next/link";
import Image from "next/image";

import Phone from "@/public/assets/images/contact/phone.svg";
import Email from "@/public/assets/images/contact/email.svg";
import Map from "@/public/assets/images/contact/map.svg";

const Contact = () => {
  return (
    <>
      <div className="bg-primaryDark w-full h-[250px]">
        <div className="pt-[150px] px-[2rem]">
          <h2
            className="heading-secondary text-center"
            style={{ color: "white" }}
          >
            Nearby Mental Health centres and N.G.O's
          </h2>
        </div>
      </div>

      <section class="py-[6rem]">
        <div class="max-w-[120rem] py-[3rem] mx-auto flex flex-col gap-30 px-[2rem] md:flex-row xl:px-0 lg:gap-20">
          <div class="text-center md:text-left md:w-full">
          <Image 
              src="/assets/images/contact/Untitled.png"
              width={850}
              height={650}
              className="object-contain w-full "
            />
          </div>

          <div class="text-center self-center md:w-full">
            <Image 
              src="/assets/images/contact/a.jpg"
              width={850}
              height={650}
              className="object-contain w-full "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;