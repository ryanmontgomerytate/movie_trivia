import styled from '@emotion/styled'
import { Tooltip, Typography } from '@mui/material'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Typography noWrap component="div" sx={{ color: 'white' }}>
        Built from
        <Tooltip title="http://www.omdbapi.com/">
          <FooterLink href="http://www.omdbapi.com/"> OMDb API</FooterLink>
        </Tooltip>
      </Typography>
    </div>
  )
}

const FooterLink = styled.a`
  text-decoration: none;
  color: white;
`
