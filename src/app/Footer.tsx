import { Tooltip, Typography, Link } from '@mui/material'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Typography
        variant="body2"
        color="text.secondary"
        component="div"
        sx={{ color: 'white' }}
      >
        <Tooltip title="http://www.omdbapi.com/">
          <Link href="http://www.omdbapi.com/" underline="none" color="white">
            Quiz generated using data from OMDb API.
          </Link>
        </Tooltip>
      </Typography>
    </div>
  )
}
