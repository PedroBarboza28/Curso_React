import styles from "./Header.module.css";
function Header(){
return(
  <header className={styles.header}>
  <span>One Piece</span>
  <nav>
    <a href="#">Personagens</a>
    <a href="#">Frutas</a>
  </nav>
  
  </header>
);
}
export default Header;