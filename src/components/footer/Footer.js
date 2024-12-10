import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Stack>
      <Stack sx={{
        flexDirection:"row",
        justifyContent:'space-around',

      }}>
      <Stack>
        <img src={require("../../assets/mainLogo.png")} alt='logo' />
      </Stack>
        <Stack>
          <Typography>Product</Typography>
          <Typography>Features</Typography>
          <Typography>Pricing</Typography>
          <Typography>Changelog</Typography>
          <Typography>Support</Typography>
        </Stack>
        <Stack>
          <Typography>Legal</Typography>
          <Typography>Terms of Privacy</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Security</Typography>
        </Stack>
        <Stack>
          <Typography>Company</Typography>
          <Typography>Blog</Typography>
          <Typography>Contact</Typography>
        </Stack>
        <Stack>
          <Typography>Social</Typography>
          <Typography>Dribbble</Typography>
          <Typography>Behance</Typography>
          <Typography>Discord</Typography>
        </Stack>
      </Stack>
      <Stack><Typography>All rights reserved.© 2024 ThinkMetal</Typography></Stack>
    </Stack>
  )
}
