import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import "./Index.css"
function ProductDetail() {
  const {id}=useParams();
  const navigate=useNavigate();
  const [data,setData]=useState({}
    );
    const [count,setCount]=useState(1)
  console.log(id);
  useEffect(()=>{
if (!id) {
  navigate('/')
}
else{
  fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
  .then(res=>res.json())
  .then(data=>{
    setData(data.data.attributes)
  })
} 
  },[])

  function getData() {
    let data=[];
    if (localStorage.getItem('data')) {
      data=JSON.parse(localStorage.getItem('data'))
    }
    return data;
  }
  function handleClick() {
    const fur={
      id,
      count
    }

    let data=getData();
    if (data.length) {
      let isExist=data.map((el)=>{
        
      })
    }
    else{
      data.push(fur)
      localStorage.setItem('data',JSON.stringify(data))
    }
  }
  return (
    <div className='container'>
      <div className="image">
        <img src={data.image } width={400} height={400} alt="" />
      </div>
      <div className="info" style={{display:"flex",flexDirection:"column",gap:'10px'}}>
        <h1>{data.title}</h1>
        <h4>{data.company}</h4>
        <span>$ {data.price}</span>
        <p>{data.description}</p><br />
        <p>amount</p>
    <select value={count} onChange={e=>setCount(e.target.value)}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </select>
    <button onClick={handleClick}>add to bug</button>
      </div>
   
    </div>
  )
}

export default ProductDetail