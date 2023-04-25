import React, {useState} from "react";
import styled from "styled-components";
import HomeHeader from '../home/HomeHeader.jsx'


const Margin = styled.div`
    margin: 5px 1px 1px 1px;
    display : flex; justify-content : center;
`;
const Box =styled.div`
    display : flex; justify-content : center;
    width: 95%;
    height:90%;
    margin:50px;
    font-size:50px;
    //background-color:grey;
    display : flex; align-items : center; justify-contents : center;
`;
const Home = () => {

    return (
        <Margin>
            <HomeHeader/>
            <Box>HOME</Box>
        </Margin>
    );
}
export default Home;