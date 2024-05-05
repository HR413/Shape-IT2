import React from 'react';
import Logo from '../images/logo.png';

export default function Navbar(props) {
    const { extraProps } = props;
    const { programRef, serviceRef, pricingRef, reviewRef } = extraProps;

    const links = ['Home', 'Program', 'Service', 'Plans', 'Review'];

    const handleSmoothScrolling = (ref) => {
        ref.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <nav>
            <div class="nav__logo">
                <a href="#"><img src={Logo} alt="logo" /></a>
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
            <button class="btn">Join Now</button>
        </nav>
    )
}
