import React from 'react';
import Logo from '../images/logo.png';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar(props) {
    const { extraProps } = props;
    const { programRef, serviceRef, pricingRef, reviewRef } = extraProps;
    const { loginWithRedirect,isAuthenticated,logout,user,} = useAuth0();
 

    const links = ['Home', 'Program', 'Service', 'Plans', 'Review'];

    const handleSmoothScrolling = (ref) => {
        ref.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <nav>
            <div class="nav__logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul class="nav__links">
                {links.map(link => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <li class="link"><a href="#" onClick={(e) => {
                        e.preventDefault();
                        if (link === 'Program') {
                            handleSmoothScrolling(programRef);
                        } else if (link === 'Service') {
                            handleSmoothScrolling(serviceRef);
                        }
                        else if (link === 'Plans') {
                            handleSmoothScrolling(pricingRef);
                        }
                        else if (link === 'Review') {
                            handleSmoothScrolling(reviewRef);
                        }
                    }}>{link}</a></li>
                ))}
            </ul> 
{
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <p>{user.name}</p>
        
      </div>
    )

};

            {
               isAuthenticated ?(
                    <li>
                    <button class="btn"onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                 Log Out
                    </button>
                    </li>
                    
                ) : (
                    <li>
                    <button class="btn"onClick={() => loginWithRedirect()}>Log In</button>;
                    </li>
                )
            }
            
        </nav>
    )
}
