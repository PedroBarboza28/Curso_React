import Banner from "./components/Banner";
import Card from "./components/Card/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Category, {Categorias, Filtercategory} from "./components/Category/Category";

function App(){
  return(
<>
<Header/>
<Banner image="OnePiece2"/>
<Container>

{
  Categorias.map((category, index) =>
  <Category category={category}>
  {Filtercategory(index).map((video) => <Card id={video.id} key={video.id}/>)}
  </Category> )
} 
   
</Container>
<Footer/>
</>
)
}
export default App;