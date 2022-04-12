import { getAllPosts } from "../../scripts/blog/getAllPosts";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { PropsPost } from "../../@types";
import {PostComponent} from "./styles";
import Link from "next/link";

export default function Post({ post }: PropsPost) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <h1>Loading...</h1>;
  }
  if(!post){
    return <h1>Loading...</h1>
  }
  const handleClick = (e)=>{
    if(e.target.getAttribute("href")){
      e.target.setAttribute("target", "_blank")
      
    }
  }
  return (
    <PostComponent>
      <h1>{post.metadata.title}</h1>
      <div className="content-article" onClick={()=>handleClick(event)} dangerouslySetInnerHTML={{ __html: `${post.content}` }} />
      <footer>
        <h4>&copy; Feito por | Ezequais Santos</h4>
        <span>Desenvolvedor front-end React.js / Next.js</span>
      </footer>
    </PostComponent>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => {
    return { params: { slug: post.metadata.slug } };
  });
  return {
    paths,
    fallback: false
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