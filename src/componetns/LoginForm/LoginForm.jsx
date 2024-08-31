import { Formik, Field, Form } from 'formik';
import { MdLogin } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { fetchUserLogin } from '../../redux/auth/operation';

const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    dispatch(fetchUserLogin(values));
  };

  return (
    <div className="registartion-form">
      <h1 className="form-title">
        Login Form <MdLogin style={{ fontSize: '30px' }} />
      </h1>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
        <Form className="form">
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

export default LoginForm;
