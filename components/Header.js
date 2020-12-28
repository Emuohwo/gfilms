import React, { useState } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export const Header  = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <header>
      <Navbar color="light" expand="md" className="navbar-dark" id="navbar-style">
        <NavbarBrand href="/">GUZEE FILMS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto offset-md-2 offset-lg-6" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#event">Event</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </header>
    </div>
  );
}


// export const Header = () => (
//   <header className="site-navbar site-navbar-target" role="banner">
//     <div className="container">
//       <div className="row align-items-center position-relative">
//         <div className="col-3 ">
//           <div className="site-logo">
//             <Link href="/">
//               <a className="font-weight-bold">GUZEE FILMS</a>
//             </Link>
//           </div>
//         </div>

//         <div className="col-9  text-right">
//           <span className="d-inline-block d-lg-none">
//             <a
//               href="#"
//               className="text-white site-menu-toggle js-menu-toggle py-5 text-white"
//             >
//               <span className="icon-menu h3 text-white"></span>
//             </a>
//           </span>

//           <nav
//             className="site-navigation text-right ml-auto d-none d-lg-block"
//             role="navigation"
//           >
//             <ul className="site-menu main-menu js-clone-nav ml-auto ">
//               <li className="active">
//                 <Link href="/">
//                   <a className="nav-link">Home</a>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="about">
//                   <a className="nav-link">About</a>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="photography">
//                   <a className="nav-link">Portfolio</a>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="event">
//                   <a className="nav-link">Event</a>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="contact">
//                   <a className="nav-link">Contact</a>
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   </header>
// );
