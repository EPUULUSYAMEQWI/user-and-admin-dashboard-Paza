import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'

const Dashboard = () => {
  const [data, setData] = useState({})
  const fetchdata=()=> {
    axios.post("https://vast-wildwood-07594.herokuapp.com/api/resident/")
    .then(res => setData (res))
    .catch(err => console.log(err));

  }
  console.log(data)
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='' title='Dashboard'/>
      <button className='bg-blue-200' 
      onClick={fetchdata}>fetch</button>
    </div>
  )
}

export default Dashboard