import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";


function Graph(){
  
        var arr=[{
          x: 0,
          y: 15
      },{
          x: 12,
          y: 15
      }, {
          x: 18,
          y: 12
      },{
        x: 30,
        y: 12
    },
  ];

  const submit=()=>{
    let x=parseInt(document.getElementById('length').value);
    let y=parseInt(document.getElementById('height').value);
    let cy; let cx; let ex;
    if(x<8 && y<8){
      cy = 15; ex = 30; cx = 12;
    }
    else if(x<8 && y>=8 ){
     cy = 30; ex = 30; cx = 12;
    }
    else{
      cy = 32; cx = 5; ex = 40;
    }
    let h = cy-y; 
    let l = cx+x;
    arr=[{
      x: 0,
      y: cy
  },{
      x: cx,
      y: cy
  }, {
      x: l,
      y: h
  },{
    x: ex,
    y: h
},
];
    setState({
            
      options: {
        chart: {
          height: 500,
          type: "line",
              stacked: false
            },
            dataLabels: {
              enabled: false
            }
          },
            colors: ["#247BA0"],
            series: [{
              data: arr,
          }],
          xaxis: {
            type: 'numeric'
          },
            stroke: {
              width: [5, 5]
            },
            plotOptions: {
              bar: {
                columnWidth: "80%"
              }
            },     
            tooltip: {
              shared: false,
              intersect: true,
              x: {
                show: false
              }
            },
            legend: {
              horizontalAlign: "left",
              offsetX: 40
            }
          });
    
    console.log(arr);
    
  }

        const styles = {
                display: {
                        display : "flex",
                        justifyContent : "right",
                        padding : "35px",
                        margin : "71px",
                }
        }
      
          const [state, setState] = useState ({
            
              options: {
                chart: {
                  height: 500,
                  type: "line",
                      stacked: false
                    },
                    dataLabels: {
                      enabled: false
                    }
                  },
                    colors: ["#247BA0"],
                    series: [{
                      data: arr,
                  }],
                  xaxis: {
                    type: 'numeric'
                  },
                    stroke: {
                      width: [5, 5]
                    },
                    plotOptions: {
                      bar: {
                        columnWidth: "80%"
                      }
                    },     
                    tooltip: {
                      shared: false,
                      intersect: true,
                      x: {
                        show: false
                      }
                    },
                    legend: {
                      horizontalAlign: "left",
                      offsetX: 40
                    }
                  }
            )




  return (
        <>
        <div className="whole"style={styles.display}>
        <ReactApexChart 
        options={state.options}
        series={state.series}
        type="line"
        height={350}
        width={800}
        />
        <div className="container" style={{fontSize:"12px"}}>
        <div className="mx-auto col-10 col-md-8 col-lg-6">
        <h1 style={{fontSize:"30px", fontFamily: "'Bruno Ace SC', cursive"}}>Slope Properties</h1>
        <br />
        <div class="input-group mb-3 w-50 ">
        <span class="input-group-text" id="basic-addon1">Height</span>
        <input type="number" class="form-control" id ="height" aria-label="Height" aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3 w-50">
        <span class="input-group-text" id="basic-addon1">Length</span>
        <input type="number" class="form-control" id="length" aria-label="length" aria-describedby="basic-addon1" />
        </div>
        <button type="button" class="btn btn-primary" onClick={submit}>Analyse</button>
        </div>
        </div>
        </div>
      </>
  )
}

export default Graph