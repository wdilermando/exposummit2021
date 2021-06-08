import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.light};
  border-radius: 4px;
  padding: 0.4em 0.8em;
  transition: background-color 0.3s linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: background-color 0.3s linear;
  }
`;

const schema = Yup.object().shape({
  email: Yup.string().min(3, 'Muito Curto!').required('Campo obrigatório'),
});

function LeadForm() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        email: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group a controlId="validationFormikEmail">
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Seu melhor email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email && touched.email}
              />
              <InputGroup.Append>
                <CustomButton type="submit" disabled={!isValid}>
                  ENVIAR
                </CustomButton>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

export default LeadForm;
