import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import * as Yup from 'yup';

const ContactForm = ({ onAdd }) => {
  const handleSubmit = ({ name, number }, options) => {
    onAdd({
      id: nanoid(),
      name,
      number,
    });
    options.resetForm();
  };

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <Formik
      validationSchema={orderSchema}
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      <Form className={s.form}>
        <label>
          <span>Name</span>
          <Field name="name" />
          <ErrorMessage name="name" component="span" className={s.error} />
        </label>
        <label>
          <span>Number</span>
          <Field name="number" />
          <ErrorMessage name="number" component="span" className={s.error} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
