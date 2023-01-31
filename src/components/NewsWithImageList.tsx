import Image from "next/image";

interface NewsWithImageListProps {
  news: NewsWithImage[];
}

const NewsWithImageList: React.FC<NewsWithImageListProps> = ({ news }) => (
  <ul className="grid gap-8 lg:grid-cols-3 lg:gap-7">
    {news.map(({ image, url, id, title, description }) => (
      <li key={title} className="flex gap-6">
        <Image src={image.src} alt={image.alt} width={100} height={128} />
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
