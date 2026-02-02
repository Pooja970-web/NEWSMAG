import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const query = category ? `india ${category}` : "india";  // ✅ FIX

    const url = `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${import.meta.env.VITE_API_KEY}`;
    
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
