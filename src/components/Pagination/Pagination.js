import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ length, activePage = 1, onChange }) => {
  if (!length || length <= 1) {
    return null;
  }

  const handleLinkClick = (e, newPage) => {
    e.preventDefault();
    onChange && onChange(newPage);
  };

  const renderItem = index => {
    let itemClassName = 'page-item';

    const prevBtnIndex = 0;
    const nextBtnIndex = length + 1;

    const value = index === prevBtnIndex
      ? <>&laquo;</> : index === nextBtnIndex
        ? <>&raquo;</> : index;

    value === activePage && (itemClassName += ' active');

    return (
      <li key={index} className={itemClassName}>
        <a
          href="#"
          className="page-link"
          onClick={e => {
            const newPage = index > prevBtnIndex && index < nextBtnIndex
              ? value : index === prevBtnIndex && activePage > 1
                ? activePage - 1 : index === nextBtnIndex && activePage < length
                  ? activePage + 1 : activePage;

            handleLinkClick(e, newPage);
          }}
        >{value}</a>
      </li>
    );
  };

  return (
    <ul className="pagination Pagination">
      {Array.from({ length: length + 2 }, (_, i) => renderItem(i))}
    </ul>
  );
};

Pagination.propTypes = {
  length: PropTypes.number,
  activePage: PropTypes.number,
};

export default Pagination;