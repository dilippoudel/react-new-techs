import React from 'react';
import { useSelector } from 'react-redux'
import img from './loading_spinner.gif'
const Loading = () => {
   const loading = useSelector(state=> state.loading)
return (
loading ?
<div style={{ textAlign: 'center' }}>
   <img src={img} alt='loading' />
   <h1>LOADING</h1>
</div> :
null)
};
export default Loading;