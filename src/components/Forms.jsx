import React , {useState} from 'react';

const Forms = () => {
    const [form, setform] = useState({
        employeename : "",
        age : "",
        address:""
    })

    const onchangehandler = (e) => {
        let {type,name,value,files} = e.target
        if(type==="file")
        {
            setform({
                ...form,
                [value] : files
            })
        }
        else{
        setform({
            ...form,
            [name] : value
        })
        }
        
    }

    const handleonsubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }
  return (
    <div><h3>React Forms</h3>
        <div className='details'>
            <form onSubmit={handleonsubmit}>
            <div className='innerdetails'>
                <label className='labels'>Name : </label>
                <input className='inputbox' type="text" placeholder='Enter Name' name='employeename' value={form.name} onChange={onchangehandler}/>
            </div>
            <div className='innerdetails'>
                <label className='labels'>Age : </label>
                <input className='inputbox' type="number" placeholder='Enter Age' name='age' value={form.age} onChange={onchangehandler}/>
            </div>
            <div className='innerdetails'>
                <label className='labels'>Address : </label>
                <input className='inputbox' type="text" placeholder='Enter Address' name='address' value={form.address} onChange={onchangehandler} />
            </div>
            <div className='innerdetails'>
                <label className='labels'>Department : </label>
                <select name="department" value={form.department} onChange={onchangehandler} id="">
                    <option value="sales">Sales Department</option>
                    <option value="marketing">Marketing Department </option>
                    <option value="opertaions">Operations Department</option>
                    <option value="finance">Finance Department</option>
                    <option value="human">Human Resource Department</option>
                </select>
            </div>
            <div className='innerdetails'>
                <label className='labels'>Salary : </label>
                <input className='inputbox' type="text" placeholder='Enter Salary' name='salary' value={form.salary} onChange={onchangehandler}/>
            </div>
            <div className='innerdetails'>
                <label className='labels'>Marital status : </label>
                <input type="radio" name='Marital status' value={'single'} onChange={onchangehandler}/>Single
                <input type="radio" name='Marital status' value={'married'} onChange={onchangehandler}/>Married
                <input type="radio" name='Marital status' value={'divorced'} onChange={onchangehandler}/>Divorced
                <input type="radio" name='Marital status' value={'widowed'} onChange={onchangehandler}/>Widowed
            </div>
            <div className='innerdetails'>
                <label className='labels'>Upload Profile Photo : </label>
                <input type="file" accept='image/png , image/jpeg' name="profilephoto" value={form.profilephoto} onChange={onchangehandler}/>
            </div>
            <div>
                <button type='submit'>SUBMIT</button>
            </div>
            </form>
        </div>
      
    </div>
  )
}

export default Forms;