import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const projects = [
  {
    img: "/assets/portfolio/p-12.png",
    title: "Finba",
    roles: ["system design", "tech", "dev full statack"],
    tech: [
      "html/css",
      "react",
      "API",
      "chrome extension",
      "nodejs",
      "mysql",
      "reatime",
      "socket",
      "WordPress",
      "mongodb",
      "nodejs",
    ],
    desc: "Stock realtime data and report,...",
  },
  {
    img: "/assets/portfolio/p-11.png",
    title: "LoginBridges",
    roles: ["system design", "techlead", "dev"],
    tech: [
      "html/css",
      "react",
      "API",
      "chrome extension",
      "chromium",
      "Antidetect",
      "nodejs",
      "mysql",
      "WordPress",
      "E-commerce",
      "docker",
      "nodejs",
    ],
    desc: "Antidetect browser protect your Facebook, TikTok, Amazon, and all other platforms to stop account banning",
  },
  {
    img: "/assets/portfolio/p-10.png",
    title: "Pinterest helper",
    roles: ["dev"],
    tech: ["html/css", "react", "API", "chrome extension"],
    desc: "Get data from  Pinterest and send to server.",
  },
  {
    img: "/assets/portfolio/p-7.png",
    title: "PressMaximum & Products",
    roles: ["system design", "techlead", "dev"],
    tech: ["JS", "php/mysql", "html/css", "react", "WordPress"],
    desc: "Develop WordPress themes and plugins, tools as Core Developer cum project leader with multi-user projects.",
  },
  {
    img: "/assets/portfolio/p-3.png",
    title: "FameThemes & Products",
    roles: ["system design", "techlead", "dev"],
    tech: ["JS", "php/mysql", "html/css", "react", "WordPress"],
    desc: "Develop WordPress themes and plugins, tools as Core Developer cum project leader with multi-user projects.",
  },
  {
    img: "/assets/portfolio/p-1.png",
    title: "Crawler System",
    roles: ["system design", "techlead", "dev"],
    tech: ["JS", "mongodb", "html/css", "react", "nodejs"],
    desc: "Crawer products from amazon, etsy",
    images: ["/assets/portfolio/p-2.png"],
  },

  {
    img: "/assets/portfolio/p-4.png",
    title: "Listing Directory",
    roles: ["system design", "techlead", "dev"],
    tech: ["JS", "php/mysql", "html/css", "jquery", "WordPress"],
    images: ["/assets/portfolio/p-6.png"],
    desc: "Listing Directory plugin for WordPress",
  },

  {
    img: "/assets/portfolio/p-8.png",
    title: "POD Fulfillment System",
    roles: ["system design", "techlead", "dev"],
    tech: [
      "JS",
      "php/mysql",
      "html/css",
      "node",
      "WooCommerce",
      "WordPress",
      "Fulfillment",
    ],
    images: ["/assets/portfolio/p-6.png"],
    desc: "Fulfillment System for E-commerce system",
  },
];

const Portfolio = () => {
  return (
    <section className="flex flex-row gap-4">
      <div className="w-4/12">
        <h2 className="text-2xl font-bold font-mono">Portfolio</h2>
        <div className="text-sm">Some projects you may like.</div>
      </div>

      <div className="w-8/12 grid grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <div className="flex flex-col gap-1" key={i}>
            <img
              src={p.img}
              alt=""
              className="aspect-16/9 object-cover border-1 border-gray-300 rounded-md"
            />
            <div>{p.title}</div>
            <div className="text-sm text-blue-500">{p.roles.join(", ")}</div>
            <div className="text-sm text-gray-600 italic">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
