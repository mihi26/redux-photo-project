import RandomPhoto from 'components/RandomPhoto';
import React from 'react';
import { FormGroup, Label } from 'reactstrap';

function RandomPhotoField(props) {
  const { field, form, label, category } = props;
  const { name, value, onBlur } = field;
  const handleImageURLChange = (newImageURL) => {
    form.setFieldValue(name, newImageURL);
  };
  return (
    <div>
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <RandomPhoto
          name={name}
          imageURL={value}
          onImageURLChange={handleImageURLChange}
          onRandomButtonBlur={onBlur}
          set={category}
        />
      </FormGroup>
    </div>
  );
}

export default RandomPhotoField;
