import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addData, update, short } from './action/action';
import { deleteData } from './action/action';
import { search } from './action/action';
function App() {
  const dispatch = useDispatch()
  const selector = useSelector((selecter) => selecter)
  const [searchName, setSearchname] = useState("")
  const [student, setSudent] = useState({ fname: "", email: "", pass: "", age: "" })
  const [edit, setEdit] = useState(-1)

  const save = (e) => {
    setSudent({ ...student, [e.target.name]: e.target.value })
  }

  const submit = (e) => {
    if (edit === -1) {
      dispatch(addData(student))
    } else {
      dispatch(update(student, edit))
    }
  }

  const handelEdit = (item, ind) => {
    setSudent(item)
    setEdit(ind)
  }

  const srch = () => {
    const select = document.getElementById("sortSelect");
    const value = select.options[select.selectedIndex].value;
    console.log(value);

    dispatch(search(searchName, value));


  }


  const srt = () => {
    const select = document.getElementById("sortSelect");
    const value = select.options[select.selectedIndex].value;
    console.log(value);
    dispatch(short(value))
  }



  return (

    <>

      <div className='flex justify-center p-5'>
        <div className='text-center demo1 py-12'>
          <input type='text' placeholder='name' id='fname' name='fname' value={student.fname} onChange={(e) => save(e)} className='border-2 border-black' /><br /><br />

          <input type='email' placeholder='email' id='email' name='email' value={student.email} onChange={(e) => save(e)} className='border-2 border-black' /><br /><br />
          <input type='password' placeholder='password' id='pass' name="pass" value={student.pass} onChange={(e) => save(e)} className='border-2 border-black' /><br /><br />
          <input type='number' placeholder='age' id='age' name="age" value={student.age} onChange={(e) => save(e)} className='border-2 border-black' /><br /><br />
          <button type='button' onClick={submit} className='bg-yellow-400 border-2 border-black px-5 '>submit</button>

        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex justify-between gap-[20px]'>
          <input type='search' id='search1' name='search1' placeholder="Search" value={searchName} onChange={(e) => setSearchname(e.target.value)} className='border-2 border-black text-center ' />
          <button type='button' className='bg-red-600 px-5 border-2 border-black' onClick={srch}>search</button>


          <select id="sortSelect">
            <option >select</option>
            <option value="age">Age</option>
            <option value="fname">Name</option>
          </select>
          <button type="button" className='bg-red-600' onClick={srt} >
            short
          </button>



        </div>
      </div>
      <div className='flex justify-center '>
        <table className='table table-bordered'>
          <thead>
            <th>fname</th>
            <th>
              password
            </th>
            <th>
              email
            </th>
            <th>
              Age
            </th>

          </thead>
          <tbody>
            {selector?.formReducer?.map((item, index) => {
              return (
                <tr>
                  <td>{item.fname}</td>
                  <td>{item.pass}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <button type='button' className='bg-red-400 px-3' onClick={() => dispatch(deleteData(index))}>
                      delete
                    </button>
                  </td>
                  <td>
                    <button type='button' className='bg-red-400 px-3' onClick={() => { handelEdit(item, index) }}>
                      edit
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>


    </>
  );
}

export default App;
