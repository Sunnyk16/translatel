// import React, {  useState } from 'react'
import i18 from '../../config/i18.js'

function Home() {
    const userCount =5;
    // const [lang ,setLang] =useState("")
  return (
    <div>
        <div className='bg-purple-400 w-82 p-2 mx-10 rounded-sm my-5 '>
        <h1 className='capitalize text-2xl font-extrabold mb-5 text-center'>language translation</h1>
        <div>
            <select className='rounded-sm mb-2 text-center font-light text-xs' 
            defaultValue={localStorage.getItem("lang")}
            onChange={(e)=>{
                localStorage.setItem("lang",e.target.value);
                window.location.reload();
            }} >
                {/* <option >language</option> */}
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
            </select>
        </div>
            <div className='bg-gray-300 p-2 rounded-md' >
             

             <h1 className=' text-center capitalize font-semibold'>{i18({lang:"en",keyword:"welcometext"})}</h1>

             <h1 className=' text-center'>{i18({lang:"hn",keyword:"greeting"})}</h1>

             <p className=' text-center'>{i18({lang:"hn",keyword :"wishes" })}</p>

             <p className=' text-center'>{i18({keyword:"message"},"<userCount>",userCount)}</p>

             
            </div>
        </div>
    </div>
  )
}

export default Home