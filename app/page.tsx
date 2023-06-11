import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";

const posts = [
  { title: "Testing 1", excerpt: "Testing for the post" },
  { title: "Testing 2", excerpt: "Testing for the post 2" },
];

export default function Home() {
  return (
    <main className="container mx-auto px-10 mb-8">
      <Head>
        <title>Linh Blog</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}
