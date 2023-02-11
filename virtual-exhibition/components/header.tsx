import { Box, Text, Divider, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link, Button, useColorMode, useColorModeValue, bgGradient } from "@chakra-ui/react";
import deviceIcon from "../images/2.jpg";
import { useDisclosure, Input } from '@chakra-ui/react'
import {Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton} from '@chakra-ui/react'
import React, { useRef } from 'react';


export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const color = useColorModeValue("#D9E5FF", "#A16EFF")

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    
    <Box
      bg={color}
      opacity="0.9"
      color="#ffffff"
      h={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      
      
       <Box display="flex" justifyContent="center">
        <Text fontSize="180%">myPBL</Text>
        </Box>

      <Divider w="8%" borderColor="#ECC94B" opacity="0.5" ml="2%"/>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} ml="3%" mr="1%">
      <Link href="./">
        <Text
          fontSize="150%"
          fontFamily="Rajdhani"
          transition="all .0.2s"
          _hover={{ textDecoration: "underline 1px" }}
        >
          Home
        </Text>
        </Link>
        <Link href="./page1">
        <Text
          fontSize="150%"
          fontFamily="Rajdhani"
          transition="all .0.2s"
          _hover={{ textDecoration: "underline 1px" }}
        >
          Registration
        </Text>
        </Link>
        
        
      </Grid>
      <Divider
        h="40%"
        orientation="vertical"
        borderColor="ffffff"
        opacity="1"
        mr="4%"
      />

      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? '😜' : '😉'}
      </Button>


      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Text
                fontSize="2.5%">
                Photographer
              </Text></DrawerHeader>


            <DrawerBody>
            <Text
            fontSize="1.5xl"
            fontFamily="Rajdhani"
            transition="all .0.2s"
            _hover={{ textDecoration: "underline 1px" }}
            >
            <Link href="./page2">
            galaxy
          </Link>
            </Text>

            <Text
            fontSize="1.5xl"
            fontFamily="Rajdhani"
            transition="all .0.2s"
            _hover={{ textDecoration: "underline 1px" }}
            >
            Name_2
            </Text>

            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>

  
            {/* <DrawerBody>
              <Input placeholder='Type here...' />
              </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
    </Box>  
  );
};