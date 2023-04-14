import React from "react"
import { Stack, Box, Button, Typography, IconButton, useMediaQuery } from "@mui/material"
import { navHeight, navLinks } from "../utils/constant"
import { Link } from "react-router-dom"
import { useLogoutMutation } from "../store"
import MenuIcon from "@mui/icons-material/Menu"

const Navbar = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.only("xs"))
  const [logout, { isLoading }] = useLogoutMutation()

  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          position: "fixed",
          zIndex: 1,
          height: navHeight,
          width: "100%",
          bgcolor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(3px)",
          px: {
            xs: "12px",
            sm: "24px",
          },
        }}
      >
        <Box component="img" src="/favicon.svg" height="65px" />

        {isSmall ? (
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Stack flexDirection="row" gap={2}>
            {navLinks.map((link, idx) => (
              <Stack key={idx} flexDirection="row" alignItems="center" gap={0.3}>
                {/* <link.Icon /> */}
                <Link to={link.href}>
                  <Typography fontFamily="Righteous" fontSize="14px">
                    {link.title}
                  </Typography>
                </Link>
              </Stack>
            ))}

            <Button variant="contained" color="primary" href={`${import.meta.env.VITE_SERVER_URL}/user/login/google`}>
              LOGIN
            </Button>

            <Button variant="contained" color="error" onClick={logout} disabled={isLoading}>
              LOGOUT
            </Button>
          </Stack>
        )}
      </Stack>
      <Box height={navHeight} />
    </>
  )
}

export default Navbar
