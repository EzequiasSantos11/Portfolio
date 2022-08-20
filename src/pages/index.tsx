import { useEffect, useState } from "react"
import Link from "next/link";
import { Container, Apresentation, About, Portfolio, Planos } from "../../Styles/HomeStyle"
import { Button } from "../Components/Button"
import { ImagesGithub, ImagesWhatsApp } from "../Components/Images";
import { Footer } from "../Components/Footer";
import { BsWhatsapp, BsCheck } from "react-icons/bs";



export default function Home() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > window.innerHeight - 200) {
        setOn(true);
      } else {
        setOn(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  return (
    <Container>
      <Apresentation id="Home">
        <img src="/portifolio/programer.jpg" alt="" />
        <div className="right">
          <div className="textApresentation">
            <h1>Olá, eu sou o <span>Ezequias Santos</span></h1>
            <h2>Desenvolvedor front-end React.js e Next.js!</h2>
            <p>Escalabilidade, inovação e autoridade. Tudo que um site precisa para se destacar na internet, basta fazer um orçamento e comprovar a qualidade.</p>
            <Link href="/#projetos">
              <a>
                <Button textButton="Faça um orçamento" />
              </a>
            </Link>
          </div>
        </div>
      </Apresentation>
      <About id="phases">
        <h2>As <span>etapas de criação</span> são bem simples!</h2>
        <div className="wrapper">
          <div className="card">
            <h3>Nos conte a sua idéia!</h3>
            <a href="https://br.freepik.com/vetores-gratis/projeto-do-fundo-do-negocio_1072818.htm#query=ideia&position=5&from_view=search">
              <img src="/portifolio/lampada-foguete.jpg" alt="Desenho vetoreal de uma lámpada amarela sob fundo azul do céu." />
            </a>
            <p>A primeira etapa é definir oque se é esperado desse site e quais funcionalidades ele terá. Não se preocupe, você será o regente dessa orquestra.</p>
          </div>
          <div className="card">
            <h3>Expectativa Vs Realidade</h3>
            <a href='https://br.freepik.com/fotos-vetores-gratis/empregado'>
              <img src="/portifolio/prototipo-ideia.jpg" alt="" />
            </a>
            <p>
              A segunda etapa é onde um protótipo será apresentado para aprovação, e assim que as expectaivas e todos os detalhes estiverem alinhadas, partimos para a próxima etapa.
            </p>
          </div>
          <div className="card">
            <h3>Mãos a obra</h3>
            <a href='https://www.freepik.com/vectors/behavior'>
              <img src="/portifolio/site.jpg" alt="" />
            </a>
            <p>Após um protótipo ser aprovado ele segue para a terceira etapa que é a de produção onde em poucos dias um site lindo, funcional e responsivo surgirá.</p>
          </div>
        </div>
      </About>
      <Portfolio id="portfolio">
        <h2>Alguns casos de <span>sucesso</span></h2>
        <p>Desde blog, e-commerce, landing page e muito mais. Elevando o desenvolvimento de sites a outro nível.</p>
        <div className="wrapper">
          <div className="projeto">
            <img src="/portifolio/Dashboard.png" alt="" />
            <h3>
              <a href="">
                Projeto um
              </a>
            </h3>
            <p>Breve descrição do projeto um</p>
          </div>
          <div className="projeto">
            <img src="/portifolio/Dashboard.png" alt="" />
            <h3>
              <a href="">
                Projeto dois
              </a>
            </h3>
            <p>Breve descrição do projeto dois</p>
          </div>
          <div className="projeto">
            <img src="/portifolio/Dashboard.png" alt="" />
            <h3>
              <a href="">
                Projeto três
              </a>
            </h3>
            <p>Breve descrição do projeto três</p>
          </div>
          <div className="projeto">
            <img src="/portifolio/Dashboard.png" alt="" />
            <h3>
              <a href="">
                Projeto quatro
              </a>
            </h3>
            <p>Breve descrição do projeto quatro</p>
          </div>
        </div>
      </Portfolio>
      <Planos id="planos">
        <h2>Escolha um plano e vamos juntos construir o futuro</h2>
        <div className="wrapper">
          <div className="plano">
            <div className="title basic">
              <h3>Plano básico</h3>
              <h4>Escolha um de nossos modelos de site pré aprovados, criado por um profissional UI/UX com muita experiência e autoridade no assunto.</h4>
            </div>
            <div className="description basic">
              <strong>Apartir de R$ 650</strong>
              <p> <BsCheck/> Site profissional responsivo e funcional baseado em modelo.</p>
              <p> <BsCheck/> Um ano de domínio grátis.</p>
              <p> <BsCheck/> Integração com API's.</p>
              <p> <BsCheck/> Manutenção e suporte técnico gratuítos por um mês.</p>
              <p> <BsCheck/> Plataforma de administração do site com até dois administradores (landing pages não incluso).</p>
              <p><BsCheck/> Versão em portugês e inglês.</p>
              <button className="basic">contratar</button>
            </div>
          </div>
          <div className="plano">
            <div className="title master">
              <h3>Plano master</h3>
              <h4>Caso já tenha um desing ou deseja que criamos um para você este é o plano ideal pois nele você terá um site sob medida feito do zero.</h4>
            </div>
            <div className="description master">
            <strong>Necessário orçamento</strong>
              <p> <BsCheck/> Site profissional responsivo e funcional de acordo com cliente.</p>
              <p> <BsCheck/> Desing e marca pessoal exclusivos.</p>
              <p> <BsCheck/> Um ano de domínio grátis.</p>
              <p> <BsCheck/> Integração com API's.</p>
              <p> <BsCheck/> Manutenção e suporte técnico gratuítos por três mês.</p>
              <p> <BsCheck/> Plataforma de administração do site com até dois administradores.</p>
              <p> <BsCheck/> Versão em portugês e inglês.</p>
              <button className="master">contratar</button>
            </div>
          </div>
        </div>
      </Planos>
      <Footer />
      <a target={"_blank"} href="https://contate.me/ezequiassantos-frontend" className="zap zap1"><BsWhatsapp /></a>
      <a href="https://contate.me/ezequiassantos-frontend" className="zap zap2"><BsWhatsapp /></a>
    </Container>
  )
}