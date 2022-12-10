import React from 'react';
import { Table } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Addmission from './Addmission';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6392e57811ed187986a3e58f.mockapi.io/studentData2023`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    return (
        <div>
            <div className='addmission'>
                <Addmission />
            </div>
        <div className='input1'>
            
            <Table singleLine>
                <Table.Header >
                    <Table.Row >
                        <Table.HeaderCell ><span className='name'>Name</span></Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>Father's Name</span> </Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>CNIC </span></Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>Date of Birth </span></Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>Email </span></Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>Address </span></Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>Phone Number</span> </Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>Degree </span></Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>TMarks </span></Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>OMarks</span> </Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>Year</span> </Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>Quali </span></Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>Laptop?</span></Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>Interest</span> </Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>Ready?</span> </Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>Find? </span></Table.HeaderCell>
                        <Table.HeaderCell><span className='name'>Checked</span></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
           <Table.Body>
  {APIData.map((data) => {
     return (
       <Table.Row>
          <Table.Cell><span className='answer'>{data.name}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.fatherName}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.cnic}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.dateOfBirth}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.email}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.address}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.phoneNumber}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.degree}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.totalMarks}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.pending}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.year}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.qualification}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.laptop}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.interested}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.ready}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.find}</span></Table.Cell>
           <Table.Cell><span className='answer'>{data.checkbox ? 'Checked' : 'Unchecked'}</span></Table.Cell>
        </Table.Row>
     )})}
        </Table.Body>
 </Table>
            </div>
        </div>
    )
}