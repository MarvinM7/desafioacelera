import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return (
    <Navbar expand="lg" className='navbar'>
      <Container>
        <Nav.Item className="font-text text-logo">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M50 27.2222H38.7653C37.6975 33.8365 31.9409 38.8889 24.9996 38.8889C18.0583 38.8889 12.3017 33.8365 11.2339 27.2222H1.22818e-08C1.12886 39.9884 11.8907 50 25 50C38.1093 50 48.8711 39.9884 50 27.2222ZM50 22.7778H38.7653C37.6975 16.1635 31.9409 11.1111 24.9996 11.1111C18.0583 11.1111 12.3017 16.1635 11.2339 22.7778H0C1.12886 10.0116 11.8907 0 25 0C38.1093 0 48.8711 10.0116 50 22.7778Z" fill="white"/>
            <ellipse cx="24.9996" cy="25" rx="9.48139" ry="9.44444" fill="white"/>
          </svg>
          &nbsp;
					Pokédex
				</Nav.Item>
				<Nav.Item>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="white"/>
            <path d="M29.2797 8.9775C27.8193 7.80598 25.8505 7.67683 24.2602 8.64772L10.6328 16.9798C9.68534 17.5586 9.07609 18.5803 9.00666 19.7149C8.93722 20.8495 9.41431 21.9449 10.2834 22.6437C11.4145 23.5523 12.9779 23.6169 14.174 22.8028L17.8071 20.3352C18.8397 19.6342 19.8879 19.934 20.5263 20.4482C21.1647 20.9625 21.7 21.938 21.2879 23.1372L19.8431 27.3459C19.3638 28.7411 19.8051 30.2908 20.9384 31.2018L21.0258 31.271C21.6216 31.7483 22.3451 31.9997 23.0798 31.9997C23.4202 31.9997 23.7629 31.9467 24.0967 31.836C25.1472 31.49 25.9625 30.6345 26.2783 29.546L26.8002 27.7449L30.319 15.6077L30.8118 13.9103C31.3382 12.0862 30.7379 10.149 29.2797 8.9775ZM29.8442 13.6128L29.3514 15.3102L25.8348 27.4474L25.3129 29.2485C25.0889 30.0187 24.5357 30.6022 23.7898 30.8466C23.0462 31.0911 22.2644 30.9481 21.6462 30.4523L21.5589 30.3831C20.7682 29.7466 20.4591 28.665 20.7951 27.6918L22.2398 23.4831C22.7259 22.0671 22.298 20.5543 21.149 19.6296C19.9999 18.7048 18.4723 18.6425 17.2539 19.4681L13.6208 21.9357C12.7853 22.503 11.6945 22.4569 10.9038 21.8227C10.2879 21.3269 9.96308 20.582 10.0124 19.7795C10.0616 18.9769 10.476 18.2805 11.148 17.8723L24.7731 9.5402C26.005 8.78839 27.5281 8.88756 28.6593 9.79387C29.7882 10.7025 30.2541 12.2015 29.8442 13.6128Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="19.9997" y1="7.99969" x2="19.9997" y2="31.999" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7FC344"/>
              <stop offset="1" stopColor="#00AE4D"/>
              </linearGradient>
            </defs>
          </svg>
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faSignOutAlt} className="color-white" />
				</Nav.Item>
      </Container>
  </Navbar>
  )
}

export default Header;