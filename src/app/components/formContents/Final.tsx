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

const Final: React.SFC<InjectedFormikProps<FormProps, FormValues>> = ({ isSubmitting }) => (
  <Wrapper>
    <button type="submit" disabled={isSubmitting}>
      おわり！
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

export default Final;
