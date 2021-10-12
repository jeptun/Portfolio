import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle>O mě & Do budoucna</SectionTitle>
      <SectionText>
        Jmenuji se Josef Dosoudil a rozhodl jsem se změnit svou kariéru směrem k
        front-end developer. Tvorbou audio i vizuálního obsahu se zabývám již
        několik let. Chci lidem pohát a zároveň využívat ("naučit se") moderních
        trendů dnešní doby. K tomu dopomáhej JavaScript!
      </SectionText>

      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.title}
                  <CarouselItemImg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M29.504 10.118C30.314 10.118 30.98 9.821 31.502 9.227C32.042 8.633 32.312 7.85 32.312 6.878V6.716C32.312 6.176 32.213 5.672 32.015 5.204C31.835 4.736 31.574 4.331 31.232 3.989C30.89 3.629 30.476 3.35 29.99 3.152C29.504 2.936 28.964 2.828 28.37 2.828C27.074 2.828 26.057 3.224 25.319 4.016C24.581 4.808 24.212 5.852 24.212 7.148V8.282H21.944V6.986C21.944 6.158 22.079 5.366 22.349 4.61C22.637 3.854 23.051 3.188 23.591 2.612C24.131 2.036 24.806 1.577 25.616 1.235C26.426 0.892999 27.362 0.721999 28.424 0.721999C29.324 0.721999 30.152 0.874999 30.908 1.181C31.664 1.487 32.312 1.91 32.852 2.45C33.392 2.972 33.815 3.584 34.121 4.286C34.427 4.97 34.58 5.699 34.58 6.473V6.959C34.58 7.661 34.454 8.336 34.202 8.984C33.968 9.614 33.635 10.163 33.203 10.631C32.771 11.099 32.258 11.477 31.664 11.765C31.088 12.035 30.458 12.17 29.774 12.17H29.396C28.892 12.17 28.64 12.44 28.64 12.98V14.978H26.48V12.44C26.48 11.756 26.696 11.198 27.128 10.766C27.56 10.334 28.118 10.118 28.802 10.118H29.504ZM25.697 18.488C25.697 17.966 25.877 17.525 26.237 17.165C26.615 16.787 27.065 16.598 27.587 16.598C28.109 16.598 28.55 16.787 28.91 17.165C29.288 17.525 29.477 17.966 29.477 18.488C29.477 19.01 29.288 19.46 28.91 19.838C28.55 20.198 28.109 20.378 27.587 20.378C27.065 20.378 26.615 20.198 26.237 19.838C25.877 19.46 25.697 19.01 25.697 18.488Z"
                        fill="#F85759"
                      />
                      <circle
                        cx="18.885"
                        cy="18.515"
                        r="1.885"
                        fill="#F85759"
                      />
                      <circle cx="9.885" cy="18.515" r="1.885" fill="#F85759" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="35" height="35" fill="white" />
                      </clipPath>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
