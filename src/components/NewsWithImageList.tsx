import type { NextComponentType } from "next";
import Image from "next/image";

const news = [
  {
    id: "01",
    imageSrc: "/images/image-retro-pcs.jpg",
    imageAlt: "small computer",
    url: "#",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    id: "02",
    imageSrc: "/images/image-top-laptops.jpg",
    imageAlt: "laptop keys",
    url: "#",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
  },
  {
    id: "03",
    imageSrc: "/images/image-gaming-growth.jpg",
    imageAlt: "dualshock",
    url: "#",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
  },
];

const NewsWithImageList: NextComponentType = () => (
  <ul className="grid gap-8 lg:grid-cols-3 lg:gap-7">
    {news.map(({ imageSrc, imageAlt, url, id, title, description }) => (
      <li key={title} className="flex gap-6">
        <Image src={imageSrc} alt={imageAlt} width={100} height={128} />
        <div className="grid gap-3">
          <h2 className="mb-1 text-3xl font-bold tracking-wide text-grayish-blue">
            {id}
          </h2>
          <h3 className="primary-link text-xl font-bold">
            <a href={url}>{title}</a>
          </h3>
          <p>{description}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default NewsWithImageList;
