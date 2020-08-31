import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const Table = ({ data, cols }) => {
  // [{ id: 1, name: 'a', date: '2020' }, { id: 2, name: 'b', date: '2019' }] ->
  // [[id, name, date], [[1, 'a', '2020'], [2, 'b', '2020']]]
  const [keys, values] = useMemo(() => {
    const _keys = new Set();
    const _values = [];

    data.forEach(item => {
      const value = [];

      Object.entries(item).forEach(([k, v]) => {
        _keys.add(cols[k] || k);
        value.push(v);
      });

      _values.push(value);
    });

    return [Array.from(_keys), _values];
  }, [cols, data]);

  return (
    <table className="table table-bordered Table">
      <thead>
        <tr>
          {keys.map((value, index) => (
            <th key={index}>{value}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {values.map(value => (
          <tr key={value[0]}>
            {value.map((v, i) => <td key={i}>{v}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  cols: PropTypes.object.isRequired,
};

export default Table;