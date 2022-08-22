import {ImagesGithub, ImagesInstagram, ImagesWhatsApp } from "../../Components/Images";
import { Container, Article, Wrapper, Main, Title, Anuncio } from "../../../Styles/BlogStyle";
import { getAllPosts } from "../../scripts/blog/getAllPosts";
import { PropsHome } from "../../@types";
import Link from "next/link";
import { Footer } from "../../Components/Footer";

export default function Blog({ posts, gitUser }: PropsHome) {

  const data = posts.sort((a,b)=>{
   const dateA = new Date(a.metadata.date)
   const dateB = new Date(b.metadata.date);
   if(dateA > dateB){
    return -1;
   }else{
     return 1;
   }
  })
  return (
    <Container>
      <Main>
        <div className="background">
          <img src="/laptop.jpg" alt="" />
          <div className="text">
            <h1>Seja bem vindo(a) ao meu blog!</h1>
            <p>Tecnologia | Atualidades | Tutoriais</p>
            <div className="sotial-mideas">
              <a href="">
                <ImagesWhatsApp />
              </a>
              <a href="">
                <ImagesInstagram/>
              </a>
              <a href="">
                <ImagesGithub />
              </a>
            </div>
          </div>
        </div>
      </Main>
      <Title id="posts">Artigos!</Title>
      <Wrapper>
        {data.map((post) => (
          <Link key={post.metadata.slug} href={`/post/${post.metadata.slug}`}>
              <Article>
                <h2>{post.metadata.title}</h2>
                <p>{post.metadata.excerpt}</p>
                <span>Publicado em {post.metadata.date}</span> <br />
              </Article>
          </Link>
        ))}
      </Wrapper>
      <Footer/>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  const data = await fetch("https://api.github.com/users/ezequiassantos11");
  const gitUser = await data.json();
  return {
    props: {
      posts,
      gitUser
    },
    revalidate: 10,
  };
}
