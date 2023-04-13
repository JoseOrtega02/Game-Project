import React, { useState } from 'react'
import { SideBar } from '../styledComponents/StyledSideBar'
import { HeaderDiv } from '../styledComponents/StyledHeader'
import { Button } from '../styledComponents/StyledButton'
function Header() {
  const [active,setActive] = useState<Boolean>(false)
  return (
    <HeaderDiv>
      {active === true?(<SideBar>
        <a href="#">publishers</a>
        <a href="">platforms</a>
        <a href="">genres</a>
        <a href="">Games</a>
        <a href="">creators</a>
        <a href="">developers</a>
        <a href="">stores</a>
      </SideBar>):(<></>)}
      
      <Button onClick={()=>{setActive(!active)}}>{active === true?(<i className="fi fi-br-cross"></i>):(<i className="fi fi-br-menu-burger"></i>)}</Button>
    </HeaderDiv>
  )
}

export default Header