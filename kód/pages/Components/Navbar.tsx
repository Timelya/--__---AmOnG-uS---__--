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
                        <NavIcon><Icon icon="material-symbols:home-outline" className="pl-2 text-4xl ..." onClick={() => router.push('/')}/></NavIcon>
                        <NavText>
                                Főoldal
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="Rendezvény létrehozás" onClick={() => router.push('/newevent')}>
                        <NavIcon>
                            <Icon icon="material-symbols:event-upcoming" className="pl-2 text-4xl ..." onClick={() => router.push('/newevent')}/>
                        </NavIcon>
                        <NavText>
                            Rendezvény létrehozás
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Profil szerkesztés" onClick={() => router.push('/EditProfilePage')}>
                        <NavIcon><Icon icon="material-symbols:edit-square-outline" className="pl-2 text-4xl ..." /></NavIcon>
                        <NavText>
                            Profil szerkesztés
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="Meghivók" onClick={() => router.push('/invites')}>
                        <NavIcon><Icon icon="icon-park-outline:accept-email" className="pl-2 text-4xl ..." onClick={() => router.push('/invites')}/></NavIcon>

                        <NavText>
                            Meghivók
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="Meghivó küldés" onClick={() => router.push('/inviteSend')}>
                        <NavIcon><Icon icon="material-symbols:send-rounded" className="pl-2 text-4xl ..." onClick={() => router.push('/inviteSend')}/></NavIcon>

                        <NavText>
                            Meghivó küldés
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="Rendezvény lista" onClick={() => router.push('/eventList')}>
                        <NavIcon><Icon icon="material-symbols:featured-play-list-outline" className="pl-2 text-4xl ..."  onClick={() => router.push('/eventList')}/></NavIcon>
                        <NavText>
                            Rendezvény lista
                        </NavText>
                    </NavItem>


                    <NavItem eventKey="Kijelentkezés">
                        <NavIcon onClick={async function () { await fetch("/api/logout", {method: "POST",headers: {"Content-Type": "application/json",},}); router.push("/register");}}><Icon icon="fluent-mdl2:leave-user" className="pl-2 text-4xl ..." /></NavIcon>
                        <NavText onClick={async function () { await fetch("/api/logout", {method: "POST",headers: {"Content-Type": "application/json",},}); router.push("/register");}}>
                            Kijelentkezés
                        </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
        </>
    )
}
export default Navbar;