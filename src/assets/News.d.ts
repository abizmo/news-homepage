interface News {
  id: string;
  url: string;
  title: string;
  description: string;
}

interface NewsWithImage extends News {
  image: {
    src: string;
    alt: string;
  };
}
