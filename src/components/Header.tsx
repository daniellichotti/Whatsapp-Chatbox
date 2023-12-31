import styles from "./Header.module.css";

import logo from "../icons/call_black_24dp (1) 1.png";
import logo2 from "../icons/more_vert_black_24dp 1.png";
import profile from "../img/download.jpeg";
import check from "../icons/verified_black_24dp 1.png";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <img
          className={styles.profileImg}
          src={profile}
          alt="imagem profile do whatsapp"
        />
        <p>Atendente</p>
        <img
          className={styles.checked}
          src={check}
          alt="imagem checked do whatsapp"
        />
      </div>
      <div className={styles.options}>
        <img src={logo} alt="imagem telefone do whatsapp" />
        <img src={logo2} alt="imagem 3 pontos do whatsapp" />
      </div>
    </header>
  );
}
