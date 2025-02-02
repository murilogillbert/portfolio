import { useState, useMemo } from "react";
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
        <Paper
          sx={{
            p: 5,
            width: "100%",
            maxWidth: "900px",
            borderRadius: 3,
            boxShadow: 5,
            textAlign: "center",
          }}
        >
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
            Murilo Taques Gillbert
          </Typography>

          <Typography variant="h5" mt={2} sx={{ color: "text.secondary", textAlign: "justify", lineHeight: 1.6 }}>
            As a Full Stack Developer, I specialize in creating <b>modern web applications and AI-driven solutions</b>.
            Since 2022, I have been actively working on website <b>development and artificial intelligence projects</b>,
            continuously enhancing my expertise in <b>software engineering and data science</b>.
          </Typography>

          <Typography variant="h5" mt={2} fontWeight="bold" sx={{ color: "primary.main" }}>
            🎓 Education & Certifications
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", textAlign: "justify", lineHeight: 1.6 }}>
            I am currently pursuing a <b>Bachelor’s degree in Computer science</b> at UFMT - Universidade Federal de Mato Grosso,
            expected to graduate in October 2025 Additionally, I have earned IBM certifications in:
          </Typography>

          <Box component="ul" sx={{ color: "text.secondary", textAlign: "justify", lineHeight: 1.6 }}>
            <Typography component="li">📌 Tools for Data Science</Typography>
            <Typography component="li">📌 Python for Data Science, AI & Development</Typography>
            <Typography component="li">📌 Data Science Methodology</Typography>
          </Box>

          <Typography variant="h5" mt={3} fontWeight="bold" sx={{ color: "primary.main" }}>
            🚀 Technologies & Skills
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", textAlign: "justify", lineHeight: 1.6 }}>
            Proficient in <b>Full Stack Development</b> with expertise in <b>React, JavaScript, TypeScript, Node.js, Express, NestJS</b>,
            and databases like <b>PostgreSQL & MongoDB</b>. Additionally, I have experience in <b>Material-UI and AWS</b>.
          </Typography>


          <Stack direction="row" spacing={3} justifyContent="center" mt={4}>
            <Button variant="contained" color="primary" startIcon={<LinkedIn />} href="https://www.linkedin.com/in/seu-perfil" target="_blank">
              LinkedIn
            </Button>
            <Button variant="contained" color="secondary" startIcon={<GitHub />} href="https://github.com/seu-github" target="_blank">
              GitHub
            </Button>
            <Button variant="contained" startIcon={<Email />} href="mailto:seuemail@example.com">
              E-mail
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
