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

export interface ProjectPage {
  ProjectName: string
  ProjectSite: string
}

const projectPages: ProjectPage[] = [
  {
    ProjectName: 'Home',
    ProjectSite: 'https://www.ryantatecodes.com/',
  },
  {
    ProjectName: 'Party List',
    ProjectSite: 'https://www.partylist.ryantatecodes.com/',
  },
]

export const Header: React.FC = () => {
  const gitRepo: string =
    'https://github.com/ryanmontgomerytate/movie_trivia.git'
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
              🍿{' '}
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
              🍿{' '}
            </Typography>
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
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32.000000pt"
                    height="32.000000pt"
                    viewBox="0 0 32.000000 32.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M95 306 c-113 -52 -127 -204 -25 -274 39 -26 50 -28 50 -7 0 8 -7 15
-15 15 -8 0 -25 12 -39 27 -28 30 -26 45 2 20 20 -19 48 -22 57 -8 3 5 -3 12
-14 16 -40 12 -54 41 -47 97 l7 53 89 0 89 0 7 -53 c7 -55 -7 -85 -45 -97 -13
-4 -16 -14 -13 -45 2 -22 7 -40 12 -40 4 0 22 10 40 22 93 64 91 191 -2 261
-34 25 -113 32 -153 13z"
                      />
                    </g>
                  </svg>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AppBar color="secondary" position="static">
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 0 }}>
            <h1>Welcome to Movie Trivia Generator</h1>
            <h2>
              Featuring <a href="http://www.omdbapi.com/">OMDb API</a>
            </h2>
          </Box>
        </Container>
      </AppBar>
    </>
  )
}
