import { Formik, Field, Form } from 'formik';

import { useDispatch } from 'react-redux';
import { fetchUserSignup } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    dispatch(fetchUserSignup(values));
  };

  return (
    <div className="registartion-form">
      <h1 className="form-title">Registration Form</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={onSubmit}
      >
        <Form className="form">
          <Field
            name="name"
            type="text"
            className="form-field"
            placeholder="Name"
          />
          <Field
            name="email"
            type="email"
            className="form-field"
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            className="form-field"
            placeholder="Password"
          />
          <button type="submit" className="form-button">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
