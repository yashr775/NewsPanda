type Props = {
  title: string;
  description: string;
  newsurl: string;
  imageurl: string;
  author: string | null;
  date: string;
  source: string;
};

const Newsitem = (props: Props) => {
  const { title, description, newsurl, imageurl, author, date, source } = props;

  return (
    <div className=" relative w-full max-w-lg rounded-lg m-4 p-4 bg-white ">
      <div className="absolute top-0 right-0">
        <div className="bg-red-600 rounded-lg text-white px-2 mb-2 h-6 p-auto">
          {source}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold pb-2">{title}</h1>
        <img className="pb-2" src={imageurl} alt={title} />
        <span className="pb-2 font-medium">{description}</span>
        <br />
        <p className="m-2">
          by {author} on {new Date(date).toUTCString()}
        </p>
        <br />
        <a
          className="inline-block bg-blue-500 text-white px-2 py-2 my-2 rounded-md hover:bg-blue-700"
          href={newsurl}
          target="_blank"
          rel="noopener noreferrer"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
