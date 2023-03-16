import React from 'react';
import Ratings from 'react-ratings-declarative';

import {
  HeroContainer,
  HeroTitle,
  HeroSubTitle,
  HeroDetails,
  HeroTitleWrapper,
  RatingHeroWrapper,
  HeroWrapper,
} from './styles';

const Hero = ({
  children,
  details,
  direction,
  titleIcon,
  textDirection,
  subtitle,
  title,
  rating,
  className,
  ...props
}) => {
  const ActiveHeroWrapper = rating ? RatingHeroWrapper : HeroWrapper;
  return (
    <HeroContainer direction={direction} textDirection={textDirection} className={className} {...props}>
      <ActiveHeroWrapper>
        <HeroTitleWrapper>
          <HeroTitle>{title}</HeroTitle>
          {titleIcon}
        </HeroTitleWrapper>
        {rating && (
          <Ratings rating={rating}>
            <Ratings.Widget widgetRatedColor="yellow" widgetSpacing="0" widgetDimension="25px" />
            <Ratings.Widget widgetRatedColor="yellow" widgetSpacing="0" widgetDimension="25px" />
            <Ratings.Widget widgetRatedColor="yellow" widgetSpacing="0" widgetDimension="25px" />
            <Ratings.Widget widgetRatedColor="yellow" widgetSpacing="0" widgetDimension="25px" />
            <Ratings.Widget widgetRatedColor="yellow" widgetSpacing="0" widgetDimension="25px" />
          </Ratings>
        )}
        {children}
        <HeroSubTitle>{subtitle}</HeroSubTitle>
        {Boolean(details) && <HeroDetails>{details}</HeroDetails>}
      </ActiveHeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
