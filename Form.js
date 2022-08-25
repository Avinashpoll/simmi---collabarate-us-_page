import React,{useState}  from 'react'
import './Form.css'

function Form(){
    const data={name:"",email:"",password:""};
        const [inputData,SetInputData]=useState(data)

    function handleData(e){
SetInputData({...inputData,[e.target.name]:e.target.value})
    }

    return(
        
        <form className='container'>
        <div className='header'>
            <div className='heading'>Contact Information</div>
        </div>
        <div className='grd'>
            <div>
            Address: <span className='clr1'>479,Baspadamka,Tehsil Pataudi,<br /> Gurugram,Haryana-122503 ,india</span>
            </div>
            <div>
            Email: <span className='clr'>support@simmifoundation.org</span>
            </div>
            <div>  Phone: <span className='clr'>(+91)70152 -95025</span> </div>
            <div>
            website: <span className='clr'>simmifoundation.org
            </span></div>
        </div>
 
 
<p>
    
    <br/>
</p>
<div className='heading'>Do you have any questions?</div>

<div>
    <input type='text' placeholder='Your Name:' name='name'  onChange={handleData} className="item">
    </input>
</div>

<div>
    <input type='text' placeholder='Your Email:' name='email'  onChange={handleData} className="item">
    </input>
</div>
<div>
    <input type='text' placeholder=' Subject:' name='subject'  onChange={handleData} className="item">
    </input>
</div>
<div>
    <input type='textarea' placeholder='Message:' name='message'  onChange={handleData} className="item1">
    </input>
</div>
<div>
    <button type='submit' className='btn'>Send Message</button>
</div>

        </form>
    )
}
export default Form