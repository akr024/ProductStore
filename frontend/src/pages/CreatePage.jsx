import { useColorModeValue } from '@/components/ui/color-mode'
import useProductStore from '../store/product'
import { Container, Heading, Box, VStack, Input, Button, Flex, Highlight } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Toaster, toaster } from "@/components/ui/toaster"

const CreatePage = () => {
  
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  })

  const {createProduct} = useProductStore();

  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct)
    if(!success){
      return toaster.create({
        description: message,
        type: "error",
        closable: true
      })
    }
    toaster.create({
      description: message,
      type: "success",
      closable: true
    })
  }
  
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"4xl"} textAlign={"center"} marginTop={5}>
          <Highlight query="New Product" styles={{ color: "teal.600" }}>
          Create a New Product
          </Highlight>
        
        </Heading>
      </VStack>
      <Flex textAlign="center" justify={"center"}>
        <Box w={800} bg={useColorModeValue("white", "gray.900")}
        p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack>
            <Input 
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              css={{ "--focus-color": "lime" }}
              variant="outline"
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />
            <Input 
              placeholder='Price'
              name='price'
              value={newProduct.price}
              variant="outline"
              marginTop={4}
              css={{ "--focus-color": "lime" }}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
            <Input 
              placeholder='Image'
              name='image'
              marginTop={4}
              value={newProduct.image}
              variant="outline"
              css={{ "--focus-color": "lime" }}
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            />
            <Button marginTop={4} onClick={handleAddProduct} width={200}>
              <b>Create</b>
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Container>
  )
}

export default CreatePage
