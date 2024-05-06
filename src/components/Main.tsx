import { useState } from "react";
import { db } from "../data/db";
import { createTheme, ThemeProvider } from "@mui/material";
import { Container, Box, Stack, Typography, Link, Grid } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Experience } from "./Experience";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 46,
    },
    subtitle1: {
      fontSize: 20,
    }
  },
  palette: {
    primary: {
      main: "#5eead4"
    }
  }
})

export const Main = () => {
  const [data] = useState(db)
  
  return (
    <ThemeProvider theme={theme}>
        <Container sx={{ my: 4, }}>
            <Box sx={{ width: '100%', maxWidth: 500, mt: 4, mb:3 }}>
                <Typography variant="h1">
                  Hello,
                </Typography>
                <Typography variant="h1" gutterBottom>
                  I´m Josemi and I love to
                  design digital products
                </Typography>
                <Typography variant="subtitle1">Frontend developer & visual designer</Typography>
              </Box>
              <Box>
                <Typography variant="button" display="block" gutterBottom sx={{ mb: 1, }}>
                  About
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  My passion lies in the intersection of art and technology, creating visually captivating web interfaces.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  My work is to provide solutions adapted to the technological needs of your business or company.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  My tools are my experience in different companies and projects, along with my constant training in websites design and frontend development.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  The result of my devotion and dedication are accessible and adaptive websites, with a clean, elegant graphic design that prioritizes user experience.
                </Typography>
              </Box>
              <Box sx={{ my: 4, }}>
                <Typography variant="button" display="block" gutterBottom sx={{ mb: 2, }}>
                    Experience
                </Typography>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
                  {data.map((experience) => (
                    <Experience 
                      key={experience.id}
                      experience={experience}
                    />
                  ))}
                </Grid>
              </Box>
              <Box sx={{ my: 2, }}>
                <Typography variant="button" display="block" gutterBottom sx={{ mb: 1, }}>
                    Contact
                </Typography>
                <Typography variant="subtitle1" gutterBottom>José Miguel Pérez Buenaño</Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ mb: 3 }}>elsemi6@protonmail.com</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Link 
                    href="https://www.linkedin.com/in/semiarte/" 
                    color="#ffffff"
                    rel="noopener"
                    target="_blank"
                  >
                    <LinkedInIcon fontSize="large" />
                  </Link>
                  <Link 
                    href="https://github.com/semiarte" 
                    color="#ffffff"
                    rel="noopener"
                    target="_blank"
                  >
                    <GitHubIcon fontSize="large" />
                  </Link>
                </Stack>
              </Box>
        </Container>
      </ThemeProvider>
  )
}
