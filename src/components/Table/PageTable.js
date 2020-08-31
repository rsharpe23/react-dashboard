import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Pagination, { usePagination } from '@/Pagination';
import Table from './Table';

const PageTable = ({ data, ...rest }) => {
  const entryCount = data.length;
  const [chunk, length, page, setPage] = usePagination(data, 10);

  const handlePaginationChange = useCallback(
    newPage => {
      if (newPage < 1) {
        throw new Error('Pagination page can`t be less than 1');
      }

      setPage(newPage);
    }, [setPage]
  );

  return (
    <>
      <Table {...rest} data={chunk.value} />

      <div className="d-flex justify-content-between">
        <strong className="mr-2">
          Показано {chunk.start}-{chunk.end} из {entryCount} записей
        </strong>

        <Pagination
          length={length}
          activePage={page}
          onChange={handlePaginationChange}
        />
      </div>
    </>
  );
};

PageTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PageTable;