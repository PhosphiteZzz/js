const barChart = {
  credits: {
      enabled: false
  },
  accessibility: {
      enabled: false
  },
  chart: {
      type: 'column',
      backgroundColor: "transparent",
      options3d: {
          // enabled: true,
          // alpha: 5,
          // beta: 1,
          // viewDistance: 10,
          // depth: 100
          enabled: true,
          alpha: 10,
          beta: 1,
          depth: 50
      },
      marginTop: 50,
      marginLeft: 50,
      marginBottom: 50
  },
  title: {
      text: null
  },
  xAxis: {
      categories: ['防火门', '孔洞', '防火保护外套', '防火地漏', '防火组件', '防火阀门'],
      gridLineWidth: 0,
      labels: {
          style: {
              color: "#00f9ff",
              fontSize: 12
          }
      },
  },
  legend: {
      enabled: false,
  },
  yAxis: {
      title: {
          align: "high",
          text: "FZI数据设备",
          rotation: 0,
          textAlign: "high",
          y: -20,
          x: 10,
          style: {
              color: "#00f9ff",
              fontSize: 12
          }
      },
      gridLineColor: "#077189",
      gridLineDashStyle: "Solid",
      allowDecimals: false,
      min: 0,
      labels: {
          style: {
              color: "#00f9ff",
              fontSize: 12
          }
      }
  },
  tooltip: {
      headerFormat: '<b>{point.key}</b><br>',
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y}'
  },
  plotOptions: {
      column: {
          // 堆叠属性 normal 否则null
          maxPointWidth: 35,
          stacking: null,
          depth: 60
      }
  },
  series: [
      {
          name: "数量",
          data: [100, 90, 76, 85, 23, 64],
          color: {
              linearGradient: {
                  x1: 0, x2: 1, y1: 0, y2: 1
              },
              stops: [
                  [0, "#1a3d6c"],
                  [1, "#00f7fc"],
              ]

          }
      }
  ]
}