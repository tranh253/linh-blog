import Head from "next/head";

const post = [
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
          {post.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8"></div>
        </div>
      </div>
    </main>
  );
}
