/* eslint-disable camelcase */
import React, { forwardRef } from 'react';

import Form, { FormField } from '@/Form';
import Input from '@/Input';

const DashboardWorkTypeForm = ({ initialData: { name } }, ref) => {
  // defaultValue можно установить только один раз. 
  // Значения null и undefined не считаются установленными.
  return (
    <Form ref={ref}>
      <FormField label="Название:">
        <Input
          required
          name="name"
          defaultValue={name}
        />
      </FormField>
    </Form>
  );
};

export default forwardRef(DashboardWorkTypeForm);