import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  styled,
  Tooltip,
  Typography,
} from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export const About: React.FC = () => {
  const [expanded, setExpanded] = React.useState(true)

  return (
    <div>
      <Paper
        background-color="primary"
        elevation={18}
        sx={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '50px',
          marginBottom: '100px',
          p: 2,
          maxWidth: 800,
          flexGrow: 1,
          backgroundColor: '#F3DC68',
        }}
      >
        <Typography variant="h2" textAlign="center">
          About
        </Typography>
        <Card
          variant="outlined"
          sx={{ maxWidth: 800, border: '2px solid #03776C' }}
        >
          <CardHeader
            title="Objective"
            sx={{ paddingBottom: '0px', color: '#92353e' }}
          />
          <CardActions disableSpacing>
            <CardContent>
              <Typography paragraph>
                I wanted to create an app that utilizes{' '}
                <Tooltip title="http://www.omdbapi.com/">
                  <a href="http://www.omdbapi.com/"> OMDb API</a>
                </Tooltip>{' '}
                to create a free choice movie quiz generator. OMDb API provides
                movie related information through a RESTful web service. There
                was not a quiz website that allowed users to choose movies to
                test their movie knowledge, so I created one.
              </Typography>
            </CardContent>
          </CardActions>
        </Card>
        <br />
        <Card
          variant="outlined"
          sx={{
            maxWidth: 800,
            border: '2px solid #92353e',
            paddingBottom: '0px',
          }}
        >
          <CardHeader
            title="Technology Stack"
            sx={{ paddingBottom: '0px', color: '#03776C' }}
          />
          <CardContent sx={{ paddingTop: '0px' }}>
            <List>
              <ListItem>
                <ListItemText primary="Languages" secondary="TypeScript" />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Frameworks"
                  secondary="React, React Testing Library"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Design" secondary="Material UI" />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Tools"
                  secondary="Amplify, GitHub, Visual Code Studio, Trello"
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <br />
        <Card sx={{ maxWidth: 800, border: '2px solid #03776C' }}>
          <CardHeader
            title="Application Flow"
            sx={{ paddingBottom: '0px', color: '#92353e' }}
          />
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardMedia
              component="img"
              image={require('../assets/movie-trivia-diagram.jpg')}
              alt="application diagram"
              sx={{ objectFit: 'contain' }}
            />
          </Collapse>
        </Card>
        <br />
        <Card sx={{ maxWidth: 800, border: '2px solid #92353e' }}>
          <CardHeader title="Testing" sx={{ color: '#03776C' }} />
          <CardContent sx={{ paddingTop: '0px' }}>
            <Typography variant="body1" color="text.primary">
              Using{' '}
              <Tooltip title="https://testing-library.com/docs/react-testing-library/intro/">
                <Link
                  href="https://testing-library.com/docs/react-testing-library/intro/"
                  underline="none"
                  color="text.primary"
                >
                  React Testing Library
                </Link>
              </Tooltip>
              , I created the following tests to validate the functionality of
              my app:
            </Typography>
            <List>
              <ListItem>
                <ListItemText secondary="Validate that input elements render" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="Validate that input elements should be typeable" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="When Generate button is clicked and input element(s) are empty, validate input element displays error under it" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="Validate that input element(s) should allow input change" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="Validate that input text corresponds with rendered answer buttons" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="Validate that first question is about actors" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="Validate that second part of actor's question is corresponds to answer set" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="When Reset button is clicked, validate that quiz resets back to original state" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="When Next button is clicked, validate that quiz state changes to next question" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <br />
        <Card sx={{ maxWidth: 800, border: '2px solid #03776C' }}>
          <CardHeader
            title="Reflections"
            sx={{ paddingBottom: '0px', color: '#92353e' }}
          />
          <CardContent sx={{ paddingTop: '0px' }}>
            <List>
              <ListItem>
                <ListItemText primary="Start with the visual design layout first" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Expand and utilize whiteboarding/diagramming more" />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Start testing earlier by doing test driven development (TDD). For example, not every movie title had an avaiable value for each subject. 
                To keep the integiry of the quiz consistent, I had to narrow down the avaiable answer set to choose from out of what was avaiable or
                skip the question all together. If I had done TDD, I may have learned that earlier."
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <br />
        <Card sx={{ maxWidth: 800, border: '2px solid #92353e' }}>
          <CardHeader
            title="Future Improvements"
            sx={{ paddingBottom: '0px', color: '#03776C' }}
          />
          <CardContent sx={{ paddingTop: '0px' }}>
            <List>
              <ListItem>
                <ListItemText primary="Shareable quizzes" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Adding a Quiz timer" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ability to create user profiles to track records of previous quiz sessions" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Community record board and forum" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Paper>
    </div>
  )
}
