import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  List,
  ListItem,
  ListItemText,
  Paper,
  styled,
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

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
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
          <CardHeader title="Objective" />
          <CardContent>
            <Typography paragraph>
              Create an app that uses OMDb API to create a free choice movie
              quiz. OMDb API provides movie related information through a
              RESTful web service. There was not a quiz website that allowed
              users to choose four movies to test their movie knowledge.
            </Typography>
          </CardContent>
        </Card>
        <br />
        <Card variant="outlined" sx={{ maxWidth: 800,border: '2px solid #92353e' }}>
          <CardHeader title="Technology Stack" />
          <CardContent>
            <List>
              <ListItem>
                <ListItemText primary="Languages" secondary="TypeScript" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Frameworks" secondary="React" />
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
        <Card sx={{ maxWidth: 800,border: '2px solid #03776C' }}>
          <CardHeader title="Application Flow" />
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardMedia
              component="img"
              image={require('./assets/movie-trivia-diagram.jpg')}
              alt="application diagram"
              sx={{ objectFit: 'contain' }}
            />
          </Collapse>
        </Card>
        <br />
        <Card sx={{ maxWidth: 800,border: '2px solid #92353e' }}>
          <CardHeader title="Testing" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
        <br />
        <Card sx={{ maxWidth: 800,border: '2px solid #03776C' }}>
          <CardHeader title="Reflections" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Start off with some kind of frontend framework instead of integrating it into the code later on.
                 
            </Typography>
          </CardContent>
        </Card>
        <br />
        <Card sx={{ maxWidth: 800,border: '2px solid #92353e' }}>
          <CardHeader title="Future Improvements" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              users create quizzes to share timer track user's track record
              community record board
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </div>
  )
}
