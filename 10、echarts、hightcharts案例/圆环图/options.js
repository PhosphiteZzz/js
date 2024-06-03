const colors = ['rgba(255,255,255,0.2)', 'rgba(252,240,45,0.2)', 'rgba(5,229,159,0.2)'];
const pieChart = {
    tooltip: {
        trigger: 'item'
    },
    // legend: {
    //     orient: 'vertical', //设置图例的方向
    //     right: 20,
    //     top: 'center'
    // },
    graphic: [
        {
            type: "text",
            left: "center",
            top: "46px",
            style: {
                fill: "#ffffff",
                text: "Y1",
                fontSize: "20px"
            }
        },
        {
            type: "text",
            left: "center",
            top: "70px",
            style: {
                fill: "#00fefb",
                text: "30",
                fontSize: "30px",
                fontWeight: "600"
            }
        }
    ],
    series: [
        {
            // 主圆环
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['50%', '70%'],
            emphasis: {
                scale: true,
            },
            clockwise: false, // 默认逆时针
            itemStyle: {
                color: function (params) {
                    return colors[params.dataIndex]
                },
                // 圆环段中间的间隙,实际是borderColor,
                // itemStyle内的borderColor和backgroundColor一致,便可营造间隙效果
                borderRadius: 0,
                borderWidth: 2
            },
            data: [
                {
                    value: 1048,
                    name: '隔离',
                    label: {
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: "14px"
                    },
                    itemStyle: {
                        borderColor: '#ffffff'
                    },
                    labelLine: {
                        lineStyle: {
                            color: "#ffffff"
                        }
                    }
                },
                {
                    value: 735,
                    name: '故障',
                    label: {
                        color: 'rgba(252,240,45,0.8)',
                        fontSize: "14px"
                    },
                    // 环形边框颜色包裹
                    itemStyle: {
                        borderColor: '#e4b700'
                    },
                    labelLine: {
                        lineStyle: {
                            color: "#e4b700"
                        }
                    }
                },
                {
                    value: 580,
                    name: '正常',
                    label: {
                        color: 'rgba(5,229,159,0.8)',
                        fontSize: "14px"
                    },
                    itemStyle: {
                        borderColor: '#0dbd6c'
                    },
                    labelLine: {
                        lineStyle: {
                            color: "#0dbd6c"
                        }
                    }
                },
            ]
        }
    ]
};