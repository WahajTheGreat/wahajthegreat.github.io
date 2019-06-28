// JavaScript Document

particlesJS.load('particles-js', 'assets/json/particles_config.json', function() {
  console.log('Particles Configuration loaded');
});


let chart_labels = ['C++', 'C#','Java', 'LAMP', 'Lua', 'JS', 'Python', 'Linux Bash'];
let chart_data = [3, 3, 4, 4, 4, 3, 3, 4];

var ctx = document.getElementById('language_chart').getContext('2d');

var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors

var chart = new Chart(ctx,{
	type: 'bar',
	responsive: true,
  	legend: {
		display: false
  	},
	data: {
		labels: chart_labels,
		datasets: [{
			label: '',
			fill: true,
		  	backgroundColor: gradientStroke,
		  	hoverBackgroundColor: gradientStroke,
		  	borderColor: '#1f8ef1',
			borderWidth: 2,
		  	borderDash: [],
		  	borderDashOffset: 0.0,
            data: chart_data
		}],
	},
	
	options: {
		maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          //display: 0,
          //gridLines: 0,
          ticks: {
            //display: false,
			beginAtZero: true,
			max: 5
          },
          gridLines: {
            zeroLineColor: "transparent",
            //drawTicks: false,
            //display: false,
            //drawBorder: false
          }
        }],
        xAxes: [{
          //display: 0,
          //gridLines: 0,
          ticks: {
            //display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            //drawTicks: false,
            //display: false,
            //drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }}
	});


