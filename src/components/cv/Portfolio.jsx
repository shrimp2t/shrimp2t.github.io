import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  Divider,
  Button,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { Grid, GridItem } from "@chakra-ui/react";

import p1 from "../../assets/portfolio/p-1.png";
import p2 from "../../assets/portfolio/p-2.png";
import p3 from "../../assets/portfolio/p-3.png";
import p4 from "../../assets/portfolio/p-4.png";
import p5 from "../../assets/portfolio/p-5.png";
import p6 from "../../assets/portfolio/p-6.png";
import p7 from "../../assets/portfolio/p-7.png";
import p8 from "../../assets/portfolio/p-8.png";
import p10 from "../../assets/portfolio/p-10.png";
import p11 from "../../assets/portfolio/p-11.png";

const projects = [
  {
    img: p11,
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
    img: p10,
    title: "Pinterest helper",
    roles: ["dev"],
    tech: ["html/css", "react", "API", "chrome extension"],
    desc: "Get data from  Pinterest and send to server.",
  },
  {
    img: p7,
    title: "PressMaximum & Products",
    roles: ["system design", "techlead", "dev"],
    tech: ["JS", "php/mysql", "html/css", "react", "WordPress"],
    desc: "Develop WordPress themes and plugins, tools as Core Developer cum project leader with multi-user projects.",
  },
  {
    img: p3,
    title: "FameThemes & Products",
    roles: ["system design", "techlead", "dev"],
    tech: ["JS", "php/mysql", "html/css", "react", "WordPress"],
    desc: "Develop WordPress themes and plugins, tools as Core Developer cum project leader with multi-user projects.",
  },
  {
    img: p1,
    title: "Crawler System",
    roles: ["system design", "techlead", "dev"],
    tech: ["JS", "mongodb", "html/css", "react", "nodejs"],
    desc: "Crawer products from amazon, etsy",
    images: [p2],
  },

  {
    img: p4,
    title: "Listing Directory",
    roles: ["system design", "techlead", "dev"],
    tech: ["JS", "php/mysql", "html/css", "jquery", "WordPress"],
    images: [p6],
    desc: "Listing Directory plugin for WordPress",
  },

  {
    img: p8,
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
    images: [p6],
    desc: "Fulfillment System for E-commerce system",
  },
];

const Project = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card onClick={onOpen} variant="outline">
        <CardBody>
          <Image src={project.img} alt="" borderRadius="lg" />
        </CardBody>
        <CardFooter>
          <Heading size="sm">{project.title}</Heading>
        </CardFooter>
      </Card>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{project.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="3" fontWeight={"bold"}>
              Roles: {project?.roles?.join?.(", ")}
            </Text>
            <Text mb="3" fontWeight={"bold"}>
              Teach: {project?.tech?.join?.(", ")}
            </Text>
            <Text mb="3">{project?.desc}</Text>
            <Divider h={30} />
            <VStack spacing={4}>
              <Image src={project.img} alt="" borderRadius="lg" />

              {project?.images?.length &&
                project?.images.map((el) => (
                  <Image src={el} alt="" borderRadius="lg" />
                ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const Portfolio = () => {
  return (
    <section class="s-portfolio o-section  t-section  ">
      <div class="o-section__header-bg  t-section__header"></div>
      <div class="o-section__content-bg  t-section__content"></div>

      <div class="o-container">
        <div class="o-section__container">
          <header class="o-section__header  t-section__header">
            <div class="o-content">
              <h2 class="o-section__heading">Portfolio</h2>
              <div class="o-content__body  o-section__description">
                Some projects you may like.
              </div>
            </div>
          </header>

          <div class="o-section__content  t-section__content  o-section__full-bottom-space">
            <div class="o-grid  o-grid--gallery">
              <Grid templateColumns="repeat(2, 1fr)" gap={15}>
                {projects.map((p) => (
                  <Project project={p} />
                ))}
              </Grid>

              {/* <div class="o-grid__col-sm-6">
                <a
                  class="c-image-overlay  t-image-overlay "
                  href="https://www.youtube.com/watch?v=xUs_3FNpYso&feature=emb_logo"
                >
                  <div class="imgw">
                    <iframe
                      src="https://www.youtube.com/embed/xUs_3FNpYso"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div class="c-image-overlay__content">
                    <h3>Customify WP theme (video)</h3>
                  </div>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
