import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function app(){
  return(
<>
<Header/>
<Banner image="OnePiece2"/>
<Container>
  <h1>De Monkey D. Luffy!</h1>
  <p>Não existe nada que possa nos deter
     quando estamos determinados e unidos como uma equipe! Vamos lá, pessoal, rumo ao topo do mundo!" 🚀🌟</p>
</Container>
<Footer/>
</>
)
}
export default app;