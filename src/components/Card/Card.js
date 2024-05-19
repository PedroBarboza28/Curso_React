import styles from "./Card.module.css"

function Card({id}){
  return(
    <section className={styles.Card}>
    <a
       href={`https://www.youtube.com/watch?v=${id}`}
       rel="noreferrer noopener"
       target="_blank">
       <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="FrutasOnePiece"/>

    </a>    
    </section>
  );
}

export default Card;