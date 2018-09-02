import * as React from 'react';
import { InjectedFormikProps } from 'formik';
import styled from 'styled-components';

interface FormProps {
  onClick?: () => void;
}

interface FormValues {
  login: string;
  password: string;
}

const Final: React.SFC<InjectedFormikProps<FormProps, FormValues>> = ({
  isSubmitting,
  handleChange,
  values
}) => (
  <Wrapper>
    <Input
      id="login"
      placeholder="User name..."
      type="text"
      onChange={handleChange}
      value={values.login}
    />
    <Input
      id="password"
      placeholder="Password..."
      type="text"
      onChange={handleChange}
      value={values.password}
    />
    <button type="submit" disabled={isSubmitting}>
      おわり！
    </button>
  </Wrapper>
);
const Input = styled.input`
  border-radius: 4px;
  height: 20px;
`;

const Wrapper = styled.div`
  border: 1px solid #ddd;
  width: 300px;
  height: 300px;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
`;

export default Final;
