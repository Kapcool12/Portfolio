import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';


const HeroSection = () => {
    const imgStyle = {
        transition: 'transform 0.5s',
      };
    
      const handleMouseEnter = () => {
        // Apply scale-up effect on hover
        imgRef.current.style.transform = 'scale(1.05)';
      };
    
      const handleMouseLeave = () => {
        // Reset the transform on mouse leave
        imgRef.current.style.transform = 'scale(1)';
      };
    
      const imgRef = React.createRef();













    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
            <Img
              src={HeroImg}
              alt="hero-image"
              style={imgStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={imgRef}
            />
          </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection