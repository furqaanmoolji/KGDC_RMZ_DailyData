Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: 'KGDC RMZ Washroom Data . January, 2022'
    },
    subtitle: {
        align: 'left',
        text: 'Click the columns to view dates. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Number of Feedback'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Feedback',
            colorByPoint: true,
            data: [
                {
                    name: 'Very Good',
                    y: 2,
                    drilldown: 'Very Good'
                },
                {
                    name: 'Good',
                    y: 47,
                    drilldown: 'Good'
                },
                {
                    name: 'Ok',
                    y: 12,
                    drilldown: 'Ok'
                },
                {
                    name: 'Poor',
                    y: 1,
                    drilldown: 'Poor'
                },
                
            ]
        }
    ],
    drilldown: {
        breadcrumbs: {
            position: {
                align: 'right'
            }
        },
        series: [
            {
                name: 'Very Good',
                id: 'Very Good',
                data: [
                    [
                        '2nd Jan 13:29, 13:32',
                        2
                    ],
                    [
                        '3rd Jan',
                        0
                    ],
                    [
                        '4th Jan 14:48, 15:01',
                        2
                    ],
                    [
                        '5th Jan',
                        0
                    ],
                    [
                        '6th Jan',
                         0
                    ],
                    [
                        '7th Jan',
                        0
                    ],
                    [
                        '8th Jan',
                        0
                    ],
                    [
                        '9th Jan',
                        0
                    ],
                    [
                        '10th Jan',
                        0
                    ],
                    [
                        '11th Jan',
                        0
                    ],
                    [
                        '12th Jan 18:13',
                        1
                    ],
                    [
                        '13th Jan',
                        0
                    ],
                    [
                        '14th Jan',
                        0
                    ],
                    [
                        '15th Jan',
                        0
                    ],
                    [
                        '16th Jan',
                        0
                    ],
                    [
                        '17th Jan',
                        0
                    ],
                    [
                        '18th Jan',
                        0
                    ],
                    [
                        '19th Jan',
                        0
                    ],
                    [
                        '20th Jan',
                        0
                    ],
                    [
                        '21st Jan',
                        0
                    ],
                    [
                        '22nd Jan',
                        0
                    ],
                    [
                        '23rd Jan',
                        0
                    ],
                    [
                        '24th Jan',
                        0
                    ],
                    [
                        '25th Jan',
                        0
                    ],
                    [
                        '26th Jan',
                        0
                    ],
                    [
                        '27th Jan 13:27',
                        1
                    ]
                ]
            },
            {
                name: 'Good',
                id: 'Good',
                data: [
                    [
                        '2nd Jan 9:13,9:20 ',
                        2
                    ],
                    [
                        '2nd Jan 10:35, 10:44',
                        2
                    ],
                    [
                        '2nd Jan 11:31, 11:35',
                        2
                    ],
                    [
                        '2nd Jan 14:46, 14:49',
                        2
                    ],
                    [
                        '3rd Jan 9:02, 9:08',
                        2
                    ],
                    [
                        '3rd Jan 10:52, 10:58',
                        2
                    ],
                    [
                        '3rd Jan 11:51, 12:01',
                        2
                    ],
                    [
                        '3rd Jan 14:47, 15:05',
                       		2
                    ],
                    [
                        '4th Jan 9:00, 9:03, 10:51, 10:56',
                        4
                    ],
                    [
                        '4th Jan 12:26, 12;33',
                       		2
                    ],
                    [
                        '4th Jan 16:47',
                       		1
                    ],
                    [
                        '4th Jan 18:10, 18:11, 18:14',
                       		3
                    ],
                    [
                        '5th Jan 8:52, 9:19, 9:36',
                       		3
                    ],
                    [
                       '5th Jan 10:43, 10:45',
                        2
                    ],
                    [
                       '5th Jan 12:43',
                        2
                    ],
                    [
                       '6th Jan 9:17, 9:28',
                        2
                    ],
                    [
                       '6th Jan 10:43, 10:53',
                        2
                    ],
                    [
                       '6th Jan 13:04',
                        1
                    ],
                    [
                       '6th Jan 14:40, 14:41, 14:48',
                        3
                    ],
                    [
                       '7th Jan',
                        0
                    ],
                    [
                       '8th Jan ',
                        0
                    ],
                    [
                       '9th Jan 9:07, 9;11',
                        2
                    ],
                    [
                       '9th Jan 10:47',
                        1
                    ],
                    [
                       '9th Jan 13:09, 13:30',
                        2
                    ],
                    [
                       '10th Jan 8:34,8:36',
                        2
                    ],
                    [
                       '10th Jan 11:24',
                        1
                    ],
                    [
                       '11th Jan 8:47',
                        1
                    ],
                    [
                       '11th Jan 9:54, 9:57',
                        2
                    ],
                    [
                       '11th Jan 12:57',
                        1
                    ],
                    [
                       '12th Jan 12:48',
                        1
                    ],
                    [
                       '12th Jan 13:32',
                        1
                    ],
                    [
                       '13th Jan 11:50',
                        1
                    ],
                    [
                       '14th Jan',
                        0
                    ],
                    [
                       '15th Jan',
                        0
                    ],
                    [
                       '16th Jan 8:33, 8:45',
                        2
                    ],
                    [
                       '16th Jan 11:05',
                        1
                    ],
                    [
                       '17th Jan 8:03',
                        1
                    ],
                    [
                       '17th Jan 12:57',
                        1
                    ],
                    [
                       '18th Jan 7:47, 8:25',
                        2
                    ],
                    [
                       '19th Jan 12:01',
                        1
                    ],
                    [
                       '20th Jan 8:10, 8:35',
                        2
                    ],
                    [
                       '21th Jan',
                        0
                    ],
                    [
                       '22nd Jan ',
                        0
                    ],
                    [
                       '23rd Jan 8:55',
                        1
                    ],
                    [
                       '24th Jan 8:25',
                        2
                    ],
                    [
                       '24th Jan 8:41',
                        1
                    ],
                    [
                       '25th Jan 7:44',
                        1
                    ],
                    [
                       '25th Jan 8:17',
                        1
                    ],
                    [
                       '26th Jan',
                        0
                    ],
                    [
                       '27th Jan 7:53',
                        1
                    ],
                    [
                       '27th Jan 11:43',
                        1
                    ],
                    [
                       '28th Jan',
                        0
                    ],
                    [
                       '29th Jan ',
                        0
                    ],
                    [
                       '30th 9:08',
                        1
                    ],
                    [
                       '31th Jan 8:59',
                        1
                    ],
                    [
                       '31th Jan 12:07',
                        1
                    ],
                    
                    
                    
                    [
                        '5th Jan 12:43',
                        1
                    ]
                    
                    
                ]
            },
            {
                name: 'Ok',
                id: 'Ok',
                data: [
                    [
                        '4th Jan 18:18,18:20',
                        2
                    ],
                    [
                        '5th Jan 8:12',
                        1
                    ],
                    [
                        '8th Jan 8:37, 8:41, 9:11 ',
                        3
                    ],
                    [
                        '8th Jan 13:42 ',
                        1
                    ],
                    [
                        '9th Jan',
                        0
                    ],
                    [
                        '10th Jan',
                        0
                    ],
                    [
                        '11th Jan, 8:35',
                        1
                    ],
                    [
                        '12th Jan ',
                        0
                    ],
                    [
                        '13th Jan, 11:55',
                        1
                    ],
                    [
                        '14th Jan ',
                        0
                    ],
                    [
                        '15th Jan ',
                        0
                    ],
                    [
                        '16th Jan ',
                        0
                    ],
                    [
                        '17th Jan, 8:02 ',
                        1
                    ],
                    [
                        '18th Jan ',
                        0
                    ],
                    [
                        '19th Jan ',
                        0
                    ],
                    [
                        '20th Jan ',
                        0
                    ],
                    [
                        '21st Jan ',
                        0
                    ],
                    [
                        '22nd Jan ',
                        0
                    ],
                    [
                        '23rd Jan ',
                        0
                    ],
                    [
                        '24th Jan ',
                        0
                    ],
                    [
                        '25th Jan 11:47, 11:48',
                        2
                    ],
                    [
                        '26th Jan ',
                        0
                    ],
                    [
                        '27th Jan ',
                        0
                    ],
                    [
                        '28th Jan ',
                        0
                    ],
                    [
                        '29th Jan ',
                        0
                    ],
                    [
                        '30th Jan ',
                        0
                    ]
                    
                ]
            },
           
           
            
        ]
    }
});