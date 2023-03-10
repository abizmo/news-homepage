interface NewsListProps {
  title: string;
  news: News[];
}

const NewsList: React.FC<NewsListProps> = ({ title, news }) => (
  <div className="bg-very-dark-blue px-5 py-6 lg:px-6 lg:py-8">
    <h2 className="mb-2 text-3xl font-bold text-soft-orange lg:text-4xl">
      {title}
    </h2>
    <ul>
      {news.map(({ id, url, title, description }) => (
        <li
          key={id}
          className="border-dark-grayish-blue py-7 last:pb-0 [&:not(:last-child)]:border-b"
        >
          <h3 className="mb-2 text-2xl font-bold text-off-white hover:text-soft-orange lg:mb-3">
            <a href={url}>{title}</a>
          </h3>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default NewsList;
