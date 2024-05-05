import React from 'react';
import Class1 from '../images/class-1.jpg';
import Class2 from '../images/class-2.jpg';

export default function ProgramClass() {
    return (
        <section class="section__container class__container">
            <div class="class__image">
                <span class="bg__blur"></span>
                <img src={Class1} alt="class1" class="class__img-1" />
                <img src={Class2} alt="class2" class="class__img-2" />
            </div>
            <div class="class__content">
                <h2 class="section__header">THE CLASS YOU WILL GET HERE</h2>
                <p>
                    Led by our team of expert and motivational instructors, "The Class You
                    Will Get Here" is a high-energy, results-driven session that combines
                    a perfect blend of cardio, strength training, and functional
                    exercises. Each class is carefully curated to keep you engaged and
                    challenged, ensuring you never hit a plateau in your fitness
                    endeavors.
                </p>
                <button class="btn">Book A Class</button>
            </div>
        </section>
    );
}