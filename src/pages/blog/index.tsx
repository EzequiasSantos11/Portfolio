import { ImageGithub, ImageInstagram, ImageLinkedin, ImageWhatsApp} from "../../Components/Images";
import { Container, Card, Wrapper, Main } from "../../../Styles/BlogStyle";
import { getAllPosts } from "../../scripts/blog/getAllPosts";
import { PropsHome } from "../../@types";
import Link from "next/link";
import { Footer } from "../../Components/Footer";

export default function Blog({ posts }: PropsHome) {

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
        <img src="/background-futuristic.jpg" alt="" />
        <h1>Seja bem vindo(a) ao meu blog!</h1>
        <p>Tudo sobre o mundo da tecnologia, com foco em frontend e uma pitada de humor. Faça uma boa leitura e caso tenha dicas ou sujestões para posts é só me chamar em uma de minhas redes sociais, será um prazer respondê-lo(a).</p>
        <div className="sotialMideas">
          <a className="first" target="_blank" href="https://instagram.com/ezequias.dev">
            <ImageInstagram/>
          </a>
          <a className="second" target="_blank" href="https://github.com/ezequiassantos11">
            <ImageGithub/>
          </a>
          <a className="tirst" target="_blank" href="https://linkedin.com/in/ezequias-dev">
            <ImageLinkedin/>
          </a>
        </div>
      </Main>
      <Wrapper>
        {data.map((post) => (
          <Link key={post.metadata.slug} href={`/post/${post.metadata.slug}`}>
              <Card>
                <div className="image">
                  <img src={post.metadata.tumbnail} alt="" />
                  <h2>{post.metadata.title}</h2>
                </div>
                <p>{post.metadata.excerpt}</p>
                <span>Publicado em {post.metadata.date}</span> <br />
              </Card>
          </Link>
        ))}
      </Wrapper>
      <Footer/>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
