/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { useLinkTargetApi } from 'src/hooks';
import { DataSelect } from '@/Select';
import Input from './Input';

const LinkInput = ({ 
  initialValue: { text, href, target_id },
  name = 'link', 
}) => {
  const targetApi = useLinkTargetApi();
  const applyName = itemName => `${name}[${itemName}]`;

  return (
    <div className="form-row">
      <div className="col">
        <Input
          name={applyName('text')}
          defaultValue={text}
          placeholder="Текст"
        />
      </div>

      <div className="col">
        <Input
          type="url"
          name={applyName('href')}
          defaultValue={href}
          placeholder="URL"
        />
      </div>

      <div className="col">
        <DataSelect 
          api={targetApi} 
          initialValue={target_id}
          name={applyName('target_id')}
        />
      </div>
    </div>
  );
};

LinkInput.propTypes = {
  initialValue: PropTypes.object,
  name: PropTypes.string,
};

export default LinkInput;