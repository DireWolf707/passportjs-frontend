import React from "react"
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import { Stack } from "@mui/material"
import Navbar from "./components/Navbar"
import ThreeBars from "./components/loaders/ThreeBars"
import { Profile, Home, Error404 } from "./pages"
import { useLoginQuery } from "./store"

const LoggedInRoute = ({ user, redirectPath }) => {
  if (!user) return <Navigate to={redirectPath} replace />
  return <Outlet />
}

const App = () => {
  const { data: user, isFetching } = useLoginQuery()
  if (isFetching) return <ThreeBars />

  return (
    <Stack sx={{ minHeight: "100vh", width: "100vw", bgcolor: "brown" }}>
      <Navbar user={user?.data} />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        {/* LoggedIn Routes */}
        <Route element={<LoggedInRoute user={user?.data} redirectPath="/" />}>
          <Route path="/profile" element={<Profile user={user?.data} />} />
        </Route>
        {/* Unknown Routes (404) */}
        <Route path="*" element={<Error404 />} />
        {/* End */}
      </Routes>
    </Stack>
  )
}

export default App
