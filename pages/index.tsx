import { getAllPosts } from "../scripts/blog/getAllPosts";
import { HeaderComponent } from "../Components/Header";
import { PropsHome } from "../@types";
import { Home, Article, Wrapper, Main } from "../Styles/HomeStyle";
import Link from "next/link";
import ImageLaptop from "../images/laptop.jpg";

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
      <HeaderComponent name={gitUser.name} avatar_url={gitUser.avatar_url} />
      <Main>
        <div className="background">
          <img src="/laptop.jpg" alt="" />
          <h1>Seja bem vindo(a)!</h1>
        </div>
      </Main>
      <Wrapper>
        {data.map((post) => (
          <Link key={post.metadata.slug} href={`/post/${post.metadata.slug}`}>
              <Article>
                <span>criado em {post.metadata.date}</span> <br />
                <h2>{post.metadata.title}</h2>
                <p>{post.metadata.excerpt}</p>
              </Article>
          </Link>
        ))}
      </Wrapper>
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
    }
  };
}
