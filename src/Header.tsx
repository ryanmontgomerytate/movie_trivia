import React from 'react'
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Tooltip,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from "react-router-dom";

export interface ProjectPage {
  ProjectName: string
  ProjectSite: string
}

const projectPages: ProjectPage[] = [
  {
    ProjectName: 'Home',
    ProjectSite: 'https://www.ryantatecodes.com/',
  },
]

export const Header: React.FC = () => {
  const gitRepo: string = 'https://github.com/ryanmontgomerytate/movie_trivia'
  const homeUrl: string = 'https://ryantatecodes.com'

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              {' '}
              🍿 Movie Trivia Generator{' '}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => window.open(homeUrl, '_blank')}
                color="inherit"
              >
                <HomeIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              {' '}
              🍿 Movie Trivia Generator
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/about">About</Link>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {projectPages.map((page) => (
                <Button
                  key={page.ProjectName}
                  onClick={() => window.open(page.ProjectSite, '_blank')}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.ProjectName}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="GitHub Repository">
                <IconButton
                  onClick={() => window.open(gitRepo, '_blank')}
                  aria-label="GitHub"
                >
                  <img src={require('./assets/GitHub-Mark-Light-32px.png')} />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
