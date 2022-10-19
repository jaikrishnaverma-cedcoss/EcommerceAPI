import React, { useEffect, useState } from 'react'

const Categories = (props) => {
  const [current, setCurrent] = useState(0)
  let i = 1;
  let [state,setState]=useState({dataloaded:false,data:{},mode:"Headlines",categories:{}})
  const [cat,setCat]=useState()

//  Product useEffect
  useEffect(()=>{
let url='https://api.escuelajs.co/api/v1/categories';
fetch(url)
.then((res)=>res.json())
.then((json)=>{
  setState({...state,data:json,dataloaded:true})
})
  },[])
  console.log(state.data)

  const Devider = (arr, n = 4) => {
    let data = [];
    let len = parseInt(arr.length / n);
    let iter = 0;
    for (let row = 0; row < len; row++) {
      let temp = []
      for (let col = 0; col < n; col++) {
        temp.push(arr[iter])
        iter++;
      }
      data.push(temp)
    }
    iter--;
    let temp = []
    len = parseInt(arr.length % n);
    for (let col = 0; col < len; col++) {
      temp.push(arr[iter])
      iter++
    }
    data.push(temp)
    return data;
  }


 

  const navigator = () => {
    const rows = [];
    for (let i = 0; i < books.length; i++) {
      if (current === i)
        rows.push(<div onClick={() => setCurrent(i)} className="pages p1 lightdiv brd2 row flexAIC flexJCC boxActive"><h3>{i + 1}</h3> </div>);
      else
        rows.push(<div onClick={() => setCurrent(i)} className="pages p1 darkdiv brd2 row flexAIC flexJCC"><h3>{i + 1}</h3> </div>);
    }
    return rows;
  }
  let books = Devider(state.data,12);

  if(!state.dataloaded)
  {
    return <div className="navBody row flexJCC flexAIC" style={{minHeight:"80vh",background:"transparent"}} >
        <img  src="Fidget-spinner.gif" style={{width:"100px"}} alt="" /></div>
  }
  return (
    <>
    <div className="navBody row flexSB wrap" >
      {

        books[current].map(x => {
          return <div className="col w21 lightdiv brd2 p1 m1 flexAIC newsbox cardbox" >
            <img className="image" style={{ height:"150px",width:"96%" }} alt=""  src={(x.image == undefined || x.image == "" || x.image == "string") ? "maxresdefault.jpg" : (Array.isArray(x.image) ? x.image[0] : x.image)} />
            <div className="col flexSB  details " style={{ width: "96%", minHeight: "100px",marginTop:"10px"}}>
              <h3 className='lightdiv' style={{marginTop:"10px"}}>{x.name}</h3>
              <div className="row flexJCC">
              <button className="btn mbg1 w100" > Show</button>
                </div>

            </div>
          </div>
        })

      }
      
    </div>
    <div className="row w100 flexJCC">
    <div className="row mw70  brd2 p1 m2 flexAIC   wrap">

        <div onClick={() => setCurrent(prev => (prev !== 0) ? prev - 1 : prev)} className="pages p1 lightdiv brd2 row flexAIC flexJCC boxActive"><h3><i className="fa fa-angle-double-left" aria-hidden="true"></i></h3> </div>
        {navigator()}
        <div onClick={() => setCurrent(prev => (prev !== books.length - 1) ? prev + 1 : prev)} className="pages p1 lightdiv brd2 row flexAIC flexJCC boxActive"><h3><i className="fa fa-angle-double-right" aria-hidden="true"></i></h3> </div>


      </div>
      </div>
    </>
  )
}

export default Categories