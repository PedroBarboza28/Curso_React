import styles from "./Header.module.css";
function Header(){
return(
  <header className={styles.header}>
  <span>One Piece</span>
  <nav>
    <a href="#">Comunidade</a>
    <a href="#">Eventos</a>
  </nav>
  
  </header>
);
}
export default Header;