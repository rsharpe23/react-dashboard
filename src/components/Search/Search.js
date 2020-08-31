import React from 'react';
import Input from '@/Input';

const Search = props => {
  return (
    <div className="Search">
      <Input {...props} type="search" placeholder="Поиск" />
    </div>
  );
};

export default Search;