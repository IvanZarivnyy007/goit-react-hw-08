import { Formik, Field, Form } from 'formik';
// import './styles.css';

const RegistrationForm = () => {
  return (
    <div className="registartion-form">
      <h1 className="form-title">Registration Form</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
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
