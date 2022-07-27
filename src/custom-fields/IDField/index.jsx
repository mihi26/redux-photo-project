import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

function IDField(props) {
  const { field, form, type, label, code } = props;
  const { name, value, onBlur } = field;

  return (
    <div>
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Input name={name} {...field} readOnly={true} value={code} />
      </FormGroup>
    </div>
  );
}

export default IDField;
