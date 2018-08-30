import * as React from 'react';
import styled, { css, StyledFunction } from 'styled-components';

export namespace TodoTextInput {
  export interface Props {
    text?: string;
    placeholder?: string;
    newTodo?: boolean;
    editing?: boolean;
    onSave: (text: string) => void;
  }

  export interface State {
    text: string;
  }
}

export class TodoTextInput extends React.Component<TodoTextInput.Props, TodoTextInput.State> {
  constructor(props: TodoTextInput.Props, context?: any) {
    super(props, context);
    this.state = { text: this.props.text || '' };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
    const text = event.currentTarget.value.trim();
    if (event.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ text: event.target.value });
  }

  public handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const text = event.target.value.trim();
    if (!this.props.newTodo) {
      this.props.onSave(text);
    }
  }

  public render() {
    return (
      <Input
        type="text"
        editing={this.props.editing}
        autoFocus={true}
        placeholder={this.props.placeholder}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export interface InputProps {
  editing?: boolean;
}

const input: StyledFunction<InputProps & React.HTMLProps<HTMLInputElement>> = styled.input;

const Input = input`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  ${(props) =>
    props.editing &&
    css`
      padding: 16px 16px 16px 60px;
      border: none;
      background: rgba(0, 0, 0, 0.003);
      box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    `}
`;
