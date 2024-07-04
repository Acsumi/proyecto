import React from "react";
import Chart from "react-apexcharts";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Bar, BarChart, Legend } from 'recharts'

const data = [
    { name: "8:00 AM", age: 10,  },
    { name: '9:00 AM', age: 25,  },
    { name: '10:00 AM', age: 15, },
    { name: '11:00 AM', age: 35,},
    { name: '12:00 PM', age: 12, },
    { name: '1:00 PM', age: 30,},
    { name: '2:00 PM', age: 15},
];

const datos = [
  {name: "ENE", Incidencias: 10, },
  {name: 'FEB', Incidencias: 25, },
  {name: 'MAR', Incidencias: 15, },
  {name: 'ABR', Incidencias: 35, },
  {name: 'MAY', Incidencias: 12, },
  {name: 'JUN', Incidencias: 30,},
  {name: 'JUL', Incidencias: 15, },
]


const Estadis2 = () => {
  
  return (
    <div>
      <br />
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '600px' }}>
        <h2>Estadísticas      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                             
          Incidencias</h2>
      </div>



      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px', marginRight: '50px' }}>
        <div style={{ width: '45%' }}>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="age" stackId="1" stroke='#4AB3CA' fill="#4AB3CA" />
              <Area type="monotone" dataKey="weight" stackId="1" stroke='#82caed' fill="#fad3cf" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <ResponsiveContainer width="31%" aspect={2}>
        <BarChart 
            data={datos}
            width={500}
            height={300}
            margin={{
                top:5,
                right:30,
                left:20,
                bottom:5
            }}
        >
        <CartesianGrid strokeDasharray="4 1 2" />    
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Incidencias" fill="#007bff"/>
        </BarChart>
    </ResponsiveContainer>
  

        
      </div>
    </div>
  );
};

export default Estadis2;
