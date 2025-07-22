import { getAllPosts } from "@/sanity/lib/fetch/getAllPosts";

import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default async function HomePage() {
  const data = await getAllPosts();
  // console.log("pato");
  if (!data) {
    return notFound();
  }
  return (
    <main className="container mx-auto px-4 py-8">
      {data.map((r) => (
        <div key={r._id}>
          <p>{r.title?.[0]?.value}</p>
          <div className="prose lg:prose-xl text-black marker:text-black">
            <ReactMarkdown>{r.body?.[0]?.value}</ReactMarkdown>
          </div>
        </div>
      ))}
    </main>
  );
}
