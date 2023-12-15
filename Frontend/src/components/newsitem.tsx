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
  return <div>{props.title}</div>;
};

export default Newsitem;
