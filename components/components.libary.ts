/* //
*--------------------------------------------------------------------- 
*                    I use CL as standard alias 🦆                                                
*       import * as CL from '../components/components.libary'             
*--------------------------------------------------------------------- 
*/

// Template Components 🧱

import FooterComponent from "./footer/footer.component";
import NavbarComponent from "./navbar/navbar.component";

export const Footer = FooterComponent
export const Navbar = NavbarComponent

// Navbar Components 
import HamburgerComponent from "./navbar/hamburger/hamburger.component";

export const Hamburger = HamburgerComponent


// Homepage Components 🏠

import HomeComponent from './home/home.component'

import Section_1Component from './home/section_1/section_1.component'
import Section_2Component from './home/section_2/section_2.component'
import Section_3Component from './home/section_3/section_3.component'

export const Home = HomeComponent

export const Section_1 = Section_1Component
export const Section_2 = Section_2Component
export const Section_3 = Section_3Component

// Global Components 🌐

import ButtonComponent from "./button/button";
import LinkComponent from "./link/link.component";
import LogoComponent from "./logo/logo.component";


export const Button = ButtonComponent
export const Link = LinkComponent
export const Logo= LogoComponent




