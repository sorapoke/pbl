import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button, useColorMode, useColorModeValue, Link } from "@chakra-ui/react";
import deviceIcon from "../images/hello.jpg";
import React, { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { Header } from "./header"
import Head from 'next/head'
import sample_1 from "../images/1.jpg"
import sample_2 from "../images/2.jpg"
import sample_3 from "../images/demo/IMG_6776.jpg"
import sample_4 from "../images/demo/IMG_6778.jpg"
import sample_5 from "../images/demo/IMG_6777.jpg"
import sample_6 from "../images/demo/IMG_6766.jpg"
import { Center, Square, Circle } from '@chakra-ui/react'


export const TopWorks = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const color = useColorModeValue("#8EB8FF", "#000033")
    const [text, setText] = useState("")
    const [pass, setText2] = useState("")

    

    return (
    <Box bg={color} opacity="0.8" color="#ffffff" pt={0.01}>
      <Head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.css" rel="stylesheet"/>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js" type="text/javascript"></script>
      
     </Head>
      <Box textAlign="center">
        <Box mt={10}>
          <Text fontFamily="Roboto" fontWeight="bold" fontSize={60}>
            完成形
          </Text>
        </Box>
        <Box></Box>
        
        
        <Box mt={5} color="black"><input value={text} onChange={(event) => setText(event.target.value)}/></Box>
        <Button mt={4}>検索</Button>
        
        <Box fontSize={45}>
        {text}さんのPhoto Gallery
        <dd></dd>
        </Box>


        <Box>
        <Center h='100%'>
        <Box boxSize="70%">
        <div> 
        <a href={sample_1.src} data-lightbox="index" data-title="No.1"><img className="thumbnail" src={sample_1.src}/></a>
        <Box h={30}></Box>
        <a href={sample_2.src} data-lightbox="index" data-title="No.2"><img className="thumbnail" src={sample_2.src}/></a>
        <Box h={30}></Box>
        <a href={sample_6.src} data-lightbox="index" data-title="No.3"><img className="demo2" src={sample_6.src}/></a>
        </div>
        </Box></Center></Box>

        <Box pt={30}></Box>

        <Box></Box>
        
        
      </Box>
      </Box>
  );
}