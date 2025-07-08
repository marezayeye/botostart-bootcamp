import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://github.com/marezayeye">Github Profile</a> | Botostart
        Bootcamp | Week 14
      </p>
    </div>
  );
}

export default Header;
