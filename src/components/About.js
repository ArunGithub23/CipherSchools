import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const About = ({ props }) => {

  const { data, setData } = props;
  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  const [about, setAbout] = useState("");

  //const fetchData=async()=>{
  //   const res=await fetch("http://localhost:4000/profile/"+id);
  //   const json=await res.json();
  //   // console.log(json);
  //   setData(json)
  // }
  const editAbout = async () => {
    // console.log(about);
    try {
      const res = await fetch("http://localhost:4000/about/" + id, {
        method: "PUT",
        body: JSON.stringify({ about }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      res = await res.json();
      console.log("about res", res)
      setData(res)
      //fetchData();

    } catch (error) {
      console.log("err while update weblink".error.message)
    }
  }
  return (
    <div className='mx-auto w-11/12 my-2'>


      <div className="flex w-full   justify-between items-end p-2">
        <label for="message" class="block mb-2 text-md font-bold text-gray-900">ABOUT ME</label>
        <button class="inline-flex text-white bg-[#f3912e] border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg" onClick={() => {
          if (edit === true) {
            editAbout();
          }
          setEdit(!edit)
        }}>{edit ? "Save" : "Edit"}</button>
      </div>
      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " defaultValue={data.about} placeholder="Write your thoughts here..." disabled={!edit} onChange={(e) => {
        setAbout(e.target.value);
      }}></textarea>


    </div>
  )
}

export default About
