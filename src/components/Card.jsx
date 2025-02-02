import * as React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, List, ListItem, ListItemText, Box, Chip, Grid } from "@mui/material";

export default function ProjectCard({ 
  title, 
  image, 
  description, 
  features, 
  technologies, 
  challenges, 
  solutions,
  repoLink,
  liveDemo 
}) {
  return (
    <Card 
      sx={{ 
        width: "100%", // Ocupa toda a largura disponível
        maxWidth: 800, // Define um limite máximo para todos os cards
        minHeight: 400, // Garante altura uniforme
        m: 2, 
        borderRadius: 3, 
        boxShadow: 5, 
        transition: "0.3s",
        "&:hover": { boxShadow: 8 } 
      }}
    >
      <Grid container spacing={0} sx={{ minHeight: 200 }}>
        
        {/* Imagem à esquerda */}
        <Grid item xs={12} md={4}>
          <CardMedia 
            component="img"
            sx={{ height: "100%", objectFit: "cover", minHeight: 200 }} 
            image={image} 
            title={title} 
          />
        </Grid>

        {/* Título e descrição à direita */}
        <Grid item xs={12} md={8}>
          <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography 
              variant="h5" 
              sx={{ fontWeight: "bold", background: "linear-gradient(90deg, #ff6a00, #ee0979)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              {description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      {/* Informações ocupando toda a largura abaixo */}
      <CardContent>
        <Typography variant="body1" fontWeight="bold">📌 Funcionalidades:</Typography>
        <List dense sx={{ pl: 1 }}>
          {features.map((feature, index) => (
            <ListItem key={index} sx={{ py: 0 }}>
              <ListItemText primary={`✔ ${feature}`} />
            </ListItem>
          ))}
        </List>

        <Typography variant="body1" fontWeight="bold" mt={1}>🛠 Tecnologias:</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
          {technologies.map((tech, index) => (
            <Chip key={index} label={tech} variant="outlined" color="primary" />
          ))}
        </Box>

        <Typography variant="body1" fontWeight="bold" mt={2}>🚀 Desafios:</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          {challenges}
        </Typography>

        <Typography variant="body1" fontWeight="bold">✅ Resolução:</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {solutions}
        </Typography>
      </CardContent>

      {/* Ações */}
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        {repoLink && (
          <Button size="small" href={repoLink} target="_blank" rel="noopener" variant="contained" color="secondary">
            🔗 Repositório
          </Button>
        )}
        {liveDemo && (
          <Button size="small" href={liveDemo} target="_blank" rel="noopener" variant="contained" color="success">
            🎬 Site
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
