import React from 'react'
import ReactDOM from 'react-dom'

import Spreadsheet from './spreadsheet/Spreadsheet'
import reportWebVitals from './reportWebVitals'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Spreadsheet rowsCount={10} columnsCount={10} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
