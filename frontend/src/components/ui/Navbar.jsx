import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"
import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return <Container maxW={"2000px"} px={4} bg={useColorModeValue("gray.900", "gray.900")}>
   
    <Flex 
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base: "column",
        sm: "row"
      }}
    >
      <Text 
        fontSize={{base:22, sm: 28}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"to-r"}
        gradientFrom={'red.500'}
        gradientTo={'orange.400'}
        bgClip={'text'}
        
      >
        <Link to='/' >Product Store 🛒</Link>
      </Text>
      <HStack spacing={5} justifyContent={"space-between"}>
        <Link to={'/create'}>
        <Button>
          <CiSquarePlus fontSize={20}/>
        </Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <IoMoon size='20'/> : <LuSun size='20' />}
        </Button>

      </HStack>
    </Flex>
  </Container>
}

export default Navbar