import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@/Icon';
import { PageTable as Table } from '@/Table';

const DashboardTable = ({ data, cols, onAction }) => {
  const _cols = { ...cols, actions: 'Действия' };

  const handleActionLink = (e, action, item) => {
    e.preventDefault();
    onAction && onAction(action, item);
  };

  const _data = data.map(item => ({
    ...item,
    actions: (
      <>
        <a
          href="#"
          className="mr-2"
          onClick={e => handleActionLink(e, 'edit', item)}
        ><Icon glyph="edit" /></a>

        <a
          href="#"
          className="text-danger"
          onClick={e => handleActionLink(e, 'delete', item)}
        ><Icon glyph="trash-2" /></a>
      </>
    ),
  }));

  return <Table data={_data} cols={_cols} />;
};

DashboardTable.propTypes = {
  data: PropTypes.array.isRequired,
  cols: PropTypes.object.isRequired,
  onAction: PropTypes.func,
};

export default DashboardTable;