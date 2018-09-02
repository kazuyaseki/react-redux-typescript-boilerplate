import * as React from 'react';
import { InjectedFormikProps } from 'formik';
import styled from 'styled-components';

interface FormProps {
  onClick: () => void;
}

interface FormValues {
  login: string;
  password: string;
}

const First: React.SFC<InjectedFormikProps<FormProps, FormValues>> = ({
  onClick,
  handleChange,
  values,
  errors
}) => (
  <Wrapper>
    <Input
      id="login"
      placeholder="User name..."
      type="text"
      onChange={handleChange}
      value={values.login}
    />
    {errors.login && <div>{errors.login}</div>}
    <button
      type="button"
      onClick={() => {
        if (!errors.login) {
          onClick();
        }
      }}
    >
      Next
    </button>
  </Wrapper>
);

const Wrapper = styled.div`
  border: 1px solid #ddd;
  width: 300px;
  height: 300px;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
`;

const Input = styled.input`
  border-radius: 4px;
  height: 20px;
`;

export default First;
