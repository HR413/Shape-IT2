import React from 'react';
import Member from '../images/member.jpg';

export default function Review(props) {
    const { extraProps } = props;
    const { reviewRef } = extraProps;
  return (
    <section class="review" ref={reviewRef}>
      <div class="section__container review__container">
        <span><i class="ri-double-quotes-r"></i></span>
        <div class="review__content">
          <h4>MEMBER REVIEW</h4>
          <p>
            What truly sets this gym apart is their expert team of trainers. The
            trainers are knowledgeable, approachable, and genuinely invested in
            helping members achieve their fitness goals. They take the time to
            understand individual needs and create personalized workout plans,
            ensuring maximum results and safety.
          </p>
          <div class="review__rating">
            <span><i class="ri-star-fill"></i></span>
            <span><i class="ri-star-fill"></i></span>
            <span><i class="ri-star-fill"></i></span>
            <span><i class="ri-star-fill"></i></span>
            <span><i class="ri-star-half-fill"></i></span>
          </div>
          <div class="review__footer">
            <div class="review__member">
              <img src={Member} alt="member" />
              <div class="review__member__details">
                <h4>Ishan Sandhu</h4>
                <p>Influencer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
