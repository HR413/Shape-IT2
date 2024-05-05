import React from 'react'

export default function Pricing(props) {
    const { extraProps } = props;
    const { pricingRef } = extraProps;

    const joinUsTypes = [
        {
            planType: 'Basic Plan',
            price: 'RS.1000',
            features: ['Smart workout plan', 'At home workouts'],
        },
        {
            planType: 'Weekly Plan',
            price: 'RS.2500',
            features: ['PRO Gyms', 'Smart workout plan', 'At home workouts','Meal Plans'],
        },
        {
            planType: 'Monthly Plan',
            price: 'RS.4000',
            features: ['ELITE Gyms & Classes', 'PRO Gyms', 'Smart workout plan', 'At home workouts', 'Personal Training', 'Meal Plans'],
        },
    ];
  return (
    <section class="section__container price__container" ref={pricingRef}>
        <h2 class="section__header">OUR PRICING PLAN</h2>
        <p class="section__subheader">Our pricing plan comes with various membership tiers, each tailored to cater to different preferences and fitness aspirations.</p>
        
        <div class="price__grid">
            {joinUsTypes.map(planObj => (
                <div class="price__card">
                    <div class="price__card__content">
                        <h4>{planObj?.planType}</h4>
                        <h3>{planObj?.price}</h3>
                        {planObj?.features?.map(feat => (
                            <p>
                                <i class="ri-checkbox-circle-line"></i>
                                {feat}
                            </p>
                        ))}
                    </div>
                    <button class="btn price__btn">Join Now</button>
                </div>
            ))}
        </div>
    </section>
  )
}
