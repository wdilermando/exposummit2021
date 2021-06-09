import React, { useRef } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import sendLead from '../utils/sendLead';

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
  const formRef2 = useRef(null);
  async function onSubmit({ email }) {
    const envia = await sendLead(email);
    if (envia.status === 200) {
      toast(`Enviado com sucesso!`);
      formRef2.current.reset();
    } else {
      toast(`Falha ao enviar, tente novamente mais tarde!`);
    }
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        email: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
        <Form noValidate ref={formRef2} onSubmit={handleSubmit}>
          <Form.Group controlId="validationFormikEmail">
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
          <ToastContainer />
        </Form>
      )}
    </Formik>
  );
}

export default LeadForm;
