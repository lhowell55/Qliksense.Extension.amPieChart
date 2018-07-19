//modeled after Niels Lindberg-Poulsen amChart. 
//By Les Howell

//Extension folder (change if you rename the extension folder)
var folder = 'qs-amPieChart';

requirejs.config({
  paths: {
    "amcharts": "/extensions/"+folder+"/library/amcharts",
    "amcharts.pie": "/extensions/"+folder+"/library/pie",
    "amcharts.theme.dark": "/extensions/"+folder+"/library/themes/dark",
    "amcharts.theme.black": "/extensions/"+folder+"/library/themes/black",
    "amcharts.theme.chalk": "/extensions/"+folder+"/library/themes/light",
    "amcharts.theme.light": "/extensions/"+folder+"/library/themes/chalk",
    "amcharts.theme.qlik": "/extensions/"+folder+"/library/themes/qlik",
  },
  shim: {
    "amcharts.pie": {
      deps: ["amcharts", "amcharts.theme.dark", "amcharts.theme.black", "amcharts.theme.chalk", "amcharts.theme.light","amcharts.theme.qlik"],
      exports: "amcharts",
      init: function() {
        AmCharts.isReady = true;
      }
    }
  }
});
define([
  'qlik',
  'jquery',
  './properties',
  './library/numeral',
  './amPieBuilder',
  'amcharts',
  'amcharts.pie',
],
function(qlik, $, props,numeral) {
    return {
      definition: props,
      initialProperties: {
        qHyperCubeDef: {
            qDimensions: [],
            qMeasures: [],
            qInitialDataFetch: [
                {
                    qWidth: 7,
                    qHeight: 1250
                }
            ]
        },
      },
      paint: function ($element, layout) {
          var self = this;
          var hc = layout.qHyperCube;
          var pieData = new PieDataBuilder(layout.qHyperCube,numeral);
          var sliceColors = [];
          var titles =[];
          var allLabels = [];
          var legend = [];
          var chartData = [];
          var balloon = [];
          var balloonText = "";
          var divChart;
  
          pieData.addData();

          //Set themes
          AmCharts.themes.dark = amChartsThemesDark;
          AmCharts.themes.light = amChartsThemesLight;
          AmCharts.themes.black = amChartsThemesBlack;
          AmCharts.themes.chalk = amChartsThemesChalk;
          AmCharts.themes.qlik = amChartsThemesQlik;          

          sliceColors = layout.amChart.colors ? layout.amChart.colors.split(",") : [];

          if(layout.amChart.titles == undefined) layout.amChart.titles = [];
          if(layout.amChart.allLabels == undefined) layout.amChart.allLabels = [];

          pieData.addLegend(legend,layout.amChart.legend);
          pieData.addBalloon(balloon,layout.amChart.balloon);  
          balloonText=balloon.balloonText;        
          pieData.addChartData(chartData,layout.amChart);

          titles = layout.amChart.titles;
          allLabels =JSON.parse(JSON.stringify(layout.amChart.allLabels));

          for (i = 0; i < allLabels.length; i++) { 
            allLabels[i].x = layout.amChart.allLabels[i].x+'%';
            allLabels[i].y = layout.amChart.allLabels[i].y+'%';

            if (allLabels[i].rotation != undefined) {
                if (allLabels[i].reverseRotation != undefined && allLabels[i].reverseRotation == true) {
                if (allLabels[i].rotation != 0) allLabels[i].rotation = allLabels[i].rotation * -1;
              };
            };
          };

          AmCharts.addInitHandler(function(chart){
  
            // format test number to see how it comes out
            var num = 1234.56;
            var format = num.toLocaleString();
            
            // parse the result to find out thousands and decimal separator
            chart.thousandsSeparator = format.replace(/1(.*)2.*/, '$1');
            chart.decimalSeparator = format.replace(/.*4(.*)5.*/, '$1');
          });
          
          if (layout.amChart.theme != "none"){
            divChart = null;
          }else{
            divChart = $element[0];
          };

          var chart = AmCharts.makeChart(divChart, {
            "type": "pie",
            "theme": layout.amChart.theme,
            "colors":sliceColors,
            "titleField": "text"+hc.qDimensionInfo[0].cId,
            "valueField": "data"+hc.qMeasureInfo[0].cId,
            "balloonText": balloonText,
            "angle": chartData.angle,
            "depth3D": chartData.depth3D,
            "innerRadius":chartData.innerRadius,
            "radius":chartData.radius,
            "alpha":chartData.alpha,
            "hideLabelsPercent":chartData.hideLabelsPercent,
            "baseColor":chartData.baseColor,
            "hoverAlpha":chartData.hoverAlpha,
            "labelsEnabled":chartData.labelsEnabled,
            "labelText": chartData.labelText,
            "maxLabelWidth":chartData.maxLabelWidth,
            "labelRadius":chartData.labelRadius,
            "fontFamily": chartData.fontFamily,
            "fontSize":  chartData.fontSize,
            "handDrawn": chartData.handDrawn,
            "handDrawScatter": chartData.handDrawScatter,
            "handDrawThickness": chartData.handDrawThickness,
            "usePrefixes": chartData.usePrefixes,            
            "outlineColor": chartData.outlineColor,
            "marginBottom": chartData.marginBottom,
            "marginLeft": chartData.marginLeft,
            "marginRight": chartData.marginRight,
            "marginTop": chartData.marginTop,
            "backgroundAlpha": chartData.backgroundAlpha,
            "backgroundColor": chartData.backgroundColor,
            "borderAlpha": chartData.borderAlpha,
            "borderColor": chartData.borderColor,
            "pullOutOnlyOne":chartData.pullOutOnlyOne,
            "pullOutRadius": chartData.pullOutRadius,
            "pullOutDuration": chartData.pullOutDuration,
            "pullOutEffect": chartData.pullOutEffect,
            "sequencedAnimation":chartData.sequencedAnimation,
            "startAlpha": chartData.startAlpha,
            "startDuration": chartData.startDuration,
            "startEffect": chartData.startEffect,
            "startRadius": chartData.startRadius,
            "startAngle":chartData.startAngle,
            "color": chartData.labelColor,
            "outlineAlpha":chartData.outlineAlpha,
            "outlineThickness":chartData.outlineThickness,
            "labelTickColor": chartData.labelTickColor,
            "labelTickAlpha":chartData.labelTickAlpha,
            "dataProvider": pieData.dataProvider,
            "titles":titles,
            "allLabels":allLabels,
            "legend": legend,
            "balloon": balloon,
          } );
          
          pieData.doChartTheme(chart,layout.amChart);

          if (divChart === null) chart.write($element[0]);

        //CSS STUFF
        if (chart.handDrawn) {
          $element.find("*").css("font-family", "Kristen ITC");
        } else {
          $element.find("*").css("font-family", chart.fontFamily);
        }

        if (layout.amChart.theme == 'dark'){
          $element.css("background-color", "#3F3F3F");
        } else {
            if (layout.amChart.theme == 'chalk') {
            $element.css("background-color", "#282828");
          } else {
            if (layout.amChart.theme == 'black') {
              $element.css("background-color", "#222222");
            } else {
              $element.css("background-color", "#FFFFFF");
            }
          }
        }
  
       //EVENTS

       chart.addListener("clickSlice", handleClickPieGraphItem);

        function handleClickPieGraphItem(event) {
          if(layout.amChart.interactionQlik == true) {
            var dimValArray = [];
            var dp = event.dataItem.dataContext['elemNumber'+hc.qDimensionInfo[0].cId] ;
            dimValArray.push(dp);
            self.selectValues(0, dimValArray, false);
          }
      }
    }
  }
});

