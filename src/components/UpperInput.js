import React from 'react';
import { withFormik } from 'formik';

const UpperInput = ({ field, form, ...props }) => {
  const onChange = event => {
    const { name, value } = event.target;
    form.setFieldValue(name, value.toUpperCase());
  };

  return <input {...field} {...props} onChange={onChange} />;
};

export default withFormik(UpperInput);
