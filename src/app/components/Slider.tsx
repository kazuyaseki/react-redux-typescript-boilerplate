import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

type DIRECTIONS = 'TOP' | 'BOTTOM' | 'RIGHT' | 'LEFT';

export namespace DIRECTIONS {
  export const top: DIRECTIONS = 'TOP';
  export const bottom: DIRECTIONS = 'BOTTOM';
  export const right: DIRECTIONS = 'RIGHT';
  export const left: DIRECTIONS = 'LEFT';
}

interface SlideProps {
  render: (next: () => void) => any;
  fadeInFrom: DIRECTIONS;
}

class Slider extends React.Component<{ slides: SlideProps[] }, { cursor: number }> {
  public init = 0; // localStorageでどこまで進んだか持っておいて変えたりする
  public state = {
    cursor: 0,
    fadeOutAnimations: {}
  };

  public next(index: number) {
    this.proceedToNextSlide();
  }

  public proceedToNextSlide() {
    this.setState((state) => ({ cursor: state.cursor + 1 }));
  }

  public getFadeInAnimationClass(fadesInFrom: DIRECTIONS) {
    switch (fadesInFrom) {
      case DIRECTIONS.right:
        return 'fadeInFromRight';
      case DIRECTIONS.left:
        return 'fadeInFromLeft';
      default:
        return '';
    }
  }

  public render() {
    return (
      <div>
        {this.props.slides.slice(this.init, this.state.cursor + 1).map((slide, index) => (
          <Slide fadesInFrom={slide.fadeInFrom}>{slide.render(() => this.next(index))}</Slide>
        ))}
      </div>
    );
  }
}

const fadeInAnimationCoordinate = (direction: DIRECTIONS) => {
  switch (direction) {
    case DIRECTIONS.left:
      return { x: -200, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

const Slide = styled<{ fadesInFrom: DIRECTIONS; children: any }, 'div'>('div')`
  position: absolute;
  ${(props: { fadesInFrom: DIRECTIONS }) => (props.fadesInFrom ? fadeIn : '')};
`;

const fadeInAnimation = (props: { x: number; y: number }) => keyframes`
  from {
    transform: translate3d(0, 0, 0);
  } 
  to {
    transform: translate3d(${props.x}px, ${props.y}px, 0);
  } 
`;

const fadeIn = css`
  margin-left: 200px;
  animation-name: ${(props: { fadesInFrom: DIRECTIONS }) =>
    fadeInAnimation(fadeInAnimationCoordinate(props.fadesInFrom))};
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

export default Slider;
