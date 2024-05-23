import styles from "./Projects.module.css";
import PropTypes from "prop-types";

// Correção do nome de PropTypes e estrutura correta
Project.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  techs: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string,
    })
  ).isRequired,
  linkSite: PropTypes.string.isRequired,
  linkRepositorio: PropTypes.string.isRequired,
};


export default function Project({ img, name, description, techs, linkSite, linkRepositorio }) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.imgContainer}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.info}>
        <div className={styles.headline}>
          <h2>{name}</h2>
          <div className={styles.techs}>
            {techs.map((item, index) => (
              <img key={index} src={item.img} alt={item.name} />
            ))}
          </div>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => window.location.href = linkSite}>Visitar Site</button>
          <button onClick={() => window.location.href = linkRepositorio}>{'<Repositório/>'}</button>
        </div>
      </div>
    </div>
  );
}
