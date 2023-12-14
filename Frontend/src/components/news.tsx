import { useEffect } from "react";
import Navbar from "./navbar";

const News = () => {
  const hiddenkey = import.meta.env.VITE_API_KEY;

  const updateNews = async () => {
    const url = `newsapi.org/v2/top-headlines?country=us&apikey=${hiddenkey}`;
    const data = await fetch(url);
    console.log(data);
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default News;
