import Head from 'next/head'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


function Navbar() {
    const router = useRouter();
    return (
        <>
            <SideNav>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">

                <NavItem eventKey="Főoldal" onClick={() => router.push('/')}>
                        <NavIcon><Icon icon="material-symbols:home-outline" className="pl-2 text-4xl ..." /></NavIcon>
                        <NavText>
                                Főoldal
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="Rendezvény létrehozás" onClick={() => router.push('/newevent')}>
                        <NavIcon>
                            <Icon icon="material-symbols:event-upcoming" className="pl-2 text-4xl ..." />
                        </NavIcon>
                        <NavText>
                            Rendezvény létrehozás
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Profil szerkesztés">
                        <NavIcon><Icon icon="material-symbols:edit-square-outline" className="pl-2 text-4xl ..." /></NavIcon>
                        <NavText>
                            Profil szerkesztés
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="Meghivók" onClick={() => router.push('/invites')}>
                        <NavIcon><Icon icon="icon-park-outline:accept-email" className="pl-2 text-4xl ..." /></NavIcon>
                        <NavText>
                            Meghivók
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="Rendezvény lista" onClick={() => router.push('/eventList')}>
                        <NavIcon><Icon icon="material-symbols:featured-play-list-outline" className="pl-2 text-4xl ..." /></NavIcon>
                        <NavText>
                            Rendezvény lista
                        </NavText>
                    </NavItem>


                    <NavItem eventKey="Kijelentkezés" onClick={() => router.push('/newevent')}>
                        <NavIcon><Icon icon="fluent-mdl2:leave-user" className="pl-2 text-4xl ..." /></NavIcon>
                        <NavText>
                            <button name="logout-btn" onClick={async function () { 
                                await fetch("/api/logout", {method: "POST",headers: {
								"Content-Type": "application/json",},});
						router.push("/register");
					}}
				>
					Kijelentkezés
				</button>
                        </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
        </>
    )
}
export default Navbar;