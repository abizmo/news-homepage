import Image from "next/image";

interface NewsWithImageListProps {
  news: NewsWithImage[];
}

const IMAGE_HEIGHT = 128;
const IMAGE_WIDTH = 100;

const NewsWithImageList: React.FC<NewsWithImageListProps> = ({ news }) => (
  <ul className="grid gap-8 lg:grid-cols-3 lg:gap-7">
    {news.map(({ image, url, id, title, description }) => (
      <li key={title} className="flex gap-6">
        <Image
          src={image.src}
          alt={image.alt}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
        />
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
