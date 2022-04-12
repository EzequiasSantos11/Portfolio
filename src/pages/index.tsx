import {ImagesGithub, ImagesInstagram, ImagesWhatsApp } from "../Components/Images";
import { Home, Article, Wrapper, Main, Title } from "../../Styles/HomeStyle";
import { getAllPosts } from "../scripts/blog/getAllPosts";
import { PropsHome } from "../@types";
import Link from "next/link";

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
    <Home>
      <Main id="home">
        <div className="background">
          <img src="/laptop.jpg" alt="" />
          <div className="text">
            <h1>Seja bem vindo(a)!</h1>
            <p>Olá, seja super bem vindo(a) ao meu blog, aqui pretendo contribuir um pouco mais com a comunidade Dev, compartilhando conhecimento e curiosidades desse universo de desenvolvimento web. Caso queira vou deixar aqui algumas formas de você entrar em contato comigo, seja para, fazer um elogio, dar opiniões e sujestões ou somente bater um papo sobre desenvolvimento web é só chamar!</p>
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
      <Title id="posts">Posts do blog!</Title>
      <Wrapper>
        {data.map((post) => (
          <Link key={post.metadata.slug} href={`/Post/${post.metadata.slug}`}>
              <Article>
                <span>Publicado em {post.metadata.date}</span> <br />
                <h2>{post.metadata.title}</h2>
                <p>{post.metadata.excerpt}</p>
              </Article>
          </Link>
        ))}
      </Wrapper>
      <footer>
        <h4>&copy; Feito por | Ezequais Santos</h4>
        <span>Desenvolvedor front-end React.js / Next.js</span>
      </footer>
    </Home>
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
