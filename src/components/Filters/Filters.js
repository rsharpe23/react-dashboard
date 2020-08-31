import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

// BUG: Такой вариант работает неправильно!
// const Filters = ({ onChange, children }) => {
//   const stateRef = useRef({});

//   const handleChange = useCallback(
//     (key, filterResult) => {
//       stateRef.current[key] = filterResult;
//       onChange && onChange(stateRef.current);
//     }, 
//     [onChange]
//   );

//   return (
//     <div className="Filters">
//       {children(handleChange)}
//     </div>
//   );
// };

const Filters = ({ setFilterState, render }) => {
  const onChange = newState => {
    setFilterState(prevState => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <div className="Filters">
      {render(onChange)}
    </div>
  );
};

Filters.propTypes = {
  setFilterState: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};

export default Filters;