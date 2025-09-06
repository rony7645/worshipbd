"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowDown, ArrowUp } from "lucide-react";

export default function TestimonialsCarousel() {
  // all slides data
  const testimonials = [
    {
      img: "/img/testimonial/p.png",
      name: "Pantheonlegacy",
      country: "United States",
      flag: "/img/testimonial/us.png",
      text: "Excellent Job on my website. I love the results of my Wordpress website with elementor plugin. I would definitely use his gig again in the near future",
    },
    {
      img: "/img/testimonial/n.png",
      name: "nayely433",
      country: "United States",
      flag: "/img/testimonial/us.png",
      text: "Mizanur Rahman truly impressed with his impeccable work on our website development project, showcasing professionalism and exceeding expectations with remarkable attention to detail. Working with him was a breeze, thanks to his QUICK responsiveness and excellent understanding of our needs. Highly recommend his services! 👏",
    },
    {
      img: "/img/testimonial/t.png",
      name: "Triplespark",
      country: "United States",
      flag: "/img/testimonial/us.png",
      text: "Mizanur Rahman is a top-notch website developer whose professionalism truly EXCEEDED expectations. His work was exceptional, with great communication and FAST delivery, making collaboration effortless. Extremely polite and responsive, you'll feel confident hiring him again! 👍",
    },
    {
      img: "/img/testimonial/p.png",
      name: "Pjason",
      country: "Canada",
      flag: "/img/testimonial/canada.png",
      text: "I have completed multiple gigs with this seller. Always professional, always fast and always great work. I recommend this seller wholeheartedly. Outstanding customer service before during and after. Try him; you won't be disappointed!",
    },
    {
      img: "/img/testimonial/a.png",
      name: "agency270",
      country: "United States",
      flag: "/img/testimonial/us.png",
      text: "Mizanur Rahman truly IMPRESSED in every aspect of our website development project! His professionalism and incredible attention to detail exceeded my expectations, and he consistently went above and beyond with quick responsiveness and outstanding cooperation. I couldn't be happier with his work—HIGHLY RECOMMEND! 😊",
    },
    {
      img: "/img/testimonial/d.png",
      name: "dineshchand24",
      country: "Canada",
      flag: "/img/testimonial/canada.png",
      text: "Mizanur Rahman nailed the LOGO DESIGN with absolute professionalism, perfectly aligning with my brand and delivering stunning visuals. He went ABOVE AND BEYOND to ensure everything was on point and delivered right on time. Highly recommend! 👌",
    },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: ".array-prev",
          nextEl: ".array-next",
        }}
        className="testimonial-slider-3"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="testimonial-card-items">
              <div className="client-info">
                <div className="client-img">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="client-content">
                  <h5>{item.name}</h5>
                  <span>
                    <Image
                      src={item.flag}
                      alt={item.country}
                      width={20}
                      height={20}
                    />{" "}
                    {item.country}
                  </span>
                </div>
              </div>
              <p>{item.text}</p>
              <div className="icon">
                <Image
                  src="/img/testimonial/icon.png"
                  alt="icon"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Nav */}
      <div className="array-button">
        <button className="array-prev">
          <ArrowUp />
        </button>
        <button className="array-next">
          <ArrowDown />
        </button>
      </div>
    </>
  );
}
