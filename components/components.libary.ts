/* //
*--------------------------------------------------------------------- 
*                    I use CL as standard alias 🦆                                                
*       import * as CL from '../components/components.libary'             
*--------------------------------------------------------------------- 
*/

// Global Context 🌍
import { LangageContext as  LangageContextComponent} from "./context/langage_context.component";
import { ScreenSizeContext as  ScreenSizeContextComponent} from "./context/screen_size_context.component";
import { HamburgerToggleContext as HamburgerToggleContextComponent } from "./context/hamburger_toggle_context";

export const LangageContext = LangageContextComponent
export const ScreenSizeContext = ScreenSizeContextComponent
export const HamburgerToggleContext = HamburgerToggleContextComponent

// Template Components 🦕

import FooterComponent from "./footer/footer.component";
import NavbarComponent from "./navbar/navbar.component";

export const Footer = FooterComponent
export const Navbar = NavbarComponent

// Navbar Components 
import hamburgerComponent from "./navbar/hamburger/hamburger.component";
import NavLinksComponent from "./navbar/nav_links/nav_links.component";

export const HamburgerComponent = hamburgerComponent
export const NavLinks = NavLinksComponent


// Homepage Components 🏠

import HomeComponent from './home/home.component'

// Section 1️⃣ Components 
import Section_1Component from './home/section_1/section_1.component'
import WordTransformerComponent from './home/section_1/wordtransformer/wordtransformer.component'
export const Section_1 = Section_1Component
export const WordTransformer = WordTransformerComponent

import HeaderComponent from './home/section_1/header/header.component'
export const Header = HeaderComponent 

// Section 2️⃣ Components 
import Section_2Component from './home/section_2/section_2.component'
import Section_3Component from './home/section_3/section_3.component'

export const Home = HomeComponent


export const Section_2 = Section_2Component
export const Section_3 = Section_3Component

// Global Components 🌐

import ButtonComponent from "./button/button";
import LinkComponent from "./link/link.component";
import LogoComponent from "./logo/logo.component";




export const Button = ButtonComponent
export const Link = LinkComponent
export const Logo= LogoComponent

