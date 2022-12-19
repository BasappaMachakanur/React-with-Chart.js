import React from "react";
import Chart from "chart.js/auto";
import { Pie,Bar} from "react-chartjs-2";
import Data from "./data";
import { Colors } from "chart.js";


let result=Data.map(a=>{
  let {year,userGain}=a;
    return userGain;
})
const labels = ["January", "February", "March", "April", "May", "June","august"];
Chart.register(Colors);
const data = {
  labels: labels,
  datasets: [
    {
      label: "sells of the year 2022",
      backgroundColor:["red","green","yellow","cyan","pink","orange","black"],
      borderColor: "rgb(0,0,255)",
      data: result,
    },
    // {
    //   label: "sells of the year 2022",
    //   backgroundColor:["red","green","yellow","cyan","pink","orange","black"],
    //   borderColor: "rgb(0,0,255)",
    //   data: result,
    // },
  ],
};
const Piechart = () => {
  return (
    <div>
      <div style={{width:"400px",hight:"400pxs"}}>
      <Pie data={data} />
      
    </div>
    <div style={{width:"300px",hight:"300pxs"}}>
    <Bar data={data}/>
    </div>

    

    

    </div>
  );
};
export default Piechart;