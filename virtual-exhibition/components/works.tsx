import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button, useColorMode, useColorModeValue} from "@chakra-ui/react";
import deviceIcon from "../images/hello.jpg";
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
          mt={10}
          mb={10}
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
          borderRadius="4px"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B" }}
        >
          
          <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="sample1" smooth={true} >sample1</Scroll>
          </Text>
          <Text fontSize="sm" fontFamily="Rajdhani" color="#ECC94B">
            画像クリックで切り替え
          </Text>
        </Box>
        <Box
        boxShadow='dark-lg'
          p={10}
          bg="000"
          border="1px solid #ffffff"
          borderRadius="4px"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B" }}
        >

         
          <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="sample2" smooth={true} >sample2</Scroll>
          </Text>
          <Text fontSize="sm" fontFamily="Rajdhani" color="#ECC94B">
            横並び
          </Text>

        </Box>

        <Box
        boxShadow='dark-lg'
          p={10}
          bg="000"
          border="1px solid #ffffff"
          borderRadius="4px"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B" }}
        >

         
          <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="sample3" smooth={true} >sample3</Scroll>
          </Text>
          <Text fontSize="sm" fontFamily="Rajdhani" color="#ECC94B">
            縦並び
          </Text>

        </Box>
      </Grid>

      <Box  h={100}>
      </Box>

      <Divider borderColor="#FFFFFF" w={1000} mx={100}/>

      <Box id="sample1" textAlign="center" mt={100}>
          <Text fontFamily="Roboto" fontWeight="bold" fontSize={72}>
            sample1 ~画像クリックで切り替え~
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
          borderRadius="4px"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B"}}
        >

        <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="3" smooth={true} >撮影者A</Scroll>
          </Text>
        </Box>

        <Box
        boxShadow='dark-lg'
          p={10}
          border="1px solid #ffffff"
          borderRadius="4px"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B"}}
        >

        <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="4" smooth={true} >撮影者B</Scroll>
          </Text>
        </Box>
        </Grid>

        <Box h={100}></Box>

        <Box px={40} pb={20} id="3">
        <Text fontFamily="Roboto" fontWeight="bold" fontSize={50}>
            撮影者A
          </Text>
          <Text fontSize="2xl" fontFamily="Rajdhani">
          　＊ここに何か文章入れる？＊
          </Text>

          
         {/*} <box boxShadow='dark-lg'>
          <Image
            boxSize="90%"
            src={sample_2.src}/></box>
            <box mt={40}><LikeButton /></box>
            <box class="container">
    <box id="txt" class="uk-alert">
      取得した文字列を表示
    </box>
    <form id="frm">
      <fieldset class="uk-fieldset">
        <box class="uk-margin">
          <input id="txtbox" class="uk-input uk-form-success uk-form-width-medium" type="text"/>
        </box>
      </fieldset>
    </form>

    <box>
      <button class="uk-button uk-button-primary" onclick="GetEle()">テキスト取得1</button>
      <button class="uk-button uk-button-danger" onclick="GetForm()">テキスト取得2</button>
    </box>
    <Box mt={30}><textarea name="comment" cols="40" rows="8"></textarea></Box>
    
    </box>
        </Box>
    */}


        
        </Box>


      <Box  h={100}>
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
        <Text p={2} Align="right" fontFamily="Roboto" fontWeight="bold" fontSize={20}>
          撮影機材等
        </Text>

        <Box> 
        <Button Align="left">
        {'戻る'}
      </Button>
      　　　　
        <Button Align="right">
        {'進む'}
      </Button>
        </Box>
        
       
      
      </Box>
      <Box mt={40}><LikeButton /></Box>
        </Box>

     <Box mt={50}></Box>

      <Box px={40} pb={20} id="4">
        <Text fontFamily="Roboto" fontWeight="bold" fontSize={50}>
            撮影者B
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
          src={sample_4.src}/>
      
        <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={30}>
          Title
        </Text>
        <Text p={2} Align="right" fontFamily="Roboto" fontWeight="bold" fontSize={20}>
          撮影機材等
        </Text>

        <Box> 
        <Button Align="left">
        {'戻る'}
      </Button>
      　　　　
        <Button Align="right">
        {'進む'}
      </Button>
        </Box>
       
      
      </Box>
        </Box>

      <Box  h={100}>
      </Box>
      <Divider borderColor="#FFFFFF" w={1000} mx={100}/>

      <Link href="/page1">
        こちらをクリック
      </Link>

        
      </Box>
  );
}