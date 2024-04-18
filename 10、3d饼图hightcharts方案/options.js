//  初始化echarts
const initCrewChart = () => {
  let quantity = 0; // 总数
  dataList.value.forEach((item) => {
    quantity += item.y;
  });
  dataList.value.forEach((item) => {
    item.bfb = parseInt((item.y / quantity) * 100);
    item.h = item.bfb * 1.5 >= 70 ? 70 : item.bfb * 1.5;
    // item.h = parseInt(0.86 * item.bfb); // 最高高度60，根据比例渲染高度
    // console.log(dataList.value, "dataList----->>>");
  });
  // 修改3d饼图绘制过程
  //  each = highcharts.each,
  var round = Math.round,
    cos = Math.cos,
    sin = Math.sin,
    deg2rad = Math.deg2rad;
  highcharts.wrap(highcharts.seriesTypes.pie.prototype, "translate", function (proceed) {
    proceed.apply(this, [].slice.call(arguments, 1));
    // Do not do this if the chart is not 3D
    if (!this.chart.is3d()) {
      return;
    }
    var series = this,
      chart = series.chart,
      options = chart.options,
      seriesOptions = series.options,
      depth = seriesOptions.depth || 0,
      options3d = options.chart.options3d,
      alpha = options3d.alpha,
      beta = options3d.beta,
      z = seriesOptions.stacking ? (seriesOptions.stack || 0) * depth : series._i * depth;
    z += depth / 2;
    if (seriesOptions.grouping !== false) {
      z = 0;
    }
    series.data.map((point) => {
      var shapeArgs = point.shapeArgs,
        angle;
      point.shapeType = "arc3d";
      var ran = point.options.h;
      shapeArgs.z = z;
      shapeArgs.depth = depth * 0.75 + ran;
      shapeArgs.alpha = alpha;
      shapeArgs.beta = beta;
      shapeArgs.center = series.center;
      shapeArgs.ran = ran;
      angle = (shapeArgs.end + shapeArgs.start) / 2;
      point.slicedTranslation = {
        translateX: round(cos(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)),
        translateY: round(sin(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)),
      };
    });
  });
  (function (H) {
    H.wrap(highcharts.SVGRenderer.prototype, "arc3dPath", function (proceed) {
      // Run original proceed method
      var ret = proceed.apply(this, [].slice.call(arguments, 1));
      ret.zTop = (ret.zOut + 0.5) / 100;
      return ret;
    });
  })(highcharts);
  pieChart.value = highcharts.chart("crew", {
    accessibility: {
      enabled: false,
    },
    chart: {
      animation: false,
      backgroundColor: "none",
      type: "pie", //饼图
      margin: [0, 0, 0, 0],
      options3d: {
        enabled: true, //使用3d功能
        alpha: 58, //延y轴向内的倾斜角度
        beta: 0,
      },
      events: {
        load: function () {
          // var each = highcharts.each,
          var points = this.series[0].points;
          points.map((p) => {
            p.graphic.attr({
              translateY: -p.shapeArgs.ran,
            });
            p.graphic.side1.attr({
              translateY: -p.shapeArgs.ran,
            });
            p.graphic.side2.attr({
              translateY: -p.shapeArgs.ran,
            });
          });
          // each(points, function (p, i) {});
        },
      },
    },
    legend: {
      enabled: false, // 关闭图例
      align: "right", //水平方向位置
      verticalAlign: "top", //垂直方向位置
      layout: "vertical",
      x: fontChart(0),
      y: fontChart(30),
      symbolWidth: fontChart(10),
      symbolHeight: fontChart(10),
      symbolRadius: "50%", // 修改成圆
      itemMarginBottom: fontChart(8),
      labelFormat: "{name}&nbsp;&nbsp;&nbsp;&nbsp;{y}",
      itemStyle: {
        color: "#f4f4f6",
        fontSize: fontChart(12),
      },
    },
    title: {
      // enabled: false,
      text: "",
    },
    subtitle: {
      text: "",
    },
    plotOptions: {
      pie: {
        allowPointSelect: false, // 禁用点击
        cursor: "pointer",
        depth: fontChart(45),
        showInLegend: true,
        size: "100%", // 外圈直径大小
        innerSize: fontChart(140), // 内圈直径大小
        center: ["50%", "50%"],
        // colors: [
        //   "rgba(157, 88, 32, .9)",
        //   "rgba(169, 199, 62, .9)",
        //   "rgba(11, 146, 89, .9)",
        //   "rgba(16, 138, 174, .9)",
        //   "rgba(0, 77, 161, .9)",
        //   "rgba(60, 32, 173, .9)",
        // ],
        dataLabels: {
          enabled: true, //是否显示饼图的线形tip
          formatter: function () {
            const color = this.color.stops[0][1];
            return `<p style="color:${color}">${this.point.name} ${this.point.y}(${this.point.bfb}%)</p>`;
          },
          // format: "{point.name} {point.y}({point.bfb}%)",
          style: {
            color: "#fff",
            fontSize: fontChart(13),
          },
        },
      },
    },
    credits: {
      enabled: false, // 禁用版权信息
    },
    series: [
      {
        type: "pie",
        name: "数量",
        data: dataList.value,
        colors: [
          {
            linearGradient: {
              x1: 0,
              y1: 1,
              x2: 1,
              y2: 0,
            },
            stops: [
              [0, "#ffd657"],
              [1, "#fda382"],
            ],
          },
          {
            linearGradient: {
              x1: 0,
              y1: 1,
              x2: 1,
              y2: 0,
            },
            stops: [
              [0, "#9dfabe"],
              [1, "#27c731"],
            ],
          },
          {
            linearGradient: {
              x1: 0,
              y1: 1,
              x2: 1,
              y2: 0,
            },
            stops: [
              [0, "#8efcdd"],
              [1, "#1cd291"],
            ],
          },
          {
            linearGradient: {
              x1: 0,
              y1: 1,
              x2: 1,
              y2: 0,
            },
            stops: [
              [0, "#3c89fb"],
              [1, "#112ad9"],
            ],
          },
          {
            linearGradient: {
              x1: 0,
              y1: 1,
              x2: 1,
              y2: 0,
            },
            stops: [
              [0, "#7ee2f1"],
              [1, "#37ede9"],
            ],
          },
          {
            linearGradient: {
              x1: 0,
              y1: 1,
              x2: 1,
              y2: 0,
            },
            stops: [
              [0, "#f093f9"],
              [1, "#b527d4"],
            ],
          },
        ],
      },
    ],
  });
  highcharts.addEvent(pieChart.value, "redraw", function () {
    var points = pieChart.value.series[0].points;
    points.map((p) => {
      p.graphic.attr({
        translateY: -p.shapeArgs.ran,
      });
      p.graphic.side1.attr({
        translateY: -p.shapeArgs.ran,
      });
      p.graphic.side2.attr({
        translateY: -p.shapeArgs.ran,
      });
    });
  });
};