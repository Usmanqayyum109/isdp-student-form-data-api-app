
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import Heading from './Header';
import Layout from './Layout';


export default function Create() {
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [cnic,setCnic] = useState('');
    const [dateOfBirth,setDateOfBirth] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [phoneNumber,setPhoneNumber] = useState();
    const [degree,setDegree] = useState('');
    const [totalMarks,setTotalMarks] = useState();
    const [pending,setPending] = useState('');
    const [year,setYear] = useState();
    const [qualification,setQualification] = useState('');
    const [laptop,setLaptop] = useState('');
    const [interested,setInterested] = useState('');
    const [ready,setReady] = useState('');
    const [find,setFind] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://6392e57811ed187986a3e58f.mockapi.io/studentData2023`, {
            name,
            fatherName,
            cnic,
            dateOfBirth,
            email,
            address,
            phoneNumber,
            degree,
            totalMarks,
            pending,
            year,
            qualification,
            laptop,
            interested,
            ready,
            find,
            checkbox
        })
    }
    return (
    
        <div className='main'>
            <Heading />
             <Form className="create-form">
                <div className='input'>
                    <label> ٭Name</label>
                    <input   onChange={(e) => setName(e.target.value)}/>
                    
               
                    <label>٭Father's Name</label>
                    <input    onChange={(e) => setFatherName(e.target.value)}/>
               
                    <label>٭CNIC (#####-#######-#)</label>
                    <input     onChange={(e) => setCnic(e.target.value)}/>
                
                    <label>٭Date of Birth</label>
                    <input type='date'    onChange={(e) => setDateOfBirth(e.target.value)}/>
                
                    <label>٭Email</label>
                    <input type="email"    onChange={(e) => setEmail(e.target.value)}/>
                
                    <label>٭Address</label>
                    <input     onChange={(e) => setAddress(e.target.value)}/>
              
                    <label>٭Phone Number (0###-#######)</label>
                    <input     onChange={(e) => setPhoneNumber(e.target.value)}/>
               
                    <label>٭Shahadatul Almiya Degree received from</label> 
                    <select onChange={(e) => setDegree(e.target.value)}>
                        <option > Wafaq-ul-Madaris Al-Arabia</option>
                        <option > Tanzem-ul-Madaris Alhe Sunnat, Lahore</option>
                        <option > Wafaq-ul-Madaris Al-Salfia, Faisalabad</option>
                        <option > Wafaq-ul-Madaris Shia, Lahore</option>
                        <option > Rabita-ul-Madaris Al Islamia, Lahore</option>
                        <option > Ittehad ul Madaris Al Arabia Pakistan, Mardan</option>
                        <option > Ittehad ul Madaris Al Islamia Pakistan, Lahore</option>
                        <option > Nizam ul Madaris Pakistan, Lahore</option>
                        <option > Majma ul Madaris Taleem ul Kitab wal Hikmat, Lahore</option>
                        <option > Wafaq ul Madaris Al Islamia Al Rizvia Pakistan</option>
                        <option > Wafaq Ul Madaris Wal Jamiaat Al-Deeniya Al-Bakistania</option>
                        <option > Majma Ul Uloom Al-Islamia</option>
                        <option > Wahdat-Ul-Madaris Al-Islamia, Pakistan</option>
                        <option > Board of Islamic Education</option>
                        <option > Kanz-ul-Madaris</option>
                        <option > Jamia Islamia Minhaj-ul-Quran, Lahore</option>
                        <option > Jamia Taleemat-e-Islamia, Faisalabad</option>
                        <option > Jamia Ashrafia, Lahore</option>
                        <option > Darul Uloom Mohammadia Ghousia, Sargodha</option>
                        <option > Darul Uloom Korangi Creek, Karachi</option>
                        <option > Jamia tu Rasheed, Karachi</option>
                        <option > Darul Uloom Jamia Naeemia Lahore</option>
                        <option > Jamia Al-Madina Karachi</option>
                        <option > Jamia Tu Darasat Al-Islami Karachi</option>
                    </select>
               
                    <label>٭Total marks of Shahadatul Almiya Degree</label>
                    <input type="number"     onChange={(e) => setTotalMarks(e.target.value)}/>
                
                    <label>٭Marks you obtained in Shahadatul Almiya Degree (if result not declared yet then write "result pending")</label>
                    <input      onChange={(e) => setPending(e.target.value)}/>
                
                    <label>٭Year of graduation of Shahadatul Almiya Degree</label>
                    <input type="number"     onChange={(e) => setYear(e.target.value)}/>
                
                    <label>٭Any other qualification(s)?</label>
                    <input      onChange={(e) => setQualification(e.target.value)}/>
                
                    <label>٭Do you have a laptop or can you arrange one for yourself?</label>
                    <select onChange={(e) => setLaptop(e.target.value)}>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
               
                    <label>٭Are you ready to commit one full year exclusively for this course?</label>
                    <select onChange={(e) => setReady(e.target.value)}>
                        <option>Yes</option>
                        <option>Maybe</option>
                        <option>No</option>
                        
                    </select>
                    
               
                    <label>٭Why are you interested in this course?</label>
                    <input      onChange={(e) => setInterested(e.target.value)}/>
                
                    <label>٭How did you find about this course?</label>
                    <select onChange={(e) => setFind(e.target.value)}>
                        <option>Friend/relative told me</option>
                        <option>Social media ( Facebook, WhatsApp etc)</option>
                        <option>Saw a flyer</option>
                        <option>None of the above</option>
                    </select>
              
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                
                </div >
                <div>
                <Button  onClick={postData} type='submit'>Submit</Button>
                <Layout  />
                </div>
            </Form>
        </div>
        
    )
}