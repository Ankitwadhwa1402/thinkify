import { Stack, Typography } from '@mui/material'
import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <Stack>
      <Stack sx={{
        flexDirection: "row",
        justifyContent: 'space-around',
        fontSize: '14px',
        color: '#525252'
      }}>
        <Stack>
          <img src={require("../../assets/mainLogo.png")} alt='logo' />
        </Stack>
        <Stack class="footerItem">
          <Typography class="blackText">Product</Typography>
          <Typography>Features</Typography>
          <Typography>Pricing</Typography>
          <Typography>Changelog</Typography>
          <Typography>Support</Typography>
        </Stack>
        <Stack class="footerItem">
          <Typography class="blackText itemHeading">Legal</Typography>
          <Typography>Terms of Privacy</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Security</Typography>
        </Stack>
        <Stack class="footerItem">
          <Typography class="blackText itemHeading">Company</Typography>
          <Typography>Blog</Typography>
          <Typography>Contact</Typography>
        </Stack>
        <Stack class="footerItem">
          <Typography class="blackText itemHeading">Social</Typography>
          <Typography>Dribbble</Typography>
          <Typography>Behance</Typography>
          <Typography>Discord</Typography>
        </Stack>
      </Stack>
      <Stack class="itemHeading greyText"><Typography sx={{p:4}}>All rights reserved.© 2024 ThinkMetal</Typography></Stack>
    </Stack>
  )
}
