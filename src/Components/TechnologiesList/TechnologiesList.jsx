import React, { useRef } from "react";
import PropTypes from "prop-types";
import styles from "./TechnologiesList.module.css";

// Mapeamento de tecnologias e suas imagens
const technologiesData = [
    { name: "Java", image: "javaIcon.png" },
    { name: "JavaScript", image: "javascriptIcon.png" },
    { name: "TypeScript", image: "typescriptIcon.png" },
    { name: "Python", image: "pythonIcon.png" },
    { name: "CSS", image: "cssIcon.png" },
    { name: "HTML", image: "htmlIcon.png" },
    { name: "Node.js", image: "nodejsIcon.png" },
    { name: "Spring", image: "springIcon.png" },
    { name: "Hibernate", image: "hibernateIcon.png" },
    { name: "React", image: "reactIcon.png" },
    { name: "JUnit", image: "junitIcon.png" },
    { name: "Django", image: "djangoIcon.png" },
    { name: "MySQL", image: "mysqlIcon.png" },
    { name: "PostgreSQL", image: "postgresqlIcon.png" },
    { name: "MongoDB", image: "mongodbIcon.png" },
    { name: "Docker", image: "dockerIcon.png" },
    { name: "Kubernetes", image: "kubernetesIcon.png" },
];

const TechnologiesList = () => {
    const listRef = useRef(null);

    const scroll = (scrollOffset) => {
        if (listRef.current) {
            listRef.current.scrollLeft += scrollOffset;
        }
    };

    return (
                    <>
                    <h4>Tecnologias</h4>
                    <div className={styles.container} ref={listRef}>
                        {technologiesData.map((tech, index) => (
                            <div className={styles.technologyItem} key={index}>
                                <img
                                    src={`./imgs/${tech.image}`}
                                    alt={`${tech.name} icon`}
                                    className={styles.techImage}
                                />
                                <span className={styles.techName}>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                    </>
    );
};

TechnologiesList.propTypes = {
    // Não há propriedades necessárias neste componente
};

export default TechnologiesList;
