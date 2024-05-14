import styles from "./Container.module.css";

function Container({children}){
  return(
  <section class={styles.Container}>
    {children}
  </section>
  );
}

export default Container;