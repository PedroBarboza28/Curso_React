import videos from "../../json/db.json"
import styles from "./Category.module.css"


export const Categorias = [
  "Frutas",
  "Arcos",
  "Personagens"
]

 export function Filtercategory(id){
  return videos.filter( videos => videos.category === Categorias[id] )
}

function Category({category, children}){

   return (
     <section className={styles.category}>
     <h2>{category}</h2>
       <div>
         {children}
       </div>
     </section>

   )

}
export default Category;