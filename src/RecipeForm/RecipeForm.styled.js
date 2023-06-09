import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 8px;
  border: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 10px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: ${props => props.theme.colors.accent};
`;
