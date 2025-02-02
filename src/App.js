import { useState, useMemo,useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Container, Paper, Avatar, Button, Stack, Box } from "@mui/material";
import { DarkMode, LightMode, LinkedIn, GitHub, Email } from "@mui/icons-material";
import imageDataScience from "./assets/data_science_project.png"; //imagem local
import imageToDo from "./assets/todo_img_project.png"
import imageSemanaAcademica from "./assets/semana_academica_project.png"
import ProjectCard from "./components/Card";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
        primary: {
          main: "#673AB7",
        },
        secondary: {
          main: "#FF4081",
        },
        background: {
          default: darkMode ? "#121212" : "#F5F5F5",
          paper: darkMode ? "#1E1E1E" : "#FFFFFF",
        },
        text: {
          primary: darkMode ? "#FFFFFF" : "#212121",
          secondary: darkMode ? "#B0BEC5" : "#757575",
        },
      },
      typography: {
        fontFamily: "Poppins, sans-serif",
      },
    }), [darkMode]
  );

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setLanguage(userLang.startsWith("pt") ? "pt" : "en");
  }, []);

  const content = {
    en: {
      title: "Murilo Taques Gillbert",
      intro: "As a Full Stack Developer, I specialize in creating modern web applications and AI-driven solutions. Since 2022, I have been actively working on website development and artificial intelligence projects, continuously enhancing my expertise in software engineering and data science.",
      educationTitle: "🎓 Education & Certifications",
      education: "I am currently pursuing a Bachelor's degree in Computer Science at UFMT - Universidade Federal de Mato Grosso, expected to graduate in October 2025. Additionally, I have earned IBM certifications in:",
      certs: ["📌 Tools for Data Science", "📌 Python for Data Science, AI & Development", "📌 Data Science Methodology"],
      skillsTitle: "🚀 Technologies & Skills",
      skills: "Proficient in Full Stack Development with expertise in React, JavaScript, TypeScript, Node.js, Express, NestJS, and databases like PostgreSQL & MongoDB. Additionally, I have experience in Material-UI and AWS.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "E-mail"
    },
    pt: {
      title: "Murilo Taques Gillbert",
      intro: "Como Desenvolvedor Full Stack, me especializo na criação de aplicações web modernas e soluções baseadas em IA. Desde 2022, venho trabalhando ativamente em desenvolvimento de sites e projetos de inteligência artificial, aprimorando constantemente minha expertise em engenharia de software e ciência de dados.",
      educationTitle: "🎓 Formação & Certificações",
      education: "Atualmente, estou cursando Bacharelado em Ciência da Computação na UFMT - Universidade Federal de Mato Grosso, com previsão de conclusão em outubro de 2025. Além disso, obtive certificações da IBM em:",
      certs: ["📌 Ferramentas para Ciência de Dados", "📌 Python para Ciência de Dados, IA e Desenvolvimento", "📌 Metodologia de Ciência de Dados"],
      skillsTitle: "🚀 Tecnologias & Habilidades",
      skills: "Proficiente em Desenvolvimento Full Stack, com experiência em React, JavaScript, TypeScript, Node.js, Express, NestJS e bancos de dados como PostgreSQL & MongoDB. Além disso, possuo conhecimento em Material-UI e AWS.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "E-mail"
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="static" sx={{ background: "linear-gradient(90deg, #673AB7, #FF4081)" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          </Typography>
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="xl"
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          gap: 4,
        }}
      >
 <Paper sx={{ p: 5, width: "100%", maxWidth: "900px", borderRadius: 3, boxShadow: 5, textAlign: "center" }}>
      <Avatar
        src="https://github.com/murilogillbert.png"
        alt="Minha Foto"
        sx={{ width: 180, height: 180, margin: "auto", mb: 3, border: "5px solid #673AB7" }}
      />
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          background: "linear-gradient(90deg, #673AB7, #FF4081)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        {content[language].title}
      </Typography>

      <Typography variant="h5" mt={2} sx={{ color: "text.secondary", textAlign: "justify", lineHeight: 1.6 }}>
        {content[language].intro}
      </Typography>

      <Typography variant="h5" mt={2} fontWeight="bold" sx={{ color: "primary.main" }}>
        {content[language].educationTitle}
      </Typography>

      <Typography variant="body1" sx={{ color: "text.secondary", textAlign: "justify", lineHeight: 1.6 }}>
        {content[language].education}
      </Typography>

      <Box component="ul" sx={{ color: "text.secondary", textAlign: "justify", lineHeight: 1.6 }}>
        {content[language].certs.map((cert, index) => (
          <Typography key={index} component="li">{cert}</Typography>
        ))}
      </Box>

      <Typography variant="h5" mt={3} fontWeight="bold" sx={{ color: "primary.main" }}>
        {content[language].skillsTitle}
      </Typography>

      <Typography variant="body1" sx={{ color: "text.secondary", textAlign: "justify", lineHeight: 1.6 }}>
        {content[language].skills}
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="center" mt={4}>
        <Button variant="contained" color="primary" startIcon={<LinkedIn />} href="https://www.linkedin.com/in/murilotaquesgillbert/" target="_blank">
          {content[language].linkedin}
        </Button>
        <Button variant="contained" color="secondary" startIcon={<GitHub />} href="https://github.com/murilogillbert" target="_blank">
          {content[language].github}
        </Button>
        <Button variant="contained" startIcon={<Email />} href="mailto:murilogillbert@gmail.com">
          {content[language].email}
        </Button>
      </Stack>
    </Paper>
        {/* Projetos */}
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3, width: "100%" }}>
          <ProjectCard
            title="Todo App"
            image={imageToDo}
            description="Um app de tarefas com autenticação segura e UI moderna."
            features={[
              "Criar, editar e excluir tarefas",
              "Sessão segura com login e senha hashada",
              "Interface responsiva",
              "Cada usuário vê só suas próprias tarefas",
            ]}
            technologies={["React", "Vite", "Material UI", "NestJS", "PostgreSQL"]}
            challenges="Implementar autenticação segura e banco de dados eficiente."
            solutions="Utilização de bcrypt para hash de senhas e otimização do banco PostgreSQL."
            repoLink="https://github.com/murilogillbert/frontend"
            liveDemo="https://frontend-wheat-phi-56.vercel.app/"
          />

          <ProjectCard
            title="Semana Acadêmica 2024 - Instituto de Computação UFMT"
            image={imageSemanaAcademica}
            description="Evento do Instituto de Computação da UFMT reunindo estudantes, professores e profissionais."
            features={[
              "📢 Palestras com especialistas renomados",
              "💻 Workshops práticos",
              "🚀 Maratona de programação",
              "🤝 Sessões de networking",
              "🎥 Transmissões ao vivo pelo YouTube",
              "📸 Galeria de fotos dinâmica via Google Drive",
            ]}
            technologies={[
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "Material-UI",
              "YouTube API",
              "Google Drive API",
              "Swiper.js",
            ]}
            challenges="Integrar a live do YouTube diretamente na página e puxar fotos do Google Drive para um carrossel dinâmico."
            solutions="Uso da YouTube API para embutir transmissões ao vivo e da Google Drive API junto ao Swiper.js para exibição fluida de imagens em carrossel."
            repoLink="https://github.com/InfoCorpUFMT/semana-academica-2024"
            liveDemo="https://www.ic.ufmt.br/semanaacademica/"
          />
          <ProjectCard
            title="Ciência de Dados na Gestão de Dados da UFMT"
            image={imageDataScience}
            description="Projeto de pesquisa para a organização, análise e visualização dos dados da UFMT, garantindo conformidade com a LGPD."
            features={[
              "📊 Análise e processamento de dados",
              "🔍 Aplicação da LGPD na gestão de dados",
              "📈 Visualização interativa das informações",
              "🌍 Disponibilização de dados para o público",
            ]}
            technologies={[
              "Python",
              "Pandas",
              "React",
              "JavaScript",
              "Material-UI",
              "Google Forms API",
              "PostgreSQL",
              "Docker",
            ]}
            challenges="Tratar e exibir dados complexos coletados pela UFMT garantindo conformidade com a LGPD."
            solutions="Utilização da linguagem Python e Pandas para manipulação de dados, React para interface e PostgreSQL para armazenamento."
            repoLink="https://github.com/murilogillbert/dashboard"
            liveDemo="https://seu-site.com"
          />

        </Box>
      </Container>
    </ThemeProvider>

  );
}

export default App;
