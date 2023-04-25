import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import About from '../pages/About.jsx';
const SideBarWrap = styled.div`
  z-index: 5;
  padding: 12px;
  background-color: #e7e4e1;
  height: 100%;
  width: 50%;
  right: -60%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;
const Sidebar = ({isClicked, setIsClicked}) =>{
    const outside = useRef();
    useEffect(() => {
        document.addEventListener('mousedown', handlerOutsie);
        return () => {
          document.removeEventListener('mousedown', handlerOutsie);
        };
      });
    const handlerOutsie = e => {
        if (!outside.current.contains(e.target)) { //현재 클릭한 곳이 메뉴 컴포넌트 안이 아니면 닫기
          if(isClicked) setIsClicked(false);
        }
    };
    return(
        <SideBarWrap className={isClicked? 'open': ''} ref={outside}>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/products">products</Link>
            </li>
        </SideBarWrap>
    )

}
export default Sidebar;