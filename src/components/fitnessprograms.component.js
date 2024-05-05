import React from 'react';

export default function FitnessProgram(props) {
    const { extraProps } = props;
    const { programRef } = extraProps;

    const fitnessProgramTypes = [
        {
            iconType: 'ri-boxing-fill',
            label: 'Strength',
            description: 'Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.'
        },
        {
            iconType: 'ri-heart-pulse-fill',
            label: 'Physical Fitness',
            description: 'It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.'
        },
        {
            iconType: 'ri-run-line',
            label: 'Fat Lose',
            description: "Through a combination of workout routines and expert guidance, we'll empower you to reach your goals."
        },
        {
            iconType: 'ri-shopping-basket-fill',
            label: 'Weight Gain',
            description: "Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner."
        }
    ];
    return (
        <section class="section__container explore__container" ref={programRef}>
            <div class="explore__header">
                <h2 class="section__header">EXPLORE OUR PROGRAM</h2>
                <div class="explore__nav">
                 {/* <span><i class="ri-arrow-left-line"></i></span> */}
                {/* <span><i class="ri-arrow-right-line"></i></span> */}
                </div>
            </div>
            <div class="explore__grid">
                {fitnessProgramTypes.map(objType => (
                    <div class="explore__card">
                        <span><i class={objType?.iconType}></i></span>
                        <h4>{objType?.label}</h4>
                        <p>{objType?.description}</p>
                        {/* <a href="#">Join Now <i class="ri-arrow-right-line"></i></a> */}
                    </div>
                ))}
            </div>
        </section>
    )
}
