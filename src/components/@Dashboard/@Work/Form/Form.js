/* eslint-disable camelcase */
import React, { forwardRef } from 'react';

import Form, { FormField } from '@/Form';
import Input, { LinkInput } from '@/Input'; 
import TextArea from '@/TextArea';
import Attachment from '@/Attachment';
import { DashboardWorkTypeSelect } from '@Dashboard/@Work/Select';

// import avatar from 'public/img/avatar.png';

// const fakeAttachment = { 
//   id: 1, 
//   src: avatar,
// };

const DashboardWorkForm = ({
  initialData: {
    title,
    content,
    price,
    days_amount,
    type, // Может быть null
    attachment, // См. описание в Attachment.js
    link = {},
  },
}, ref) => {
  // defaultValue можно установить только один раз. 
  // Значения null и undefined не считаются установленными.
  return (
    <Form ref={ref}>
      <FormField label="Заголовок:">
        <Input
          required
          name="title"
          defaultValue={title}
        />
      </FormField>

      <FormField label="Содержание:">
        <TextArea
          name="content"
          defaultValue={content}
        />
      </FormField>

      <FormField label="Тип работы:">
        <DashboardWorkTypeSelect
          initialValue={type && type.id}
        />
      </FormField>

      <FormField label="Цена:">
        <Input
          type="number"
          name="price"
          defaultValue={price}
        />
      </FormField>

      <FormField label="Дней на разрабработку:">
        <Input
          type="number"
          name="days_amount"
          defaultValue={days_amount}
        />
      </FormField>

      <FormField label="Ссылка:">
        <LinkInput initialValue={link} />
      </FormField>

      <FormField label="Изображение:">
        <Attachment initialValue={attachment} />
      </FormField>
    </Form>
  );
};

export default forwardRef(DashboardWorkForm);