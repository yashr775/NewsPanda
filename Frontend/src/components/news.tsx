import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Newsitem from "./newsitem";

interface Article {
  title: string;
  description: string;
  newsurl: string;
  imageurl: string;
  author: string | null;
  date: string;
  source: string;
}

const News = () => {
  const hiddenkey = import.meta.env.VITE_API_KEY;
  const [articles, setArticles] = useState<Article[]>([]);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apikey=${hiddenkey}`;
    const data = await fetch(url);
    const parsedData = await data.json();

    const tempArticles = parsedData.articles;
    setArticles(tempArticles);
  };

  useEffect(() => {
    updateNews();
  }, []);

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  return (
    <div>
      <Navbar />
      {articles.map((article) => {
        return (
          <div>
            <Newsitem
              key={article.newsurl}
              newsurl={article.newsurl}
              title={article.title}
              imageurl={article.imageurl}
              source={article.source}
              description={article.description}
              date={article.date}
              author={article.author}
            />
          </div>
        );
      })}
    </div>
  );
};
export default News;
