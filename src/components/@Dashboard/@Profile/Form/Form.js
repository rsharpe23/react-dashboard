/* eslint-disable camelcase */
import React, { forwardRef } from 'react';

import Form, { FormField } from '@/Form';
import Input from '@/Input';
import TextArea from '@/TextArea';
import Attachment from '@/Attachment';

const DashboardProfileForm = ({
  initialData: {
    primary_text,
    secondary_text,
    github,
    vk,
    email,
    skype,
    attachment,
  },
}, ref) => {
  // defaultValue можно установить только один раз. 
  // Значения null и undefined не считаются установленными.
  return (
    <Form ref={ref}>
      <FormField label="Вступительный текст:">
        <TextArea 
          name="primary_text" 
          defaultValue={primary_text} 
        />
      </FormField>

      <FormField label="Дополнительный текст:">
        <TextArea 
          name="secondary_text" 
          defaultValue={secondary_text} 
        />
      </FormField>

      <FormField label="Профиль GitHub:">
        <Input 
          type="url"
          name="github" 
          defaultValue={github}
        />
      </FormField>

      <FormField label="Профиль VK:">
        <Input 
          type="url"
          name="vk" 
          defaultValue={vk}
        />
      </FormField>

      <FormField label="E-mail адрес:">
        <Input 
          type="email"
          name="email" 
          defaultValue={email}
        />
      </FormField>

      <FormField label="Skype:">
        <Input 
          name="skype" 
          defaultValue={skype}
        />
      </FormField>

      <FormField label="Аватарка:">
        <Attachment initialValue={attachment} />
      </FormField>
    </Form>
  );
};

export default forwardRef(DashboardProfileForm);