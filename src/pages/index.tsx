import {ImagesGithub, ImagesInstagram, ImagesWhatsApp } from "../Components/Images";
import { Home, Article, Wrapper, Main, Title, Anuncio } from "../../Styles/HomeStyle";
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
      <Main>
        <div className="background">
          <img src="/laptop.jpg" alt="" />
          <div className="text">
            <h1>Seja bem vindo(a), EzequiasBlog, um blog de Jr pra Jr!</h1>
            <p>Siga-me nas minhas redes sociais para mais conteúdo!</p>
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
          <Link key={post.metadata.slug} href={`/post/${post.metadata.slug}`}>
              <Article>
                <h2>{post.metadata.title}</h2>
                <p>{post.metadata.excerpt}</p>
                <span>Publicado em {post.metadata.date}</span> <br />
              </Article>
          </Link>
        ))}
      </Wrapper>
      <Anuncio>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1405907005505819"
        crossOrigin="anonymous"></script>
        {/* <!-- home orizontal --> */}
        <ins className="adsbygoogle"
            style={{display: "block",  width: "100%", height: "100%"}}
            data-ad-client="ca-pub-1405907005505819"
            data-ad-slot="4323335309"
            data-adtest="on"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </Anuncio>
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
