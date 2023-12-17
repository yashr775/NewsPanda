import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Newsitem from "./newsitem";

interface Article {
  title: string;
  description: string | null;
  newsurl: string;
  urlToImage: string | null;
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
      <div className="mt-10 flex flex-wrap">
        {articles.map((article) => {
          return (
            <div className="w-1/4 p-2 h-auto">
              <Newsitem
                key={article.newsurl}
                newsurl={article.newsurl}
                title={article.title.slice(0, 45)}
                imageurl={
                  article.urlToImage ? article.urlToImage : "No image available"
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
    </div>
  );
};
export default News;
