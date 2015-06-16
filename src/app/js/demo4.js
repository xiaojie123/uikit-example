/**
 * Created by avc on 2015/6/15.
 */$(function () {
    var allOption = document.createElement("option");//ҳ������꣬����һ����document.ready
    require.config({
        paths: {
            echarts: './bower_components/echarts/build/dist'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/line',   // �����������ͼ�����趯̬�����л����ܣ�������ͬʱ������Ӧͼ��
            'echarts/chart/pie'
        ],
        function (ec) {
            var myChart = ec.init(document.getElementById('chart4'));

            var labelTop = {
                normal : {
                    label : {
                        show : true,
                        position : 'center',
                        formatter : '{b}',
                        textStyle: {
                            baseline : 'bottom'
                        }
                    },
                    labelLine : {
                        show : false
                    }
                }
            };
            var labelFromatter = {
                normal : {
                    label : {
                        formatter : function (params){
                            return 100 - params.value + '%'
                        },
                        textStyle: {
                            baseline : 'top'
                        }
                    }
                },
            }
            var labelBottom = {
                normal : {
                    color: '#ccc',
                    label : {
                        show : true,
                        position : 'center'
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };
            var radius = [40, 55];
            var labelTop = {
                normal : {
                    label : {
                        show : true,
                        position : 'center',
                        formatter : '{b}',
                        textStyle: {
                            baseline : 'bottom'
                        }
                    },
                    labelLine : {
                        show : false
                    }
                }
            };
            var labelFromatter = {
                normal : {
                    label : {
                        formatter : function (params){
                            return 100 - params.value + '%'
                        },
                        textStyle: {
                            baseline : 'top'
                        }
                    }
                },
            }
            var labelBottom = {
                normal : {
                    color: '#ccc',
                    label : {
                        show : true,
                        position : 'center'
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };
            var radius = [40, 55];
            var labelTop = {
                normal : {
                    label : {
                        show : true,
                        position : 'center',
                        formatter : '{b}',
                        textStyle: {
                            baseline : 'bottom'
                        }
                    },
                    labelLine : {
                        show : false
                    }
                }
            };
            var labelFromatter = {
                normal : {
                    label : {
                        formatter : function (params){
                            return 100 - params.value + '%'
                        },
                        textStyle: {
                            baseline : 'top'
                        }
                    }
                },
            }
            var labelBottom = {
                normal : {
                    color: '#ccc',
                    label : {
                        show : true,
                        position : 'center'
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };
            var radius = [40, 55];
            option = {
                legend: {
                    x : 'center',
                    y : 'center',
                    data:[

                    ]
                },


                series : [
                    {
                        type : 'pie',
                        center : ['10%', '30%'],
                        radius : radius,
                        x: '0%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'other', value:46, itemStyle : labelBottom},
                            {name:'GoogleMaps', value:54,itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['30%', '30%'],
                        radius : radius,
                        x:'20%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'other', value:56, itemStyle : labelBottom},
                            {name:'Facebook', value:44,itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['50%', '30%'],
                        radius : radius,
                        x:'40%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'other', value:65, itemStyle : labelBottom},
                            {name:'Youtube', value:35,itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['70%', '30%'],
                        radius : radius,
                        x:'60%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'other', value:70, itemStyle : labelBottom},
                            {name:'Google+', value:30,itemStyle : labelTop}
                        ]
                    },

                ]
            };




            myChart.setOption(option);
        }

    );

});

/**
 * Created by avc on 2015/6/15.
 */
