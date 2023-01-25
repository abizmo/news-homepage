import type { NextComponentType } from "next";

const news = [
  {
    url: "#",
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    url: "#",
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    url: "#",
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const NewsList: NextComponentType = () => (
  <ul>
    {news.map(({ url, title, description }) => (
      <li
        key={title}
        className="border-dark-grayish-blue py-7 last:pb-0 [&:not(:last-child)]:border-b"
      >
        <h3 className="mb-2 text-2xl font-bold text-off-white hover:text-soft-orange lg:mb-3">
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </li>
    ))}
  </ul>
);

export default NewsList;
