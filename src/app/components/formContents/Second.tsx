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

const Second: React.SFC<InjectedFormikProps<FormProps, FormValues>> = ({
  onClick,
  handleChange,
  values,
  touched,
  errors,
  isSubmitting
}) => (
  <Wrapper>
    <Input
      id="password"
      placeholder="Password..."
      type="text"
      onChange={handleChange}
      value={values.password}
    />
    {touched.password && errors.password && <div>{errors.password}</div>}
    <button onClick={onClick} disabled={isSubmitting}>
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
`;

const Input = styled.input`
  border-radius: 4px;
  height: 20px;
`;

export default Second;
