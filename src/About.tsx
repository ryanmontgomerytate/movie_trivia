import { Paper } from "@mui/material";
import React from "react";

export const About: React.FC = () => {

    return <div>
        <Paper
              elevation={18}
              sx={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '50px',
                p: 2,
                maxWidth: 500,
                flexGrow: 1,
              }}>
            <h2>About</h2>
            <p>I made this app to showcase my skills with React and using APIs'</p>

              </Paper>
    </div>

}