import React, { useState, useRef } from "react";
import ReactApexChart from "react-apexcharts";


function Graph() {
  var arr = [{
    x: 0,
    y: 15
  }, {
    x: 12,
    y: 15
  }, {
    x: 18,
    y: 12
  }, {
    x: 30,
    y: 12
  },
  ];

  const inputRef = useRef(null);

  const submit = () => {

    let cohesion = parseFloat(document.getElementById('cohesion').value);
    let Slicewidth = parseFloat(document.getElementById('width').value);
    let fos = (cohesion * Slicewidth) / 60.5;          // avg. value of W.sin(alpha) distabilising force for each slice
    console.log(fos);

    inputRef.current.value = fos;

    let x = parseInt(document.getElementById('length').value);
    let y = parseInt(document.getElementById('height').value);

    let cy; let cx; let ex;
    if (x < 8 && y < 8) {
      cy = 15; ex = 30; cx = 12;
    }
    else if (x < 8 && y >= 8) {
      cy = 30; ex = 30; cx = 12;
    }
    else {
      cy = 32; cx = 5; ex = 40;
    }
    let h = cy - y;
    let l = cx + x;
    arr = [{
      x: 0,
      y: cy
    }, {
      x: cx,
      y: cy
    }, {
      x: l,
      y: h
    }, {
      x: ex,
      y: h
    },
    ];

    setGraph1({

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
      display: "flex",
      justifyContent: "right",
      padding: "35px",
      margin: "71px",
    }
  }

  const [graph1, setGraph1] = useState({

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
      <div className="whole" style={styles.display}>
        <ReactApexChart
          options={graph1.options}
          series={graph1.series}
          type="line"
          height={350}
          width={800}
        />
        <div className="container" style={{ fontSize: "12px" }}>
          <div className="mx-auto col-10 col-md-8 col-lg-6">
            <h1 style={{ fontSize: "30px", fontFamily: "'Bruno Ace SC', cursive" }}>Slope Properties</h1>
            <br />
            <div className="input-group mb-3 w-50 ">
              <span className="input-group-text" id="basic-addon1">Height</span>
              <input type="number" className="form-control" id="height" aria-label="Height" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 w-50">
              <span className="input-group-text" id="basic-addon1">Length</span>
              <input type="number" className="form-control" id="length" aria-label="length" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 w-50 ">
              <span className="input-group-text" id="basic-addon1">Cohesion</span>
              <input type="number" className="form-control" id="cohesion" aria-label="cohesion" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 w-50 ">
              <span className="input-group-text" id="basic-addon1">Slice Width</span>
              <input type="number" className="form-control" id="width" aria-label="width" aria-describedby="basic-addon1" />
            </div>
            <button type="button" className="btn btn-primary" onClick={submit}>Analyse</button>
            <br />

            <form>
              <div class="form-group">
                <label for="fos" style={{ paddingTop: "20px", fontFamily: "sans-serif", fontSize: "14px" }}><b>Factor Of Safety</b></label>
                <input type="number" ref={inputRef} class="form-control" id="fos" aria-describedby="result" disabled="true" />
              </div>
            </form>


          </div>
        </div >
      </div >

    </>
  )
}

export default Graph