import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from './components/link/Link';
import UserAvatar from './components/UserAvatar'
// TODO: import components

const NAME = "Curious George";

// Base page formatting... feel free to edit!
const StyledApp = styled.div`
  background: linear-gradient(135deg, #f26ba6, #64b5ee);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: 'Poppins', sans-serif;
  gap: 16px;
`

const StyledH2 = styled.h2`
margin:0px
`
// ways to inject CSS

function App() {
  // TODO: fetch links from API and store them to display on our page!
  const [links, setLinks] = useState([])
  // setLinks is associated with links variable (updates links)

  function fetchLinks() {
    fetch("http://localhost:8000/api/links")
    .then(data => data.json())
    .then(result => {
      setLinks(result)
    })

    // uses react hook setLinks()
  }

  useEffect(
    () => {
      console.log({links});
      fetchLinks();
    },
    []
    // if you put links in [] then this function would execute whenever links changes
    // empty brackets only executes once when page reloads
  )
  // links is the variable that's changing

  // TODO: finish returning
  return (
    <StyledApp>
      <StyledH2>{NAME}'s XLinks</StyledH2>
      <UserAvatar alt="Curious George" src="https://www.looper.com/img/gallery/this-is-who-narrates-curious-george/l-intro-1622604401.jpg"/>
      {links.map(link => (
        <Link url={link.url} title={link.display_name}/>
      ))}
    </StyledApp>
  );
}

export default App;
