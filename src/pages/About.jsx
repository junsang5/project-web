import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
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
    //background-color:grey;
    display : flex; align-items : center; justify-contents : center;
`;
const About = () => {
    return (
        <Margin>
            <HomeHeader/>
                <Box> {/*임시방편*/}
                    <video autoPlay muted loop width="90%">
                        <source src="Untitled.mp4" type="video/mp4"></source>
                    </video>
                </Box>
        </Margin>
    )
}
export default About;