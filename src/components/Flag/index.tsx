import React from 'react'
import { flagProps } from '../Types/index'
import './flag.css'
const Flag = ({ imgURL }: flagProps) => {
  return <img src={imgURL} alt="pictures of flag of different countries" />
}
export default Flag
