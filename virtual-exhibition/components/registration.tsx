import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button, useColorMode, useColorModeValue, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import Head from 'next/head'
import { Center, Square, Circle } from '@chakra-ui/react'

export const TopWorks = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const color = useColorModeValue("#8EB8FF", "#000033")
    const [text, setText] = useState("")
    const [pass, setText2] = useState("")
    const [iname, setText3] = useState("")

    const [image, setImage] = useState("");
    const [createObjectURL, setCreateObjectURL] = useState("");

    const uploadToClient = (event) => {
      if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      setImage(file);
      setCreateObjectURL(URL.createObjectURL(file));
      }
    };
    
    const [json, setJson] = useState("")
    const gotoJson = () => {
      const myObj = {
        name: 'Skip',
        age: 2,
        favoriteFood: 'Steak'
      };
      
      const myobjstr= JSON.stringify(myObj);
      setJson(myobjstr);
    }

    const returnJson = () => {
      if(json != ""){
        const readJson = JSON.parse(json);
        return readJson;
      }
      
    }


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
            Member registration
          </Text>
        </Box>

        <Box h={5}></Box>
        <Box pt={5}></Box>
        ID
        <Box color="black"><input value={text} onChange={(event) => setText(event.target.value)}/></Box>
        <Box pt={5}></Box>
        Password
        <Box color="black"><input value={pass} onChange={(event) => setText2(event.target.value)}/></Box>
       
        <Box pt={5}></Box>
        Image name
        <Box color="black"><input value={iname} onChange={(event) => setText3(event.target.value)}/></Box>
        <Box pt={5}></Box>
     
      <div className="mb-4">upload image</div><Center><Box boxSize="80%">
      
      <label htmlFor="file-input" className="bg-primary-900 text-white-900 dark:bg-dark-900 flex justify-center items-center px-4 py-2 rounded mb-6 w-full" >      
      <input id="file-input" className="hidden" type="file" accept="image/*" name="myImage" onChange={uploadToClient} />
      
      </label></Box></Center>
      <Box h={5}></Box>
      <Box fontSize={45}>
        ID = {text}
        </Box>
      <Center><Box boxSize="80%">
        <a href={createObjectURL} data-lightbox="index" className="resizeimage" data-title={iname}> <img src={createObjectURL} title={iname} alt="画像情報が読み込めませんでした"/> </a>
      </Box></Center>

      <Button mt={3} onClick={gotoJson}>登録</Button>

      <Box h={30}> </Box>

      <Box>{returnJson()}</Box>
      
      <Box h={30}> </Box>
      
      </Box>
      </Box>
  );
}