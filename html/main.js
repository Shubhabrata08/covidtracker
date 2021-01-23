
ApexCharts APEXCHARTS

DEMOSFEATURESDOCSDOWNLOAD

SUPPORT APEXCHARTS

Line Charts
Area Charts
    Basic
    Spline Area
    Datetime X-Axis
    Negative
    Github Style
    Stacked
    Irregular Timeseries
    Missing / Null values
Column Charts
Bar Charts
Mixed / Combo Charts
Timeline Charts
Candlestick Charts
Pie / Donuts
Radar Charts
Polar Area Charts
RadialBars / Circle Charts
Bubble Charts
Scatter Charts
Heatmap Charts
Treemap Charts
Sparklines
Dashboards

Chart Demos > Area Charts > Basic


  
    var options = {
      series: [{
      name: "STOCK ABC",
      data: series.monthDataSeries1.prices
    }],
      chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    
    title: {
      text: 'Fundamental Analysis of Stocks',
      align: 'left'
    },
    subtitle: {
      text: 'Price Movements',
      align: 'left'
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  
  


