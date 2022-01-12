import { Card, CardContent, CardHeader, Paper, Typography } from '@mui/material'
import React from 'react'

export const About: React.FC = () => {
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
          sx={{ maxWidth: 800, border: '2px solid #92353e' }}
        >
          <CardHeader title="Objective" />
          <CardContent>
            <Typography paragraph>
              Create an app that uses OMDb API to create a free choice movie quiz. OMDb API provides 
              {' '} movie related information through a RESTful web service. There was not a
              {' '} quiz website that allowed users to choose four movies to test their movie knowledge.
            </Typography>
          </CardContent>
        </Card>
        <br />
        <Card variant="outlined" sx={{ maxWidth: 800 }}>
          <CardHeader title="Technology Stack" />
          <CardContent>
          <Typography paragraph>Languages</Typography>
            <Typography variant="body2" color="text.secondary">
              TypeScript
            </Typography>
            <Typography paragraph>Frameworks</Typography>
            <Typography variant="body2" color="text.secondary">
              React
            </Typography>
            <Typography paragraph>Design</Typography>
            <Typography variant="body2" color="text.secondary">
              Material UI
            </Typography>
            <Typography paragraph>Tools</Typography>
            <Typography variant="body2" color="text.secondary">
              Amplify
              GitHub
              Visual Code Studio
              Trello
            </Typography>
          </CardContent>
        </Card>
        <br />
        <Card sx={{ maxWidth: 800 }}>
          <CardHeader title="System Flow" />
          <CardContent>
            <img src="src/assets/movie-trivia-diagram.jpg" />
          </CardContent>
        </Card>
        <br />
        <Card sx={{ maxWidth: 800 }}>
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
        <Card sx={{ maxWidth: 800 }}>
          <CardHeader title="Reflections" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 800 }}>
          <CardHeader title="Future Improvements" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              users
              create quizzes to share
              timer
              track user's track record 
              community record board
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </div>
  )
}
