import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/layout";
import { Center, Square, Circle } from '@chakra-ui/react'
import { Image } from "@chakra-ui/image";
import { Button, useColorMode, useColorModeValue} from "@chakra-ui/react";
import deviceIcon from "../images/2.jpg";
import { Link as Scroll } from "react-scroll";
//import { useHistory } from "react-router-dom";
import React, { useState } from "react";
//import ReactDOM from "react-dom";
//import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
//new Luminous(document.querySelector(".zoom_normal"));
//import  "../styles/luminous-basic.min.css"
import Link from "next/link";
import sample_1 from "../images/1.jpg"
import sample_2 from "../images/2.jpg"
import sample_3 from "../images/demo/IMG_6776.jpg"
import sample_4 from "../images/demo/IMG_6778.jpg"
import sample_5 from "../images/demo/IMG_6777.jpg"
import sample_6 from "../images/demo/IMG_6766.jpg"
import Head from 'next/head'

export const TopWorks = () => {

  
    var pics_src = new Array([sample_1.src, sample_2.src, sample_3.src], [sample_4.src, sample_5.src, sample_6.src]);
    var num = 0
 
    

    const color = useColorModeValue("#8EB8FF", "#000033")
    const controls = useAnimation()
    function LikeButton() {
      const [count, setCount] = useState(0);
      const handleClick = () => {
        setCount(count + 1);
      };
      return (
        <span className="likeButton" onClick={handleClick}>
          ♥ {count}
        </span>
      );
      function GetEle() {

        let msg = txtbox.value;
        txt.textContent = msg;
    
      }
    
      function GetForm() {
    
        let msg = document.forms.frm.txtbox.value;
        txt.textContent = msg;
    
      }
    }

    return (
      
    <Box bg={color} opacity="0.8" color="#ffffff" pt={28} pb={28}>
      <Box textAlign="center">
        <Box mt={10}>
          <Text fontFamily="Roboto" fontWeight="bold" fontSize={72}>
            Photo Gallery
          </Text>
        </Box>

        <Box display="flex" justifyContent="center">
            <Image 
              borderRadius="full"
              boxSize="200px"
              src={deviceIcon.src} />
        </Box>
            
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="3%"
          mb="3%"
        >
     
        </Box>
      </Box> 


      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
        boxShadow='dark-lg'
          p={10}
          bg="000"
          border="1px solid #ffffff"
          borderRadius="40%"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B" }}
        >
          
          <Text fontSize="160%" fontFamily="Rajdhani">
          <Scroll to="sample1" smooth={true} >sample1</Scroll>
          </Text>
          <Text fontSize="sm" fontFamily="Rajdhani" color="#ECC94B">
            name_1
          </Text>
        </Box>
        <Box
        boxShadow='dark-lg'
          p={10}
          bg="000"
          border="1px solid #ffffff"
          borderRadius="40%"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B" }}
        >

         
          <Text fontSize="160%" fontFamily="Rajdhani">
          <Scroll to="sample2" smooth={true} >sample2</Scroll>
          </Text>
          <Text fontSize="sm" fontFamily="Rajdhani" color="#ECC94B">
            name_2
          </Text>

        </Box>

        <Box
        boxShadow='dark-lg'
          p={10}
          bg="000"
          border="1px solid #ffffff"
          borderRadius="40%"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B" }}
        >

         
          <Text fontSize="160%" fontFamily="Rajdhani">
          <Scroll to="sample3" smooth={true} >sample3</Scroll>
          </Text>
          <Text fontSize="sm" fontFamily="Rajdhani" color="#ECC94B">
            name_3
          </Text>

        </Box>
      </Grid>

      <Box  h={100}>
      </Box>


      <Box id="sample1" textAlign="center" mt={100}>
          <Text fontFamily="Roboto" fontWeight="bold" fontSize={72}>
            sample1
          </Text>
        </Box>

        <Grid
        templateColumns="repeat(3, 1fr)"
        gap={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
        boxShadow='dark-lg'
          p={10}
          border="1px solid #ffffff"
          borderRadius="0%"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B"}}
        >

        <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="3" smooth={true} >A</Scroll>
          </Text>
        </Box>

        <Box
        boxShadow='dark-lg'
          p={10}
          border="1px solid #ffffff"
          borderRadius="0%"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B"}}
        >

        <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="4" smooth={true} >B</Scroll>
          </Text>
        </Box>
        </Grid>

        <Box h={100}></Box>

        <Box px={40} pb={20} id="3">
        <Text fontFamily="Roboto" fontWeight="bold" fontSize={50}>
            A
          </Text>
          <Text fontSize="2xl" fontFamily="Rajdhani">
          　＊comments＊
          </Text>        
        </Box>

      <Box display="flex" justifyContent="center" Align="center">
        
        <Box boxSize="80%" boxShadow='dark-lg'>
        
        <Image
          id='mypic'
          boxSize="100%"
          src={sample_2.src}/>
      
        <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={30}>
          Title
        </Text>

        <Box> 
        
        
        
       <Box><LikeButton /></Box>
        </Box></Box>
      
      </Box>
      

     <Box mt={50}></Box>

      <Box px={20} pb={20} id="4">
        <Text fontFamily="Roboto" fontWeight="bold" fontSize={50}>
            Galaxy
          </Text>
          <Text fontSize="2xl" fontFamily="Rajdhani">
          　Hello      
          </Text>
        </Box>

        <Box display="flex" justifyContent="center" Align="center">
        
        <Box boxSize="80%" boxShadow='dark-lg'>
        
        <Image
          id='mypic2'
          boxSize="100%"
          src={sample_6.src}/>
      
        <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={30}>
          Title
        </Text>
        <Box><LikeButton /></Box>

        <Box> 
        
        </Box>
       
      
      </Box>
        </Box>

      <Box  h={100}>
      </Box>
      <Divider borderColor="#FFFFFF" w="90%" mx={100}/>

      <Center>
      <Button mt={4}>
      <Link href="/page1">
        upload page
      </Link></Button></Center>

        
      </Box>
  );
}