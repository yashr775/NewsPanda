import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Newsitem from "./newsitem";

interface Article {
  title: string;
  description: string | null;
  newsurl: string;
  imageurl: string | null;
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
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
      {articles.map((article) => {
        return (
          <div className="mt-10 grid grid-cols-4 gap-4 h-1/4 flex-content-0 ">
            <p className="z-10">{article.imageurl}</p>
            <Newsitem
              key={article.newsurl}
              newsurl={article.newsurl}
              title={article.title.slice(0, 45)}
              imageurl={
                article.imageurl ? article.imageurl : "No image available"
              }
              source={article.source}
              description={
                article.description
                  ? article.description.slice(0, 88)
                  : "No description available"
              }
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
