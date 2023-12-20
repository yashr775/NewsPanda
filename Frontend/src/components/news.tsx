import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Newsitem from "./newsitem";
import { useRecoilValue } from "recoil";
import { newsCategory } from "../atoms";
import InfiniteScroll from "react-infinite-scroll-component";

interface Source {
  id: string | null;
  name: string;
}

interface Article {
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  author: string | null;
  publishedAt: string;
  source: Source;
}

const News = () => {
  const hiddenkey = import.meta.env.VITE_API_KEY;
  const [articles, setArticles] = useState<Article[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const category = useRecoilValue(newsCategory);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apikey=${hiddenkey}&pagesize=8&page=${page}`;
    const data = await fetch(url);
    const parsedData = await data.json();

    const tempArticles = parsedData.articles;

    if (tempArticles.length === 0) {
      setHasMore(false);
    } else {
      setArticles((prevArticles) => [...prevArticles, ...tempArticles]);
      setPage((prevPage) => prevPage + 1);
    }

    console.log(parsedData.totalResults);
    setArticles(tempArticles);
  };

  useEffect(() => {
    updateNews();
  }, [category]);

  useEffect(() => {
    console.log(articles);
    console.log(category);
  }, [articles]);

  return (
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
      <InfiniteScroll
        dataLength={articles.length}
        next={updateNews}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        children={undefined}
      ></InfiniteScroll>
      <div className="mt-10 flex flex-wrap">
        {articles.map((article) => {
          return (
            <div className="w-1/4 p-2 h-auto">
              <Newsitem
                key={article.url}
                newsurl={article.url}
                title={article.title.slice(0, 45)}
                imageurl={
                  article.urlToImage ? article.urlToImage : "No image available"
                }
                source={article.source.name}
                description={
                  article.description
                    ? article.description.slice(0, 88)
                    : "No description available"
                }
                date={article.publishedAt}
                author={article.author ? article.author : "Anonymous"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default News;
