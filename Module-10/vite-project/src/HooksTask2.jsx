import React, { useEffect, useState } from 'react'

const HooksTask2 = () => {
  const [data,setData] = useState([])
   useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>setData(json))
   })
  return (
    <div>
      <h1>useEffect </h1>
      <table border={"2"}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>

        </tr>
        {
          data.map((i)=>{
            return(
              <tr>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>{i.price}</td>
                <td>{i.category}</td>

              </tr>
            )

          })
        }
      </table>
    </div>
  )
}

export default HooksTask2
