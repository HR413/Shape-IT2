import React from 'react';
import JoinUsImage from '../images/join.jpg';

export default function JoinUs(props) {
    const { extraProps } = props;
    const { serviceRef } = extraProps;

    const joinUsTypes = [
        {
            iconType: 'ri-user-star-fill',
            label: 'Personal Trainer',
            description: 'Unlock your potential with our expert Personal Trainers.',
        },
        {
            iconType: 'ri-vidicon-fill',
            label: 'Practice Sessions',
            description: 'Elevate your fitness with practice sessions.',
        },
        {
            iconType: 'ri-building-line',
            label: 'Good Management',
            description: 'Supportive management, for your fitness success.',
        },
    ];
    return (
        <section class="section__container join__container" ref={serviceRef}>
            <h2 class="section__header">WHY JOIN US ?</h2>
            <p class="section__subheader">
                Our diverse membership base creates a friendly and supportive
                atmosphere, where you can make friends and stay motivated.
            </p>
            <div class="join__image">
                <img src={JoinUsImage} alt="Join" />
                <div class="join__grid">
                    {joinUsTypes.map(objType => (
                        <div class="join__card">
                            <span><i class={objType.iconType}></i></span>
                            <div class="join__card__content">
                            <h4>{objType?.label}</h4>
                            <p>{objType?.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
