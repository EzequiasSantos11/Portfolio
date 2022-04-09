import { getAllPosts } from "../../scripts/blog/getAllPosts";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { PropsPost } from "../../@types";

export default function Post({ post }: PropsPost) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <article>
      <h1>{post.metadata.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: `${post.content}` }} />
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => {
    return { params: { slug: post.metadata.slug } };
  });
  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const posts = getAllPosts();
  const post = posts.find((post) => post.metadata.slug === slug);

  return {
    props: {
      post: post
    },
    revalidate: 10
  };
};
