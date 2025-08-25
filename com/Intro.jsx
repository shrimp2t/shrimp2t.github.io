import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  IconCake,
  IconBrandFacebook,
  IconBrandGithub,
  IconWorldWww,
  IconMapPin,
  IconDeviceMobile,
  IconMail,
} from "@tabler/icons-react";

import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <section className=" flex flex-col items-center justify-center w-full gap-2">
      <Avatar className="size-[190px]">
        <AvatarImage src="/assets/avatar.jpeg" alt="Trường Sa" />
      </Avatar>
      <h1 className="text-5xl font-bold">Trường Sa</h1>
      <h2 className="sub text-3xl italic text-gray-600">
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            "Hello, so good to see you!",
            3000,
            "I'm a Web Developer",
            3000,
            "I'm a Front-end Developer",
            3000,
            "I'm a Back-end Developer",
            3000,
            "I'm a Full Stack Developer",
            3000,
            "I'm a UI/UX Designer",
            3000,
            "I'm a Freelancer",
          ]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
      </h2>
      <a
        className="inline-flex items-center gap-1"
        href="https://shrimp2t.github.io/"
      >
        <IconWorldWww stroke={1.5} size={18} />
        shrimp2t.github.io
      </a>

      <div className="flex gap-6 my-5">
        <div className="flex flex-row items-center gap-1">
          <IconCake />
          <span>1989</span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <IconBrandFacebook />
          <a href="https://www.facebook.com/shrimp2t">/shrimp2t</a>
        </div>
        <div className="flex flex-row items-center gap-1">
          <IconBrandGithub />
          <a href="https://github.com/shrimp2t">/shrimp2t</a>
        </div>
      </div>

      <div className="meta flex flex-col md:flex-row justify-center gap-3 leading-0 text-gray-600">
        <div className="flex flex-row items-center gap-1">
          <div className="text-gray-600 ">
            <IconMapPin />
          </div>
          <div className="font-bold leading-0">Hà Nội</div>
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="text-gray-600 ">
            <IconDeviceMobile />
          </div>
          <div className="font-bold leading-0">0396-807-129</div>
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="text-gray-600">
            <IconMail />
          </div>
          <div className="font-bold leading-0">sainwpcode@gmail.com</div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
