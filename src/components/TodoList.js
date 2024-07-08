import React, { useState } from 'react'

export default function TodoList() {
    const [formData,SubmitFormData]=useState({
        time:"",
        note:""
    })

    const[TableData,SubmitTable]=useState([])

    function HandleForm(e){
        const {name,value}=e.target
        SubmitFormData({...formData,[name]:value});
    }
    function HandleSubmit(){
        SubmitTable([...TableData,formData]);
        SubmitFormData({
            time:"",
            note:""
        })
    }
  return (
    <div>
        <h1>TodoList</h1>
        <div id="form">
            <input name="time" type="time" value={formData.time} onChange={HandleForm}/>
            <input name="note" type="text" value={formData.note} onChange={HandleForm}/>
            <br/>
            <button onClick={HandleSubmit}>Submit</button>
        </div>

        <table border={2}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Note</th>
          </tr>
        </thead>

        <tbody>
          {TableData.map((data, index) => (
            <tr key={index}>
              <td>{data.time}</td>
              <td>{data.note}</td>
              
            </tr>
            
          ))}
        </tbody>
        
      </table>
      
    </div>
  )
}

