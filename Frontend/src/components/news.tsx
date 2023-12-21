import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Newsitem from "./newsitem";
import { useRecoilValue } from "recoil";
import { newsCategory } from "../atoms";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

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
  const [progress, setProgress] = useState(100);

  const updateNews = async () => {
    setProgress(30);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apikey=${hiddenkey}&pagesize=8&page=${page}`;
    setProgress(60);
    try {
      const data = await fetch(url);
      const parsedData = await data.json();

      const tempArticles = await parsedData.articles;

      if (tempArticles.length > 0) {
        setArticles((prevArticles) => [...prevArticles, ...tempArticles]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
        console.log("No more articles.");
      }
      setProgress(100);
      console.log(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    setPage(1);
    setArticles([]);
    updateNews();
  }, [category]);

  useEffect(() => {
    console.log(category);
  }, [articles]);

  return (
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <InfiniteScroll
        dataLength={articles.length}
        next={updateNews}
        hasMore={hasMore}
        children={undefined}
        loader={
          progress != 100 ? (
            <p className="flex justify-center items-center text-2xl">
              Loading...
            </p>
          ) : (
            ""
          )
        }
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
