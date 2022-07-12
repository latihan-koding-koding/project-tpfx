import Banner from '@components/Banner/Banner';
import { Button } from '@components/Button/Button';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';

import { Input } from '../register';

const initFormValue = { name: '', email: '', phonenumber: '' };

type InitialValuesT = typeof initFormValue;
type InputKeyType = keyof InitialValuesT;

const fieldInputs: Array<{
  type: string;
  label: string;
  mandatory: boolean;
  key: InputKeyType;
}> = [
  { type: 'text', label: 'name', key: 'name', mandatory: true },
  { type: 'email', label: 'email', key: 'email', mandatory: true },
  { type: 'tel', label: 'phone', key: 'phonenumber', mandatory: true }
];

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phonenumber: Yup.string()
    .matches(/(08|628)\d{10,14}/, 'Invalid Phone Format')
    .required('Required'),
  referralCode: Yup.string().min(2, 'Code Too Short!').max(10, 'Code Too Long!')
});

const EbookBanner = () => {
  const { values, handleChange, touched, errors, handleBlur, handleSubmit } = useFormik({
    initialValues: initFormValue,
    onSubmit: async (value) => {
      const body = JSON.stringify({
        name: value.name.trim(),
        email: value.email,
        phonenumber: value.phonenumber,
        source: '350427',
        status: '344210',
        utm_campaign: 'webebook'
      });
      const res = await fetch('https://click.tpfx.co.id/api/events/store_leads', {
        mode: 'cors',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) throw new Error('Network response was not OK');
      if (res.status === 200) {
        // setFormData(initFormValue);
        if (res.ok || res.status === 200) {
          router.push('/thank-you?content=ebook');
        }
      }
    },
    validationSchema: SignupSchema,
    validateOnMount: true
  });

  const router = useRouter();

  return (
    <Banner bgType="image" bgUrl="/images/banners/ebook.png" id="ebook-banner">
      <main className="mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 pb-16 md:pb-20 lg:max-w-lg lg:w-full">
        <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
          Ebook Trading
        </Text>
        <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
          Edukasi dasar untuk para pemula trading melalui Ebook trading TPFx
        </Text>
      </main>
      <div className="rounded-xl mx-4 px-5 pt-6 bg-white max-w-7xl mb-12 xl:mb-18 flex flex-wrap md:flex-row flex-col justify-start">
        {fieldInputs.map((input, i) => (
          <Input
            key={i}
            type="text"
            value={values[input.key]}
            onChangeText={handleChange(input.key)}
            label={input.label}
            onBlur={handleBlur(input.key)}
            errorText={(touched[input.key] && errors[input.key]) || ''}
            className={`flex-1 ${i ? 'md:mx-2' : ''}`}
          />
        ))}
        <Button className="!px-16 lg:w-fit w-full h-[48px] mb-4" onClick={() => handleSubmit()}>
          Download
        </Button>
      </div>
    </Banner>
  );
};

function Ebook() {
  const scrollToTop = () => {
    document.getElementById('ebook-banner')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Layout>
        <EbookBanner />
        <Section className="py-24">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="lg:order-first order-last max-w-2xl mx-auto lg:m-0 ">
              <Text fontWeight={700} fontSize={36} className="!text-center lg:!text-left mb-3">
                Tentang Ebook
              </Text>
              <Text fontSize={18} fontFamily="Inter" className="!text-center lg:!text-left">
                Sebagai pemula yang belum pernah melakukan trading, Ebook Trading ini akan menjadi
                referensi yang tepat sebagai edukasi dasar trading beserta analisa-analisa yang
                dapat diaplikasi pada perdagangan berjangka. Panduan Ebook yang dikhusus kan untuk
                para pemula sampai dengan trader expert
              </Text>
            </div>
            <div className="mx-auto">
              <Image src="/images/academy/ebook_1.png" width={576} height={328} alt="Ebook-img-1" />
            </div>
          </div>
        </Section>

        {/* <Section className="!pb-[89px] px-12">
          <Text
            fontWeight={600}
            fontSize={36}
            className="text-primary-gray-4 mb-12 pt-2"
            textAlign="center"
          >
            Daftar E-Book
          </Text>
          <div className="flex items-center justify-center flex-wrap">
            {props.ebooks?.map((data, i) => (
              <Card
                key={i}
                className="relative px-6 pb-8 pt-16 !bg-secondary-gray-7 m-11 cursor-pointer min-h-[338px]"
                style={{ maxWidth: 263 }}
                onClick={() =>
                  window.open('https://cms.tpfx.co.id/public' + data.file_path, '_blank')
                }
              >
                <Image
                  src={'https://cms.tpfx.co.id/public' + data.image}
                  width={360}
                  height={220}
                  alt="logo-benefit"
                />

                <Text fontWeight={600} fontSize={24} className="mt-3" textAlign="center">
                  {data.name}
                </Text>
              </Card>
            ))}
          </div>
        </Section> */}
        <Banner bgUrl="/images/banners/get_started.png">
          <div className="py-24 text-white">
            <Text fontWeight={600} fontSize={36} className="mb-4" textAlign="center" as="h1">
              Sudah siap trading sekarang?
            </Text>

            <Text fontWeight={400} fontFamily="Inter" fontSize={18} textAlign="center">
              Buka akun sekarang untuk ikut mulai dapatkan kesempatan income tambahan dari trading
            </Text>
            <div className="w-fit mt-16 mx-auto">
              <Button onClick={scrollToTop}>
                <Text fontFamily="Inter" fontWeight={600}>
                  {/* scroll to top */}
                  Buka Akun
                </Text>
              </Button>
            </div>
          </div>
        </Banner>
      </Layout>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   try {
//     const response = await getAllEbooks();
//     if (response.success) {
//       return { props: { ebooks: response.data } };
//     } else {
//       return { props: {} };
//     }
//   } catch (error) {
//     return { props: { ebooks: [] } };
//   }
// };
export default Ebook;
