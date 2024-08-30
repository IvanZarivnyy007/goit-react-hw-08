import { Formik, Field, Form } from 'formik';

const LoginForm = () => {
  return (
    <div className="registartion-form">
      <h1>Login Form</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
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

          <button type="submit" className="form-button">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
