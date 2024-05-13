import React from 'react'

const Chart = () => {
  return (
    <>
   
    <div class="rt-container">
          <div class="col-rt-12">
              <div class="Scriptcontent">
    <h1> Pie Chart </h1>
<div class="svg-item">
  <svg width="80%" height="60%" viewBox="0 0 40 40" class="donut">
    <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
    <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
    <circle class="donut-segment donut-segment-2" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="69 31" stroke-dashoffset="25"></circle>
    <g class="donut-text donut-text-1">

      <text y="50%" transform="translate(0, 2)">
        <tspan x="50%" text-anchor="middle" class="donut-percent">61%</tspan>   
    </text>
    </g>
  </svg>
</div>
<div class="svg-item">
  <svg width="80%" height="60%" viewBox="0 0 40 40" class="donut">
    <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
    <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
    <circle class="donut-segment donut-segment-3" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="30 70" stroke-dashoffset="25"></circle>
    <g class="donut-text donut-text-2">

      <text y="50%" transform="translate(0, 2)">
        <tspan x="50%" text-anchor="middle" class="donut-percent">22%</tspan>   
      </text>
     
    </g>
  </svg>
</div>

<div class="svg-item">
  <svg width="80%" height="60%" viewBox="0 0 40 40" class="donut">
    <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
    <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
    <circle class="donut-segment donut-segment-4" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="60 40" stroke-dashoffset="25"></circle>
    <g class="donut-text donut-text-3">

      <text y="50%" transform="translate(0, 2)">
        <tspan x="50%" text-anchor="middle" class="donut-percent">61%</tspan>   
      </text>
    </g>
  </svg>
</div>
    		</div>
		</div>
    </div>

    </>
   
  )
}

export default Chart