import React from 'react';
import Logo from '../images/logo.png';

export default function Footer() {
    // const footerSections = [
    //     {
    //         label: 'Company',
    //         subLabels: ['Business', 'Franchise', 'Partnership', 'Network'],
    //     },
    //     {
    //         label: 'About Us',
    //         subLabels: ['Blogs', 'Security', 'Careers'],
    //     },
    //     {
    //         label: 'Contact',
    //         subLabels: ['Contact Us', 'Privacy Policy', 'Terms & Conditions']
    //     }
    // ];
  return (
    <>
        <footer class="section__container footer__container">
            <span class="bg__blur"></span>
            <span class="bg__blur footer__blur"></span>
            <div class="footer__col" style={{ margin: '0 100px' }}>
                <div class="footer__logo"><img src={Logo} alt="logo" /></div>
                <p>
                Take the first step towards a healthier, stronger you with our
                unbeatable pricing plans. Let's sweat, achieve, and conquer together!
                </p>
                {/* <div class="footer__socials">
                    <a href="#"><i class="ri-facebook-fill"></i></a>
                    <a href="#"><i class="ri-instagram-line"></i></a>
                    <a href="#"><i class="ri-twitter-fill"></i></a>
                </div> */}
            </div>
            {/* {footerSections.map(objType => (
                <div class="footer__col">
                    <h4>{objType?.label}</h4>
                    {objType?.subLabels.map(sub => <a href="#">{sub}</a>)}
                </div>
            ))} */}
        </footer>

    </>
  )
}
