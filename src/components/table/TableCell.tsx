import React from 'react'
import './table.css'
import { tableHeaderProps } from '../Types'
const TableCell = ({ name }: tableHeaderProps) => {
  return <th onClick={() => console.log(name.toLowerCase())}>{name}</th>
}
export default TableCell
