import { TData } from "@/app/article/page";

function Article({ title, content, imgUrl, readingTime }: TData) {
  return (
    <div className="h-100 rounded shadow-md shadow-gray-700 flex flex-col p-7">
      <img src={imgUrl} alt="img" className="h-50 rounded " />

      <div className="h-50 flex flex-col">
        <div className="flex justify-around items-center h-15 p-5">
          <span className="p-1 rounded-lg border-b-1">{title}</span>
          <span className="p-1 rounded-lg border-b-1">{readingTime}</span>
        </div>
        <p className="mb-10 overflow-auto">{content}</p>
      </div>
    </div>
  );
}

export default Article;
