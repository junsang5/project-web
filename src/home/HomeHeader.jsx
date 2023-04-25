import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import styled from 'styled-components';
const ButtonPosition = styled.div`
    z-index:6;
    right:5%;
    position:fixed;
`;
const HeaderWrap = styled.div`
    height:5%;
    width:95%;
    position:fixed;
    z-index:1;
    background-color:grey;
    display : flex; justify-content : center; align-items:center;
`;
const Middle = styled.div`
    left:50%;
    z-index:6;
    position:fixed;

`;

const HomeHeader = () => {
    const [menuClicked, setMenuClicked]=useState(false)
    console.log(menuClicked)
    const setClick = () => {
        setMenuClicked(!menuClicked)
    }

    return(
        <HeaderWrap>
            <Link to="/"><button>HOME</button></Link>
            <ButtonPosition>
                <button onClick={setClick}>MENU</button>
            </ButtonPosition>
            <Sidebar isClicked={menuClicked} setIsClicked={setMenuClicked} setClick={setClick}/>
        </HeaderWrap>
    )
}
export default HomeHeader;