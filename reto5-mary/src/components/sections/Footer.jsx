import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "../../styles/footer-style";

const Footer = ({credits}) => {
	
return (
<Box>
      <h1 style={{ color: "blue", 
                   textAlign: "center", 
                   marginTop: "-70px" }}>
        
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>acerca de</Heading>
            <FooterLink href="#">nosotros</FooterLink>
            
          </Column>
          <Column>
            <Heading>servicios</Heading>
            <FooterLink href="#">desarrollador de pw</FooterLink>
            <FooterLink href="#">administrador de redes</FooterLink>
            
          </Column>
          <Column>
            <Heading>contacto</Heading>
            <FooterLink href="#">Peru</FooterLink>
            
          </Column>
		  <Column>
            <Heading>Redes Sociales</Heading>
            <FooterLink href="#">Instagram</FooterLink>
            
          </Column>
          
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;