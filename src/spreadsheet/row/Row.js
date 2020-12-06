import Cell from './cell/Cell'
import Header from './header/Header'

import './Row.css'

const Row = ({ rowIdx, data, columnsCount, updateCellFn }) => {
  return (
    <div className="row">
      <Header title={ rowIdx + 1 } />

      { [...Array(columnsCount)].map((_, idx) => 
        <Cell
          key={`cell-${rowIdx}-${idx}`}
          data={data}
          rowIdx={rowIdx}
          columnIdx={idx}
          updateCellFn={value => updateCellFn(rowIdx, idx)(value)}
        />
      )}
    </div>
  )
}

export default Row
