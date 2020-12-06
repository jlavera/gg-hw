import Cell from './cell/Cell';
import Header from './header/Header';
import { indexToColumnName } from '../../utils';

import './Row.css'

const Row = ({ rowIdx, data, isHeader = false, columnsCount, updateCellFn }) => {
  return (
    <div className="row">
      <Header title={isHeader ? '-' : rowIdx + 1} />

      { isHeader ? (
        [...Array(columnsCount)]
          .map((_, idx) => (
            <Header 
              key={`header-${idx}`} 
              title={indexToColumnName(idx)} 
            />))
      ) : ([...Array(columnsCount)].map((_, idx) => 
            <Cell
              key={`cell-${rowIdx}-${idx}`}
              data={data}
              rowIdx={rowIdx}
              columnIdx={idx}
              updateCellFn={value => updateCellFn(rowIdx, idx)(value)}
            />
          ))
      }
    </div>
  );
}

export default Row
