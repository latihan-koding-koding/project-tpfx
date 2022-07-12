import { Button } from '@components/Button/Button';
import Text from '@components/Text/Text';
import { useFormik } from 'formik';
import Layout from 'layouts';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import Section from '../components/Section/Section';

// TODO: Separate file component
const InputContainer = styled.div`
  .input {
    min-width: 280px
    transition: border 0.2s ease-in-out;
    box-shadow: none !important;
  }

  .input:focus+.label,
  .input:active+.label,
  .input.filled+.label {
    color: #CC8A00;
    font-size: .75rem;
    top: -0.4rem;
    transition: all 0.2s ease-out;
  }

  .label {
    left: 0;
    top: 0.3rem;
    transition: all 0.2s ease-out;
  }
`;

interface InputInterface
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onChangeText?: (value: string) => void;
  label: string;
  errorText?: string;
}
// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputInterface>(
  // eslint-disable-next-line react/prop-types
  ({ value, type, onChangeText, label, errorText, className, ...restProps }, ref) => {
    return (
      <InputContainer className={className}>
        <div className="mb-4 relative">
          <input
            aria-autocomplete="none"
            {...{ ...restProps, value, type, ref }}
            className={`input border ${
              !errorText ? 'border-gray-200' : 'border-red-700'
            } appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-primary-gold-1 !outline-none  active:border-primary-gold-1 ${
              value ? 'filled' : ''
            }`}
            onChange={(e) => onChangeText && onChangeText(e.target.value)}
          />
          <label
            htmlFor="email"
            className="label absolute mb-0 pt-4 pl-3 text-gray-400 text-base -mt-2 cursor-text capitalize"
          >
            {label}
          </label>
          {!!errorText && <Text className="text-red-700 ml-2">{errorText}</Text>}
        </div>
      </InputContainer>
    );
  }
);

const initialValues = { firstName: '', lastName: '', email: '', phone: '', referralCode: '' };

type InitialValuesT = typeof initialValues;
type InputKeyType = keyof InitialValuesT;

const fieldInputs: Array<{
  type: string;
  label: string;
  mandatory: boolean;
  key: InputKeyType;
}> = [
  { type: 'text', label: 'first name', key: 'firstName', mandatory: true },
  { type: 'text', label: 'last name', key: 'lastName', mandatory: false },
  { type: 'email', label: 'email', key: 'email', mandatory: true },
  { type: 'tel', label: 'phone', key: 'phone', mandatory: true },
  { type: 'text', label: 'referral code', key: 'referralCode', mandatory: false }
];

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .matches(/(08|628)\d{8,11}/, 'Invalid Phone Format')
    .required('Required'),
  referralCode: Yup.string().min(2, 'Code Too Short!').max(10, 'Code Too Long!')
});

const postRegist = (body: string) =>
  fetch('https://click.tpfx.co.id/api/events/store_leads', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  });

export const RegisterSection = () => {
  const router = useRouter();

  const { values, handleChange, touched, errors, handleBlur, handleSubmit } = useFormik({
    initialValues,
    onSubmit: async (value) => {
      const body = JSON.stringify({
        name: value.firstName.trim() + ' ' + value.lastName.trim(),
        email: value.email,
        phonenumber: value.phone,
        referral_code: value.referralCode,
        source: '338921',
        status: '344210',
        utm_campaign: 'webleads'
      });

      const res = await postRegist(body);
      if (res.ok || res.status === 200) {
        router.push('/thank-you');
      }
    },
    validationSchema: SignupSchema,
    validateOnMount: true
  });

  return (
    <div className="flex flex-1" style={{ backgroundImage: "url('images/section_1.jpg')" }}>
      <div className="flex flex-1 py-7" style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
        <Section>
          <div className="max-w-md m-auto flex flex-col items-center justify-center px-2  py-6">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <Text fontSize={24} textAlign="center" className="mb-4">
                Register Account
              </Text>
              {fieldInputs.map((input, i) => (
                <Input
                  key={i}
                  type="text"
                  value={values[input.key]}
                  onChangeText={handleChange(input.key)}
                  label={input.label}
                  onBlur={handleBlur(input.key)}
                  errorText={(touched[input.key] && errors[input.key]) || ''}
                />
              ))}
              <div className="text-center text-sm text-grey-dark my-5">
                By signing up, you agree to the{' '}
                <Link href="/privacy-policy">
                  <a className="no-underline border-b border-grey-dark text-grey-dark">
                    Terms of Service
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="/privacy-policy">
                  <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                    Privacy Policy
                  </a>
                </Link>
              </div>
              <Button
                className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                disabled={!!Object.keys(errors).length}
                onClick={() => handleSubmit()}
              >
                Register
              </Button>
            </div>

            <div className="text-white mt-6">
              Already have an account?{' '}
              <a
                className="no-underline text-blue hover:text-primary-gold-1"
                href="https://clientarea.tpfx.co.id/login"
                target={'_blank'}
                rel="noreferrer"
              >
                Log in
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

const Register: NextPage = () => {
  return (
    <Layout>
      <div className="h-full flex">
        <RegisterSection />
      </div>
    </Layout>
  );
};

export default Register;
