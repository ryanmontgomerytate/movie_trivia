import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Typography noWrap component="div" sx={{ color: 'white' }}>
        Built from
        <FooterLink href="http://www.omdbapi.com/"> OMDb API</FooterLink>
      </Typography>
    </div>
  )
}

const FooterLink = styled.a`
  text-decoration: none;
  color: white;
`
