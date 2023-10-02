import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';






const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
      <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "White", marginBottom: '20;', cursor: 'pointer' }}>
            {/*<DiCssdeck size="3rem" />*/} <Span style={{ fontFamily: 'Great Vibes, cursive', fontSize: '1.5rem', fontWeight: 'bold' }}>Kapil Yadav</Span>

          </a>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          {/*<NavLink href='#experience'>Experience</NavLink>*/}
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
       
  <a href={Bio.github} target="_blank">
  <div style={{ marginRight: '15px' }}>
      <img
        src="https://bitemycoin.com/wp-content/uploads/2018/06/GitHub-Logo.png" // Replace with the actual path to your GitHub logo image
        alt="GitHub"
        width="35"
        height="35"
      />
      <span></span>
    </div>
  </a>

  <a href={Bio.linkedin} target="_blank">
  <div style={{ marginRight: '15px' }}>

      <img
        src="https://www.freepnglogos.com/uploads/official-linkedin-logo----17.png" // Replace with the actual path to your LinkedIn logo image
        alt="LinkedIn"
        width="30"
        height="30"
      />
      <span></span>
    </div>
  </a>
</ButtonContainer>


        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}


export default Navbar