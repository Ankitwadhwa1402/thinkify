import { Diamond, List } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import StartFreeButton from "../customButtons/StartFreeButton";
export default function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl"
        sx={{
          background: "white",
          color: 'black',
        }}>
        <Toolbar disableGutters>
          <Diamond sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Cloudhub
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
            >
              <Menu />
            </IconButton>
            <Menu
              id="menu-appbar"
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {["Product", "Home", "Shop", "Pages", "Integrations", "Developers"].map((page) => (
                <MenuItem
                  key={page}
                // onClick={handleCloseNavMenu}
                >
                  <Typography sx={{
                    textAlign: "center",
                    color: 'black',
                  }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Diamond sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Cloudhub
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {["Product", "Home", "Shop", "Pages", "Integrations", "Developers"].map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Stack
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Typography sx={{
              mr: 2,
            }}>Login</Typography>
            <StartFreeButton />
          </Stack>
          <Stack sx={{ display: { xs: "flex", md: "none" } }}>
            <List />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
