
import { Tooltip, Typography, Link } from '@mui/material'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Typography
        variant="body2"
        color="text.secondary"
        noWrap
        component="div"
        sx={{ color: 'white' }}
      >
        <Tooltip title="http://www.omdbapi.com/">
          <Link href="http://www.omdbapi.com/" underline="none" color="white">
            {' '}
            Quiz generated using data from OMDb API.&nbsp;
          </Link>
        </Tooltip>

        <Tooltip title="https://www.flaticon.com/free-icons/popcorn">
          <Link
            href="https://www.flaticon.com/free-icons/popcorn"
            underline="none"
            color="white"
          >
             &nbsp;Popcorn favicon created by Adib Sulthon, Flaticon.
          </Link>
        </Tooltip>
      </Typography>
    </div>
  )
}
