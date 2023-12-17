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
    <div className="w-1/2  rounded-lg m-4 p-4 bg-white ">
      <div>
        <h1 className="text-xl font-bold pb-2">{title}</h1>
        <img className="pb-2" src={imageurl} alt={title} />
        <span className="pb-2">{description}</span>
      </div>
    </div>
  );
};

export default Newsitem;
