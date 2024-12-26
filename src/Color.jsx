import React, { useState } from 'react'

function Color() {
    const[color,setColor]=useState("violet")
  return (
 <>
<div style={{minWidth:'50vh' ,backgroundColor:color, minHeight:'50vh',marginTop:'200px'}} >

<h3 className='text-center py-5 text-light  fw-bolder' >Background color Changer</h3>

<button style={{width:'100px', marginLeft:'250px '}} className='btn btn-outline-danger text-center my-5 fw-bold text-dark' onClick={()=>setColor("red")}>RED</button>
<button style={{width:'100px', marginLeft:'250px '}} className='btn btn-outline-success text-center my-5  fw-bold text-dark' onClick={()=>setColor("green")}>GREEN</button>
<button style={{width:'100px', marginLeft:'250px '}} className='btn btn-outline-info text-center my-5 fw-bold text-dark' onClick={()=>setColor("blue")}>BLUE</button>
<button style={{width:'100px', marginLeft:'250px '}} className='btn btn-outline-warning text-center my-5 fw-bold text-dark' onClick={()=>setColor("yellow")}>YELLOW</button>
</div>
 </>
  )
}

export default Color