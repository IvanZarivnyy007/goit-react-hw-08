import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { addContact } from '../../redux/contact/operations';
import { useDispatch } from 'react-redux';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  function handleSubmit(values, actions) {
    const item = {
      id: Date.now(),
      ...values,
    };
    dispatch(addContact(item));

    actions.resetForm();
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form className="form">
        <div className="container">
          <div className="div-name">
            <label htmlFor={nameId}>Name</label>
            <Field className="input" type="text" name="name" id={nameId} />

            <ErrorMessage
              name="name"
              as="span"
              component="p"
              className="error-message"
            />
          </div>

          <div className="div-number">
            <label htmlFor={numberId}>Number</label>
            <Field
              className="input"
              type="number"
              name="number"
              id={numberId}
            />

            <ErrorMessage
              name="number"
              as="span"
              component="p"
              className="error-message"
            />
          </div>
          <button
            className="button-Add-contact"
            type="submit"
            onSubmit={handleSubmit}
          >
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
