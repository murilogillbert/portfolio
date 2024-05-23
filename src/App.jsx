import { useState } from "react";
import "./App.css";
import Profile from "./Components/Profile/Profile";
import profileImg from "./assets/profile.jpg";
import Project from "./Components/Projects/Projects";
import TechnologiesList from "./Components/TechnologiesList/TechnologiesList";

function App() {
  const imgProjects = [
    {
      img: "src/assets/norway.jpg",
      name: "Uma bela imagem de Norway",
      description:
        "Nesta Imagem podemos ver que abnf ujabfgabouf bnasoufb ougoas gubnaopf uabgoang oabuo gfnainguobanog uaubgabg bugnb",
      techs: [{ img: "src/assets/techs/html.png", name: "html" }],
      linkSite: "https://example.com/site1",
      linkRepositorio: "https://github.com/user/repo1"
    },
    {
      img: "src/assets/norway.jpg",
      name: "Outra bela imagem de Norway",
      description:
        "Outra descrição que exemplifica detalhes da imagem e tecnologias usadas.",
      techs: [{ img: "src/assets/techs/html.png", name: "html" }],
      linkSite: "https://example.com/site2",
      linkRepositorio: "https://github.com/user/repo2"
    },
    {
      img: "src/assets/norway.jpg",
      name: "Mais uma imagem de Norway",
      description:
        "Mais uma descrição para mostrar a estrutura de dados dos projetos.",
      techs: [{ img: "src/assets/techs/html.png", name: "html" }],
      linkSite: "https://example.com/site3",
      linkRepositorio: "https://github.com/user/repo3"
    },
  ];

  return (
    <>
      <nav>
        {/* Conteúdo do nav */}
      </nav>
      <main>
      <section className="profile">
          <Profile 
            img={profileImg} 
            name="Murilo Taques Gillbert" 
            age={20} 
            profession="Full-Stack Developer" 
            aboutMe="I am Murilo Taques Gilbert, a dedicated Full-Stack Developer with a strong passion for technology and problem-solving. With extensive experience in developing websites, business management systems, and AI applications, I thrive on learning new technologies and refining my skills."
            instagram="https://instagram.com/murilogillbert"
            linkedin="https://linkedin.com/in/murilotaquesgillbert"
            github="https://github.com/murilogillbert"
            email="murilo.gillbert@outlook.com"
            phone="(65) 99350-4640"
          />
        </section>
        <section className="technologie">
          <TechnologiesList/>
        </section>
        <section className="projects">
          {imgProjects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              name={project.name}
              description={project.description}
              techs={project.techs}
              linkSite={project.linkSite}
              linkRepositorio={project.linkRepositorio}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
