// import React from 'react';
// import * as echarts from 'echarts';
// import { useEffect } from 'react';

// overviewBarChart() {
//     let selected_years = JSON.parse(localStorage.getItem("selected_years") || '');
//     let selectedYear = this.year;
//     if (selected_years && selected_years.length == 2) {
//         selectedYear = selected_years.toString();
//     }
//     let data = {
//         countries: this.countries,
//         developmentId: this.developmentId,
//         governanceId: this.governance,
//         ultimateId: this.ultimateId,
//         taxonomyId: this.taxonomy_id
//     };

//     this._common.getOverviewBarChart(data).subscribe((result) => {
//         this.bar_chart = result;
//         this.bar_chart_new = [];
//         let res0 = Math.round(result[0].percentage);
//         let res1 = Math.round(result[1].percentage);
//         let bar_data = {
//             text: ' ' + (result[0].country_name.length > 11 ? result[0].iso_code  : result[0].country_name)  + ' - ' + res0 + '%,\n',
//             comIncome:
//             (result[1].country_name.length > 11 ? result[1].iso_code  : result[1].country_name)  + ' - ' + res1 + '%',
//             compText: result[0].country_name + ', ' + result[1].country_name,
//             img: './assets/images/line.png',
//             per: res0,
//         };

//         if (res0 <= 30 && res1 <= 30) {
//             this.bar_chart_new.push(bar_data);
//         }
//         if (
//             res0 > 30 &&
//             res0 <= 60 &&
//             res1 > 30 &&
//             res1 <= 60
//         ) {
//             this.bar_chart_new.push(bar_data);
//         } else if (
//             res0 > 60 &&
//             res0 <= 80 &&
//             res1 > 60 &&
//             res1 <= 80
//         ) {
//             this.bar_chart_new.push(bar_data);
//         } else if (
//             res0 > 80 &&
//             res0 <= 100 &&
//             res1 > 80 &&
//             res1 <= 100
//         ) {
//             this.bar_chart_new.push(bar_data);
//         }

//         this.governance_name = result[0].governance_name;
//         this.BarChart();
//     });
// }


// const BarChart = () =>{
//      const bar=() =>{
//         if (this.bar_chart) {
//             var chartDom = document.getElementById('mainchart56');
//             var myChart = echarts.init(chartDom);
//             var option;

//             let data = [
//                 {
//                     name: '81%-100%',
//                     lname: '81%-100%',
//                     tooltipName: '',
//                     value: 100,
//                     labelLine: { show: false },
//                     label: { show: false },
//                     emphasis: { label: { show: false } },
//                     tooltip: { show: false },
//                     itemStyle: {
//                         borderRadius: 5,
//                         color: "#220055",
//                     }
//                 },
//                 {
//                     name: '61%-80%',
//                     lname: '61%-80%',
//                     tooltipName: '',
//                     value: 80,
//                     labelLine: { show: false },
//                     label: { show: false },
//                     emphasis: { label: { show: false } },
//                     tooltip: { show: false },
//                     itemStyle: {
//                         borderRadius: 5,
//                         color: "#3678B5",
//                     }
//                 },
//                 {
//                     name: '31%-60%',
//                     lname: '31%-60%',
//                     tooltipName: '',
//                     value: 60,
//                     labelLine: { show: false },
//                     label: { show: false },
//                     emphasis: { label: { show: false } },
//                     tooltip: { show: false },
//                     itemStyle: {
//                         borderRadius: 5,
//                         color: "#5FE7B1",
//                     }
//                 },
//                 {
//                     name: '0%-30%',
//                     lname: '0%-30%',
//                     value: 30,
//                     labelLine: { show: false },
//                     label: { show: false },
//                     emphasis: {
//                         label: { show: false }
//                     },
//                     tooltip: { show: false },
//                     itemStyle: {
//                         borderRadius: 5,
//                         color: "#fa8e15",
//                     }
//                 },
//             ];

//             if (this.bar_chart_new.length == 1) {
//                 this.bar_chart_new.forEach((element) => {
//                     let bar_data_same = {
//                         name: element.text + " " + element.comIncome,
//                         tooltipName: element.text + " " + element.comIncome,
//                         labelLine: { show: true },
//                         label: { show: true },
//                         tooltip: { show: true },
//                         emphasis: { label: { show: true } },
//                     };
//                     if (element.per <= 30) {
//                         data[3] = { ...data[3], ...bar_data_same };
//                     } else if (element.per >= 31 && element.per <= 60) {
//                         data[2] = { ...data[2], ...bar_data_same };
//                     } else if (element.per >= 61 && element.per <= 80) {
//                         data[1] = { ...data[1], ...bar_data_same };
//                     } else if (element.per >= 81 && element.per <= 100) {
//                         data[0] = { ...data[0], ...bar_data_same };
//                     }
//                 });
//             } else {
//                 this.bar_chart.forEach((element) => {
//                     let bar_data = {
//                         name: (element.country_name.length > 11 ? element.iso_code : element.country_name) + ' - ' + Math.round(element.percentage) + '%',
//                         tooltipName: element.country_name + ' - ' + Math.round(element.percentage) + '%',
//                         labelLine: { show: true },
//                         label: {
//                             show: true
//                         },
//                         emphasis: {
//                             label: {
//                                 show: true
//                             }
//                         },
//                         tooltip: {
//                             show: true
//                         },
//                     };
//                     if (element.percentage <= 30) {
//                         data[3] = { ...data[3], ...bar_data };
//                     } else if (element.percentage >= 31 && element.percentage <= 60) {
//                         data[2] = { ...data[2], ...bar_data };
//                     } else if (element.percentage >= 61 && element.percentage <= 80) {
//                         data[1] = { ...data[1], ...bar_data };
//                     } else if (element.percentage >= 81 && element.percentage <= 100) {
//                         data[0] = { ...data[0], ...bar_data };
//                     }
//                 });
//             }

//             option = {
//                 legend: {
//                     bottom: -5,
//                     left: 'center',
//                     icon: 'circle',
//                     show: data ? true : false,
//                     formatter: data ? (name) => {
//                         let itemValue = data.filter((item) => item.name === name)
//                         return `${itemValue[0].lname}`
//                     } : "{lname}",
//                 },
//                 // tooltip: {
//                 //     trigger: 'item',
//                 //     formatter: data ? (name: any) => {
//                 //         let itemValue = data.filter((item: any) => item.name === name)
//                 //         if (name.data.tooltipName) {
//                 //             return `${name.data.tooltipName}`;
//                 //         }
//                 //         return false;
//                 //     } : "{name}",
//                 // },
//                 series: [
//                     {
//                         name: '',
//                         type: 'pie',
//                         radius: [20, 110],
//                         center: ['50%', '50%'],
//                         roseType: 'area',
//                         avoidLabelOverlap: true,
//                         itemStyle : {
//                             normal : {
//                                 label : {
//                                     show : true,
//                                     position: 'outer',
//                                     alignTo: 'labelLine',
//                                     overflow:'break',
//                                     margin: 0,
//                                     padding:2
//                                 },
//                                 labelLine : {
//                                     show : true,
//                                 }
//                             }
//                         },
//                         data: data.reverse()
//                     }
//                 ]
//             };

//             option && myChart.setOption(option);

//             // rezise when sidebar collapse
//             var prevWidth;
//             new ResizeObserver(changes => {
//                 for(const change of changes){
//                     if(change.contentRect.width === prevWidth) return
//                         prevWidth = change.contentRect.width
//                         myChart.resize();
//                 }
//             }).observe(chartDom)
            
//         }
//         this.loading = true;
//     }

//     useEffect(() => {
//       bar();
//     }, [])
    
//     return ( 
//         <div>
//             <div id='mainchart56'></div>
//         </div>
//      );
// }
 
// export default BarChart;