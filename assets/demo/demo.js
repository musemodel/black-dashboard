type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
	initPickColor: function () {
		$('.pick-class-label').click(function () {
			var new_class = $(this).attr('new-class');
			var old_class = $('#display-buttons').attr('data-class');
			var display_div = $('#display-buttons');
			if (display_div.length) {
				var display_buttons = display_div.find('.btn');
				display_buttons.removeClass(old_class);
				display_buttons.addClass(new_class);
				display_div.attr('data-class', new_class);
			}
		});
	},

	initDocChart: function () {
		chartColor = "#FFF";

		// General configuration for the charts with Line gradientStroke
		gradientChartOptionsConfiguration = {
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
					display: 0,
					gridLines: 0,
					ticks: {
						display: false
					},
					gridLines: {
						zeroLineColor: "transparent",
						drawTicks: false,
						display: false,
						drawBorder: false
					}
				}],
				xAxes: [{
					display: 0,
					gridLines: 0,
					ticks: {
						display: false
					},
					gridLines: {
						zeroLineColor: "transparent",
						drawTicks: false,
						display: false,
						drawBorder: false
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
			}
		};

		ctx = document.getElementById('lineChartExample').getContext("2d");

		gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
		gradientStroke.addColorStop(0, '#80B6F4');
		gradientStroke.addColorStop(1, chartColor);

		gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
		gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
		gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

		myChart = new Chart(ctx, {
			type: 'line',
			responsive: true,
			data: {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				datasets: [{
					label: "Active Users",
					borderColor: "#F96332",
					pointBorderColor: "#FFF",
					pointBackgroundColor: "#F96332",
					pointBorderWidth: 2,
					pointHoverRadius: 4,
					pointHoverBorderWidth: 1,
					pointRadius: 4,
					fill: true,
					backgroundColor: gradientFill,
					borderWidth: 2,
					data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
				}]
			},
			options: gradientChartOptionsConfiguration
		});
	},

	initDashboardPageCharts: function () {

		gradientChartOptionsConfigurationWithTooltipBlue = {
			maintainAspectRatio: false,
			legend: {
				display: false
			},

			tooltips: {
				backgroundColor: '#F5F5F5',
				titleFontColor: '#333',
				bodyFontColor: '#666',
				bodySpacing: 4,
				xPadding: 12,
				mode: "nearest",
				intersect: 0,
				position: "nearest"
			},
			responsive: true,
			scales: {
				yAxes: [{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: 'rgba(29,140,248,0.0)',
						zeroLineColor: "transparent",
					},
					ticks: {
						suggestedMin: 60,
						suggestedMax: 125,
						padding: 20,
						fontColor: "#2380F7"
					}
				}],

				xAxes: [{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: 'rgba(29,140,248,0.1)',
						zeroLineColor: "transparent",
					},
					ticks: {
						padding: 20,
						fontColor: "#2380F7"
					}
				}]
			}
		};

		gradientChartOptionsConfigurationWithTooltipPurple = {
			maintainAspectRatio: false,
			legend: {
				display: false
			},

			tooltips: {
				backgroundColor: '#F5F5F5',
				titleFontColor: '#333',
				bodyFontColor: '#666',
				bodySpacing: 4,
				xPadding: 12,
				mode: "nearest",
				intersect: 0,
				position: "nearest"
			},
			responsive: true,
			scales: {
				yAxes: [{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: 'rgba(29,140,248,0.0)',
						zeroLineColor: "transparent",
					},
					ticks: {
						suggestedMin: 60,
						suggestedMax: 125,
						padding: 20,
						fontColor: "#9A9A9A"
					}
				}],

				xAxes: [{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: 'rgba(225,78,202,0.1)',
						zeroLineColor: "transparent",
					},
					ticks: {
						padding: 20,
						fontColor: "#9A9A9A"
					}
				}]
			}
		};

		gradientChartOptionsConfigurationWithTooltipOrange = {
			maintainAspectRatio: false,
			legend: {
				display: false
			},

			tooltips: {
				backgroundColor: '#F5F5F5',
				titleFontColor: '#333',
				bodyFontColor: '#666',
				bodySpacing: 4,
				xPadding: 12,
				mode: "nearest",
				intersect: 0,
				position: "nearest"
			},
			responsive: true,
			scales: {
				yAxes: [{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: 'rgba(29,140,248,0.0)',
						zeroLineColor: "transparent",
					},
					ticks: {
						suggestedMin: 50,
						suggestedMax: 110,
						padding: 20,
						fontColor: "#FF8A76"
					}
				}],

				xAxes: [{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: 'rgba(220,53,69,0.1)',
						zeroLineColor: "transparent",
					},
					ticks: {
						padding: 20,
						fontColor: "#FF8A76"
					}
				}]
			}
		};

		gradientChartOptionsConfigurationWithTooltipGreen = {
			maintainAspectRatio: false,
			legend: {
				display: false
			},

			tooltips: {
				backgroundColor: '#F5F5F5',
				titleFontColor: '#333',
				bodyFontColor: '#666',
				bodySpacing: 4,
				xPadding: 12,
				mode: "nearest",
				intersect: 0,
				position: "nearest"
			},
			responsive: true,
			scales: {
				yAxes: [{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: 'rgba(29,140,248,0.0)',
						zeroLineColor: "transparent",
					},
					ticks: {
						suggestedMin: 50,
						suggestedMax: 125,
						padding: 20,
						fontColor: "#9E9E9E"
					}
				}],

				xAxes: [{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: 'rgba(0,242,195,0.1)',
						zeroLineColor: "transparent",
					},
					ticks: {
						padding: 20,
						fontColor: "#9E9E9E"
					}
				}]
			}
		};


		gradientBarChartConfiguration = {
			maintainAspectRatio: false,
			legend: {
				display: false
			},

			tooltips: {
				backgroundColor: '#F5F5F5',
				titleFontColor: '#333',
				bodyFontColor: '#666',
				bodySpacing: 4,
				xPadding: 12,
				mode: "nearest",
				intersect: 0,
				position: "nearest"
			},
			responsive: true,
			scales: {
				yAxes: [{

					gridLines: {
						drawBorder: false,
						color: 'rgba(29,140,248,0.1)',
						zeroLineColor: "transparent",
					},
					ticks: {
						suggestedMin: 60,
						suggestedMax: 120,
						padding: 20,
						fontColor: "#9E9E9E"
					}
				}],

				xAxes: [{

					gridLines: {
						drawBorder: false,
						color: 'rgba(29,140,248,0.1)',
						zeroLineColor: "transparent",
					},
					ticks: {
						padding: 20,
						fontColor: "#9E9E9E"
					}
				}]
			}
		};

		var ctx = document.getElementById("chartLinePurple").getContext("2d");

		var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

		gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
		gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
		gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

		var data = {
			labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
			datasets: [{
				label: "Data",
				fill: true,
				backgroundColor: gradientStroke,
				borderColor: '#D048B6',
				borderWidth: 2,
				borderDash: [],
				borderDashOffset: 0.0,
				pointBackgroundColor: '#D048B6',
				pointBorderColor: 'rgba(255,255,255,0)',
				pointHoverBackgroundColor: '#D048B6',
				pointBorderWidth: 20,
				pointHoverRadius: 4,
				pointHoverBorderWidth: 15,
				pointRadius: 4,
				data: [80, 100, 70, 80, 120, 80],
			}]
		};

		var myChart = new Chart(ctx, {
			type: 'line',
			data: data,
			options: gradientChartOptionsConfigurationWithTooltipPurple
		});


		var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

		var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

		gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
		gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
		gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

		var data = {
			labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
			datasets: [{
				label: "My First dataset",
				fill: true,
				backgroundColor: gradientStroke,
				borderColor: '#00D6B4',
				borderWidth: 2,
				borderDash: [],
				borderDashOffset: 0.0,
				pointBackgroundColor: '#00D6B4',
				pointBorderColor: 'rgba(255,255,255,0)',
				pointHoverBackgroundColor: '#00D6B4',
				pointBorderWidth: 20,
				pointHoverRadius: 4,
				pointHoverBorderWidth: 15,
				pointRadius: 4,
				data: [90, 27, 60, 12, 80],
			}]
		};

		var myChart = new Chart(ctxGreen, {
			type: 'line',
			data: data,
			options: gradientChartOptionsConfigurationWithTooltipGreen

		});


		var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
		var chart_data = [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100];


		var ctx = document.getElementById("chartBig1").getContext('2d');

		var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

		gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
		gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
		gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
		var config = {
			type: 'line',
			data: {
				labels: chart_labels,
				datasets: [{
					label: "My First dataset",
					fill: true,
					backgroundColor: gradientStroke,
					borderColor: '#D346B1',
					borderWidth: 2,
					borderDash: [],
					borderDashOffset: 0.0,
					pointBackgroundColor: '#D346B1',
					pointBorderColor: 'rgba(255,255,255,0)',
					pointHoverBackgroundColor: '#D346B1',
					pointBorderWidth: 20,
					pointHoverRadius: 4,
					pointHoverBorderWidth: 15,
					pointRadius: 4,
					data: chart_data,
				}]
			},
			options: gradientChartOptionsConfigurationWithTooltipPurple
		};
		var myChartData = new Chart(ctx, config);
		$("#0").click(function () {
			var data = myChartData.config.data;
			data.datasets[0].data = chart_data;
			data.labels = chart_labels;
			myChartData.update();
		});
		$("#1").click(function () {
			var chart_data = [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120];
			var data = myChartData.config.data;
			data.datasets[0].data = chart_data;
			data.labels = chart_labels;
			myChartData.update();
		});

		$("#2").click(function () {
			var chart_data = [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130];
			var data = myChartData.config.data;
			data.datasets[0].data = chart_data;
			data.labels = chart_labels;
			myChartData.update();
		});


		var ctx = document.getElementById("CountryChart").getContext("2d");

		var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

		gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
		gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
		gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


		var myChart = new Chart(ctx, {
			type: 'bar',
			responsive: true,
			legend: {
				display: false
			},
			data: {
				labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
				datasets: [{
					label: "Countries",
					fill: true,
					backgroundColor: gradientStroke,
					hoverBackgroundColor: gradientStroke,
					borderColor: '#1F8EF1',
					borderWidth: 2,
					borderDash: [],
					borderDashOffset: 0.0,
					data: [53, 20, 10, 80, 100, 45],
				}]
			},
			options: gradientBarChartConfiguration
		});

	},

	initGoogleMaps: function () {
		var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
		var mapOptions = {
			zoom: 13,
			center: myLatlng,
			scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
			styles: [{
				"elementType": "geometry",
				"stylers": [{
					"color": "#1D2C4D"
				}]
			},
				{
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#8EC3B9"
					}]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#1A3646"
					}]
				},
				{
					"featureType": "administrative.country",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#4B6878"
					}]
				},
				{
					"featureType": "administrative.land_parcel",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#64779E"
					}]
				},
				{
					"featureType": "administrative.province",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#4B6878"
					}]
				},
				{
					"featureType": "landscape.man_made",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#334E87"
					}]
				},
				{
					"featureType": "landscape.natural",
					"elementType": "geometry",
					"stylers": [{
						"color": "#023E58"
					}]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [{
						"color": "#283D6A"
					}]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#6F9BA5"
					}]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#1D2C4D"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#023E58"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#3C7680"
					}]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [{
						"color": "#304A7D"
					}]
				},
				{
					"featureType": "road",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#98A5BE"
					}]
				},
				{
					"featureType": "road",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#1D2C4D"
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [{
						"color": "#2C6675"
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#9D2A80"
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#9D2A80"
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#B0D5CE"
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#023E58"
					}]
				},
				{
					"featureType": "transit",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#98A5BE"
					}]
				},
				{
					"featureType": "transit",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#1D2C4D"
					}]
				},
				{
					"featureType": "transit.line",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#283D6A"
					}]
				},
				{
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": [{
						"color": "#3A4762"
					}]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [{
						"color": "#0E1626"
					}]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#4E6D70"
					}]
				}
			]
		};

		var map = new google.maps.Map(document.getElementById("map"), mapOptions);

		var marker = new google.maps.Marker({
			position: myLatlng,
			title: "Hello World!"
		});

		// To add the marker to the map, call setMap();
		marker.setMap(map);
	},

	showNotification: function (from, align) {
		color = Math.floor((Math.random() * 4) + 1);

		$.notify({
			icon: "tim-icons icon-bell-55",
			message: "Welcome to <b>Black Dashboard</b> - a beautiful freebie for every web developer."

		}, {
			type: type[color],
			timer: 8000,
			placement: {
				from: from,
				align: align
			}
		});
	}
};