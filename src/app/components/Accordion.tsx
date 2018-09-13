import * as React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

interface Prop {
  onClick: (value: any) => void;
  items: Array<{ title: string; subitems: Array<{ value: any; text: string }> }>;
}

interface State {
  openedIndexes: number[];
}

class Accordion extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);

    this.state = {
      openedIndexes: []
    };
  }

  toggle = (index: number) => {
    this.setState((state) => {
      if (state.openedIndexes.includes(index)) {
        return { openedIndexes: state.openedIndexes.filter((i) => i !== index) };
      } else {
        return { openedIndexes: state.openedIndexes.concat(index) };
      }
    });
  };

  render() {
    return (
      <StyledAccordion>
        {this.props.items.map((item, index) => {
          return (
            <li key={index}>
              <ItemTitle onClick={() => this.toggle(index)}>{item.title}</ItemTitle>
              <StyledSubItems>
                {item.subitems.map((subitem) => (
                  <SubItem
                    onClick={() => this.props.onClick(subitem.value)}
                    pose={this.state.openedIndexes.includes(index) ? 'visible' : 'hidden'}
                  >
                    {subitem.text}
                  </SubItem>
                ))}
              </StyledSubItems>
            </li>
          );
        })}
      </StyledAccordion>
    );
  }
}

const StyledAccordion = styled.ul`
  width: 100vw;
  background-color: #fff;
  list-style: none;
  padding: 0;
`;

const ItemTitle = styled.p`
  border: 1px solid #ccc;
  margin: 0;
`;

const poseProps = {
  visible: {
    originY: 0,
    maxHeight: '50px',
    transition: {
      ease: 'easeInOut',
      duration: 500
    }
  },
  hidden: {
    maxHeight: 0
  }
};

const StyledSubItems = styled.ul`
  list-style: none;
  padding: 0;
  overflow-y: hidden;
`;

const SubItem = posed.li(poseProps);

export default Accordion;
