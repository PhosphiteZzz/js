const pie = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    bottom: 'bottom',
    left: 'left'
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '75%',
      data: [
        { value: 1048, name: '正式车辆' },
        { value: 735, name: '临时车辆' },
        { value: 580, name: '白名单车辆' },
        { value: 484, name: '危化品车辆' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      label: {
        formatter: '{b}\n{d}'
      },
      itemStyle: {
        normal: {
          color: function (colors) {
            var colorList = [
              'rgba(75, 155, 229, 1)',
              'rgba(255, 192, 1, 1)',
              'rgba(68, 204, 196, 1)',
              'rgba(248, 106, 140, 1)'
            ]
            return colorList[colors.dataIndex]
          }
        }
      }
    }
  ]
}
const bar = {
  xAxis: {
    data: ['待审核', '通过', '未通过', '通勤无效'],
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      color: '#000'
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    show: false
  },
  series: [
    {
      data: [120, 200, 150, 80],
      type: 'bar',
      itemStyle: {
        normal: {
          color: function (params) {
            var colorList = [
              'rgba(248, 106, 140, 1)',
              'rgba(75, 155, 229, 1)',
              'rgba(255, 192, 1, 1)',
              'rgba(195, 195, 195, 1)'
            ]
            return colorList[params.dataIndex]
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            color: '#333'
          }
        }
      }
    }
  ]
}

const doubleBar = {
  color: ['rgba(238, 120, 25, 1)', '#20b9ae'],
  title: {
    text: '+∞ 表示无限制',
    right: '5%',
    textStyle: {
      color: 'black',
      fontSize: '14'
    }
  },
  grid: {
    x: '5%',
    x2: '5%',
    y2: '40%'
  },
  tooltip: {},
  xAxis: {
    data: [
      '卫星石化',
      '盛虹炼化',
      '斯尔邦石化',
      '虹港石化',
      '荣泰仓储',
      '方洋集团',
      '石化公司',
      '思派',
      '480中化瑞恒',
      '虹洋热电',
      '赛科'
    ],
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      color: '#000',
      interval: 0,
      rotate: 40
    }
  },
  yAxis: {
    splitArea: { show: false },
    type: 'value',
    splitLine: {
      show: false
    },
    show: false
  },

  series: [
    {
      barWidth: 35,
      data: [
        '400',
        '200',
        '200',
        '200',
        '200',
        '400',
        '400',
        '200',
        '400',
        '200',
        '300'
      ],
      name: '总量',
      type: 'bar',
      itemStyle: {
        // 柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
        normal: {
          // 柱形图圆角，初始化效果
          barBorderRadius: [4, 4, 0, 0],
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: 'black',
              fontSize: '14'
            }
          }
        }
      }
    },
    {
      barGap: '-100%' /* 这里设置包含关系，只需要这一句话*/,
      barWidth: 35,
      data: [
        '100',
        '150',
        '100',
        '90',
        '150',
        '100',
        '100',
        '150',
        '100',
        '90',
        '150'
      ],
      name: '数量',
      type: 'bar',
      itemStyle: {
        // 柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
        normal: {
          // 柱形图圆角，初始化效果
          barBorderRadius: [4, 4, 0, 0],
          label: {
            show: true,
            position: 'insideTop',
            textStyle: {
              color: 'white',
              fontSize: '12'
            }
          }
        }
      }
    }
  ]
}

const line = {
  grid: {
    x: '5%' // 相当于距离左边效果:padding-left
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [
      '5.01',
      '5.02',
      '5.03',
      '5.04',
      '5.05',
      '5.06',
      '5.07',
      '5.08',
      '5.09',
      '5.10',
      '5.11',
      '5.12',
      '5.13'
    ]
  },
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      data: [100, 200, 300, 900, 600, 400, 320, 100, 200, 300, 900, 600, 400],
      type: 'line',
      smooth: true,
      // radius: '90%',
      areaStyle: { color: '#a2e3b1' },
      itemStyle: {
        normal: {
          //   color: '#a2e3b1', // 改变折线点的颜色
          lineStyle: {
            color: '#a2e3b1' // 改变折线颜色
          }
        }
      }
      //   itemStyle: { normal: { label: { show: true }}} // 显示每一点的数目
    }
  ]
}

const personBar = {
  color: ['#3eb0ee', '#5663b1'],
  grid: {
    x: '5%',
    x2: '5%'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['进', '出']
  },
  xAxis: {
    type: 'category',
    data: [
      '00:00',
      '01:00',
      '02:00',
      '03:00',
      '04:00',
      '05:00',
      '06:00',
      '07:00',
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
      '23:00'
    ],
    axisTick: {
      show: false
    },
    axisLine: {
      //  轴线
      show: false
    },
    axisLabel: {
      color: '#000'
    }
  },

  yAxis: {
    type: 'value',
    splitLine: {
      // 背景线
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      //  轴线
      show: false
    },
    axisLabel: {
      color: '#000'
    }
  },
  series: [
    {
      name: '进',
      type: 'bar',
      data: [
        2500,
        1500,
        1000,
        2500,
        1500,
        1100,
        2500,
        1500,
        3000,
        2500,
        1500,
        2000,
        2500,
        1500
      ],
      itemStyle: {
        normal: {
          barBorderRadius: 10
        }
      },
      barWidth: 10
    },
    {
      name: '出',
      type: 'bar',
      data: [
        2500,
        500,
        1000,
        2500,
        3500,
        1000,
        2000,
        1500,
        3000,
        500,
        1500,
        3500,
        2500,
        1500
      ],
      itemStyle: {
        normal: {
          barBorderRadius: 10
        }
      },
      barWidth: 10
    }
  ]
}
export { pie, bar, doubleBar, line, personBar }
