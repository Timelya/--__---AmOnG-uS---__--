import Head from 'next/head'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Icon } from '@iconify/react';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { DarkThemeToggle } from 'flowbite-react';

function Navbar() 
{
  return (
    <>
    <nav className="bg-slate-600">
      <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}>
    <SideNav.Toggle />
    <SideNav.Nav  defaultSelected="home">
        <NavItem eventKey="Rendezvény létrehozás">
        <NavIcon><Icon icon="material-symbols:event-upcoming" className="pl-2 text-4xl ..."/></NavIcon>
            <NavText>
               Rendezvény létrehozás
            </NavText>
        </NavItem>
        

        <NavItem eventKey="Profil szerkesztés">
        <NavIcon><Icon icon="material-symbols:edit-square-outline" className="pl-2 text-4xl ..."/></NavIcon>
            <NavText>
                Profil szerkesztés
            </NavText>
        </NavItem>
        
        <NavItem eventKey="Meghivók">
        <NavIcon><Icon icon="icon-park-outline:accept-email" className="pl-2 text-4xl ..." /></NavIcon>
            <NavText>
                Meghivók
            </NavText>
        </NavItem>

        <NavItem eventKey="Rendezvény lista">
        <NavIcon><Icon icon="material-symbols:featured-play-list-outline" className="pl-2 text-4xl ..."/></NavIcon>
            <NavText>
            Rendezvény lista
            </NavText>
        </NavItem>

        <NavItem eventKey="Kijelentkezés">
        <NavIcon><Icon icon="fluent-mdl2:leave-user" className="pl-2 text-4xl ..."/></NavIcon>
            <NavText>
            Kijelentkezés
            </NavText>
        </NavItem>

    </SideNav.Nav>
</SideNav>
</nav>
    </>
  )
}
export default Navbar;