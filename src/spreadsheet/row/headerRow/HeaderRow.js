import Header from '../header/Header'
import { indexToColumnName } from '../../../utils'

import './HeaderRow.scss'

const HeaderRow = ({ columnsCount }) => {
  return (
    <div className="row">
      <Header />

      {[...Array(columnsCount)]
        .map((_, idx) => (
          <Header 
            key={`header-${idx}`} 
            title={indexToColumnName(idx)} 
          />)
      )}
    </div>
  )
}

export default HeaderRow
