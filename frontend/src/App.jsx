import { Box, Button } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "./components/ui/Navbar"
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"
import { Toaster, toaster } from "@/components/ui/toaster"

function App() {

  return (
    <>
    <Box minH={"100vh"} bg={useColorModeValue("white.400", "black.900")}>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
    </>
  )
}

export default App
