import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik, setIn } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import subscriptionLead from '../utils/subscriptionLead';
import sendMail from '../utils/sendMail';

const list1 = [
  { id: 1, name: 'IMÓVEL PARA RESIDIR' },
  { id: 2, name: 'IMÓVEL PARA ALUGAR' },
  { id: 3, name: 'IMÓVEL PARA LAZER OU SEGUNDA MORADIA' },
  { id: 4, name: 'CONHECER LANÇAMENTOS IMOBILIÁRIOS' },
  { id: 5, name: 'CONHECER OPORTUNIDADES EM IMÓVEIS FORA DO PAÍS' },
];

const CustomFormInput = styled(Form.Control)`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 25px;
`;

const CustomButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  margin-bottom: 0.5em;
  margin-top: 1em;
  color: ${({ theme }) => theme.colors.light};
  border-radius: 25px;
  padding: 0.4em 0.8em;
  transition: background-color 0.3s linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: background-color 0.3s linear;
  }
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
`;

const schema = Yup.object().shape({
  city: Yup.string().min(3, 'Muito Curto!').required('Campo obrigatório'),
  email: Yup.string().min(3, 'Muito Curto!').required('Campo obrigatório'),
  fullName: Yup.string().min(3, 'Muito Curto!').required('Campo obrigatório'),
  phone: Yup.string().min(7, 'Muito Curto!').required('Campo obrigatório'),
});

function SubscriptionForm() {
  const formRef = useRef(null);
  const [investir, setInvestir] = useState(false);
  const [interesse, setInteresse] = useState(false);

  async function onSubmit(values, { resetForm }) {
    const userLead = {
      nome_contato: values.fullName,
      email: values.email,
      telefone: values.phone,
      cidade: values.city,
      interesses: values.checked.toString(),
      outros: values?.others,
    };

    const envia = await subscriptionLead(userLead);
    if (envia.status === 200) {
      resetForm();
      formRef.current.reset();
      setInvestir(false);
      setInteresse(false);
      await sendMail(userLead.nome_contato, userLead.email);

      toast(
        `Parabéns! Você está garantido no Expoimóvel Summit 2021. Confira em sua caixa de e-mail a confirmação de sua inscrição.`
      );
    } else {
      resetForm();
      formRef.current.reset();
      setInvestir(false);
      setInteresse(false);
      toast(`Falha na inscrição, tente novamente mais tarde!`);
    }
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        checked: [],
        city: '',
        email: '',
        fullName: '',
        others: '',
        phone: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} ref={formRef}>
          <Form.Group controlId="formGroupName">
            <CustomFormInput
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              placeholder="NOME COMPLETO"
              isInvalid={!!errors.fullName && touched.fullName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <CustomFormInput
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="E-MAIL"
              isInvalid={!!errors.email && touched.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupPhone">
            <CustomFormInput
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="TELEFONE"
              isInvalid={!!errors.phone && touched.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupCity">
            <CustomFormInput
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
              placeholder="CIDADE"
              isInvalid={!!errors.city && touched.city}
            />
            <Form.Control.Feedback type="invalid">
              {errors.city}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupInterest">
            <CustomFormInput
              className="inputLabel"
              type="text"
              value="    ESTOU INTERESSADO EM:"
              readOnly
              plaintext
            />
          </Form.Group>
          <Form.Check
            custom
            type="checkbox"
            id="check-id-1"
            className="customCheck"
            onChange={handleChange}
            name="checked"
            value="APRENDER MAIS SOBRE INVESTIMENTOS"
            label="APRENDER MAIS SOBRE INVESTIMENTOS"
          />
          <Form.Check
            custom
            type="checkbox"
            id="check-id-2"
            onChange={handleChange}
            name="checked"
            value="INVESTIR EM IMÓVEIS"
            label="INVESTIR EM IMÓVEIS"
            checked={investir}
            onClick={() => setInvestir(!investir)}
          />

          {investir && (
            <>
              {list1.map(item => (
                <Form.Check
                  custom
                  type="checkbox"
                  key={`check-id-list-${item.id}`}
                  id={`check-id-list-${item.id}`}
                  onChange={handleChange}
                  name="checked"
                  value={item.name}
                  label={item.name}
                />
              ))}
              <Form.Check
                custom
                type="checkbox"
                id="check-id-3"
                onChange={handleChange}
                name="checked"
                value="OUTROS INTERESSES"
                label="OUTROS INTERESSES"
                checked={interesse}
                onClick={() => setInteresse(!interesse)}
              />
              {interesse && (
                <Form.Group controlId="formGroupOthers">
                  <CustomFormInput
                    type="text"
                    name="others"
                    value={values.others}
                    onChange={handleChange}
                    placeholder="QUAIS OUTROS ASSUNTOS VOCÊ TEM INTERESSE?"
                  />
                </Form.Group>
              )}
            </>
          )}

          <WrapperButton>
            <CustomButton type="submit">ENVIAR</CustomButton>
          </WrapperButton>
          <ToastContainer />
        </Form>
      )}
    </Formik>
  );
}

export default SubscriptionForm;
