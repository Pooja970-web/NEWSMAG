import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in,us,gb&category=${category}&language=en`;
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.results || []);
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container my-4 d-flex flex-wrap gap-4 justify-content-center">
      {articles.map((news) => (
        <NewsItem
          key={news.link}
          title={news.title}
          description={news.description}
          image={news.image_url}
          url={news.link}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
