import React from 'react';
import * as Yup from 'yup';
import { Button, FormGroup } from 'reactstrap';
import { Formik, Form, FastField, Field } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';

function PhotoForm(props) {
  const { initialValues, isAdd } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),
    category: Yup.string().required('This field is required'),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: My house"
              type="text"
            />
            <Field name="category" component={SelectField} label="Category" type="select" />
            <Field
              name="imageURL"
              component={RandomPhotoField}
              label="Photo"
              category={values.category}
            />
            <FormGroup>
              <Button color="primary" type="submit">
                {isAdd ? 'Add to album' : 'Update your photo'}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
