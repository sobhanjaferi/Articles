import Container from "@/components/container";
import { TData } from "../page";

interface Tprops {
  params: Promise<{ id: number }>;
  searchParams: Promise<{}>;
}

async function ReadArticle(props: Tprops) {
  const { id } = await props.params;

  const result = await fetch(`http://localhost:8000/Articles/${id}`);
  const data = (await result.json()) as TData;

  return (
    <Container>
      <div className="h-full my-10 rounded-2xl p-10 bg-gray-900 flex flex-col items-center">
        <img
          src={data.imgUrl}
          alt="img"
          className="max-w-200 min-w-100 mb-10 rounded-2xl h-150 bg-amber-300"
        />

        <div className="w-full flex justify-around items-center mb-10">
          <span>{data.title}</span>
          <span>{data.readingTime}</span>
        </div>

        <div className="flex justify-center items-center">
          <p>{data.content}</p>
        </div>
      </div>
    </Container>
  );
}

export default ReadArticle;
