import Article from "@/components/article";
import Container from "@/components/container";
import Link from "next/link";

export interface TData {
  id?: string;
  title?: string;
  content?: string;
  imgUrl?: string;
  readingTime?: string;
}

async function ArticlePage() {
  const result = await fetch(`http://localhost:8000/Articles`);
  const data = (await result.json()) as TData[];

  return (
    <Container>
      <div className="grid grid-cols-4 gap-5 py-5">
        {data.map((article: TData) => (
          <Link href={`/article/${article.id}`} key={article.id}>
            <Article {...article}/>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default ArticlePage;
