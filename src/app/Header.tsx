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
  Menu,
  MenuItem,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import { Outlet, Link, LinkProps } from 'react-router-dom'

export interface ProjectPage {
  ProjectName: string
  ProjectSite: string
}

export const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const gitRepo: string = 'https://github.com/ryanmontgomerytate/movie_trivia'
  const mainSiteUrl: string = 'https://ryantatecodes.com'
  const linkToApp = React.forwardRef<any, Omit<LinkProps, 'to'>>(
    (props, ref) => <Link ref={ref} to="/" {...props} role={undefined} />,
  )

  const linkToAbout = React.forwardRef<any, Omit<LinkProps, 'to'>>(
    (props, ref) => <Link ref={ref} to="/about" {...props} role={undefined} />,
  )
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const projectPages: ProjectPage[] = [
    {
      ProjectName: 'Movie Trivia',
      ProjectSite: '/App',
    },
    {
      ProjectName: 'About',
      ProjectSite: '/About',
    },
    {
      ProjectName: 'Main Site',
      ProjectSite: 'https://www.ryantatecodes.com/',
    },
  ]
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={linkToApp}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                textDecoration: 'none',
                color: 'white',
              }}
            >
              🍿 Movie Trivia Generator
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {projectPages.map((page) =>
                  page.ProjectName === 'Main Site' ? (
                    <MenuItem
                      key={page.ProjectName}
                      onClick={() => {
                        window.open(mainSiteUrl, '_blank')
                        handleCloseNavMenu()
                      }}
                    >
                      <Typography textAlign="center">
                        {page.ProjectName}
                      </Typography>
                    </MenuItem>
                  ) : page.ProjectName === 'About' ? (
                    <MenuItem
                      key={page.ProjectName}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography
                        textAlign="center"
                        component={linkToAbout}
                        sx={{ textDecoration: 'none', color: 'black' }}
                      >
                        {page.ProjectName}
                      </Typography>
                    </MenuItem>
                  ) : page.ProjectName === 'Movie Trivia' ? (
                    <MenuItem
                      key={page.ProjectName}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography
                        textAlign="center"
                        component={linkToApp}
                        sx={{ textDecoration: 'none', color: 'black' }}
                      >
                        {page.ProjectName}
                      </Typography>
                    </MenuItem>
                  ) : (
                    <MenuItem
                      key={page.ProjectName}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">
                        {page.ProjectName}
                      </Typography>
                    </MenuItem>
                  ),
                )}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component={linkToApp}
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                textDecoration: 'none',
                color: 'white',
              }}
            >
              🍿 Movie Trivia Generator
            </Typography>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              |
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component={linkToAbout}
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                textDecoration: 'none',
                color: 'white',
              }}
            >
              About
            </Typography>

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Tooltip title="ryantatecodes.com">
                <IconButton
                  onClick={() => window.open(mainSiteUrl, '_blank')}
                  size="small"
                  aria-label="ryantatecodes.com"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <HomeIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="GitHub Repository">
                <IconButton
                  onClick={() => window.open(gitRepo, '_blank')}
                  aria-label="GitHub"
                >
                  <img src={require('../assets/GitHub-Mark-Light-32px.png')} />
                </IconButton>
              </Tooltip>
            </Box>
            <Outlet />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
