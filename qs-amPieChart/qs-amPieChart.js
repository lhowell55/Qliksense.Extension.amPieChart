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
    "amcharts.theme.patterns": "/extensions/"+folder+"/library/themes/patterns",
  },
  shim: {
    "amcharts.pie": {
      deps: ["amcharts", "amcharts.theme.dark", "amcharts.theme.black", "amcharts.theme.chalk", "amcharts.theme.light","amcharts.theme.patterns"],
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

          pieData.addData();

          //Set themes
          AmCharts.themes.dark = amChartsThemesDark;
          AmCharts.themes.light = amChartsThemesLight;
          AmCharts.themes.black = amChartsThemesBlack;
          AmCharts.themes.chalk = amChartsThemesChalk;
          AmCharts.themes.patterns = amChartsThemesPatterns;

          sliceColors = layout.amChart.colors ? layout.amChart.colors.split(",") : [];

          if(layout.amChart.titles == undefined) layout.amChart.titles = [];
          if(layout.amChart.allLabels == undefined) layout.amChart.allLabels = [];

          if(layout.amChart.chartAnimation == undefined || layout.amChart.chartAnimation == false){
            layout.amChart.startDuration = 0;
          };

          if(layout.amChart.pullOutAnimation == undefined || layout.amChart.pullOutAnimation == false){
            layout.amChart.pullOutRadius = 0;
          };

          if(layout.amChart.labelText == 'C') layout.amChart.labelText = layout.amChart.labelTextCustom;
          if(layout.amChart.legend.labelText == 'C') layout.amChart.legend.labelText = layout.amChart.legend.labelTextCustom;
          if(layout.amChart.legend.valueText == 'C') layout.amChart.legend.valueText = layout.amChart.legend.valueTextCustom;
          if(layout.amChart.legend.maxColumns == undefined ||layout.amChart.legend.maxColumns == 0) layout.amChart.legend.maxColumns=99999;

          if (layout.amChart.balloon.enabled != undefined){
            if(layout.amChart.balloon.text == 'C') layout.amChart.balloon.text = layout.amChart.balloon.textCustom;
          };

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
          
          var chart = AmCharts.makeChart(null, {
            "type": "pie",
            "theme": layout.amChart.theme,
            "balloonText": layout.amChart.balloon.text,
            "angle": (layout.amChart.angle == undefined ? 0 : layout.amChart.angle),
            "depth3D": (layout.amChart.depth3D == undefined ? 0 : layout.amChart.depth3D),
            "innerRadius":(layout.amChart.innerRadius == undefined ? "0%" : layout.amChart.innerRadius)+"%",
            "alpha":(layout.amChart.alpha == undefined ? 1 : layout.amChart.alpha),
            "baseColor":(layout.amChart.baseColor == undefined ? "" : layout.amChart.baseColor),
            "colors":sliceColors,
            "hoverAlpha":(layout.amChart.hoverAlpha == undefined ? 1 : layout.amChart.hoverAlpha),

            "labelsEnabled":(layout.amChart.labelsEnabled == undefined ? false : layout.amChart.labelsEnabled),
            "labelText": (layout.amChart.labelText == undefined ? "[[title]]: [[percents]]%" : layout.amChart.labelText),
            "maxLabelWidth":(layout.amChart.maxLabelWidth == undefined ? 0 : layout.amChart.maxLabelWidth), 
            "labelRadius":(layout.amChart.labelRadius == undefined ? 0 : layout.amChart.labelRadius),
            "fontFamily": (layout.amChart.labelFontFamily == undefined ? "Verdana" : layout.amChart.labelFontFamily),
            "fontSize":  (layout.amChart.labelFontSize == undefined ? 12 : layout.amChart.labelFontSize),
            "handDrawn": (layout.amChart.handDrawn == undefined ? false : layout.amChart.handDrawn),

            "outlineColor": (layout.amChart.outlineColor == undefined ? "" : layout.amChart.outlineColor),

            "marginBottom": (layout.amChart.marginBottom == undefined ? 0 : layout.amChart.marginBottom),
            "marginLeft": (layout.amChart.marginLeft == undefined ? 0 : layout.amChart.marginLeft),
            "marginRight": (layout.amChart.marginRight == undefined ? 0 : layout.amChart.marginRight),
            "marginTop": (layout.amChart.marginTop == undefined ? 0 : layout.amChart.marginTop),

            "backgroundAlpha": (layout.amChart.backgroundAlpha == undefined ? 1 : layout.amChart.backgroundAlpha),
            "backgroundColor": (layout.amChart.backgroundColor == undefined ? "#FFFFFF" : layout.amChart.backgroundColor),
            "borderAlpha": (layout.amChart.borderAlpha == undefined ? 1 : layout.amChart.borderAlpha),
            "borderColor": (layout.amChart.borderColor == undefined ? "#000000" : layout.amChart.borderColor),
            
            "pullOutOnlyOne":(layout.amChart.pullOutOnlyOne == undefined ? false : layout.amChart.pullOutOnlyOne),
            "pullOutRadius": (layout.amChart.pullOutRadius == undefined ? "20%" : layout.amChart.pullOutRadius)+"%",
            "pullOutDuration": (layout.amChart.pullOutDuration == undefined ? 1 : layout.amChart.pullOutDuration),
            "pullOutEffect": (layout.amChart.pullOutEffect == undefined ? "bounce" : layout.amChart.pullOutEffect),

            "sequencedAnimation":(layout.amChart.sequencedAnimation == undefined ? false : layout.amChart.sequencedAnimation),
            "startAlpha": (layout.amChart.startAlpha == undefined ? 0 : layout.amChart.startAlpha/100),
            "startDuration": (layout.amChart.startDuration == undefined ? 1 : layout.amChart.startDuration),
            "startEffect": (layout.amChart.startEffect == undefined ? "bounce" : layout.amChart.startEffect),
            "startRadius": (layout.amChart.startRadius == undefined ? "500%" : layout.amChart.startRadius)+"%",
            
            "titles":titles,
            "allLabels":allLabels,

            "dataProvider": pieData.dataProvider,
            "titleField": "text"+hc.qDimensionInfo[0].cId,
            "valueField": "data"+hc.qMeasureInfo[0].cId,
            "startAngle":(layout.amChart.startAngle == undefined ? 0 : layout.amChart.startAngle),
            "legend": {
              "enabled": (layout.amChart.legend.enabled == undefined ? true : layout.amChart.legend.enabled),
              "align": (layout.amChart.legend.align == undefined ? "center" : layout.amChart.legend.align),
              "position": (layout.amChart.legend.position == undefined ? "bottom" : layout.amChart.legend.position),
              "equalWidths": (layout.amChart.legend.equalWidths == undefined ? true : layout.amChart.legend.equalWidths),
              "labelText": (layout.amChart.legend.labelText == undefined ? "[[title]]" : layout.amChart.legend.labelText),
              "labelWidth": (layout.amChart.legend.labelWidth == undefined ? 100 : layout.amChart.legend.labelWidth),
              "useGraphSettings":(layout.amChart.legend.useGraphSettings == undefined ? true : layout.amChart.legend.useGraphSettings),
              "valueAlign": (layout.amChart.legend.valueAlign == undefined ? "right" : layout.amChart.legend.valueAlign),
              "valueText": (layout.amChart.legend.valueText == undefined ? "[[value]]" : layout.amChart.legend.valueText),
              "valueWidth": (layout.amChart.legend.valueWidth == undefined ? 100 : layout.amChart.legend.valueWidth),
              "maxColumns": (layout.amChart.legend.maxColumns == undefined ? 999999 : layout.amChart.legend.maxColumns),
              "reversedOrder": (layout.amChart.legend.reversedOrder == undefined ? false : layout.amChart.legend.reversedOrder),
              "horizontalGap":(layout.amChart.legend.horizontalGap == undefined ? 0 : layout.amChart.legend.horizontalGap),
              "verticalGap":(layout.amChart.legend.verticalGap == undefined ? 0 : layout.amChart.legend.verticalGap),
              "backgroundAlpha":(layout.amChart.legend.backgroundAlpha == undefined ? 0 : layout.amChart.legend.backgroundAlpha),
              "backgroundColor":(layout.amChart.legend.backgroundColor == undefined ? "#FFFFFF" : layout.amChart.legend.backgroundColor),
              "borderAlpha":(layout.amChart.legend.borderAlpha == undefined ? 0 : layout.amChart.legend.borderAlpha),
              "borderColor":(layout.amChart.legend.borderColor == undefined ? "#000000" : layout.amChart.legend.borderColor),
              "color":(layout.amChart.legend.color == undefined ? "#000000" : layout.amChart.legend.color),
              "fontSize":(layout.amChart.legend.fontSize == undefined ? 11 : layout.amChart.legend.fontSize),
              "markerBorderAlpha": (layout.amChart.legend.markerBorderAlpha == undefined ? 0 : layout.amChart.legend.markerBorderAlpha),
              "markerBorderColor": (layout.amChart.legend.markerBorderColor == undefined ? "#000000" : layout.amChart.legend.markerBorderColor),
              "markerLabelGap": (layout.amChart.legend.markerLabelGap == undefined ? 5 : layout.amChart.legend.markerLabelGap),
              "markerSize": (layout.amChart.legend.markerSize == undefined ? 16 : layout.amChart.legend.markerSize),
              "useMarkerColorForLabels": (layout.amChart.legend.useMarkerColorForLabels == undefined ? false : layout.amChart.legend.useMarkerColorForLabels),
              "useMarkerColorForValues": (layout.amChart.legend.useMarkerColorForValues == undefined ? false : layout.amChart.legend.useMarkerColorForValues),
              "markerType": (layout.amChart.legend.markerType == undefined ? "circle" : layout.amChart.legend.markerType),
              "markerBorderThickness":(layout.amChart.legend.markerBorderThickness == undefined ? 1 : layout.amChart.legend.markerBorderThickness),
            },
            "balloon": {
              "enabled":  (layout.amChart.balloon.enabled == undefined ? true : layout.amChart.balloon.enabled),
              "adjustBorderColor": (layout.amChart.balloon.adjustBorderColor == undefined ? true : layout.amChart.balloon.adjustBorderColor),
              "animationDuration": (layout.amChart.balloon.animationDuration == undefined ? 0 : layout.amChart.balloon.animationDuration),
              "borderAlpha": (layout.amChart.balloon.borderAlpha == undefined ? 1 : layout.amChart.balloon.borderAlpha),
              "borderColor": (layout.amChart.balloon.borderColor == undefined ? "#FFFFFF" : layout.amChart.balloon.borderColor),
              "borderThickness": (layout.amChart.balloon.borderThickness == undefined ? 2 : layout.amChart.balloon.borderThickness),
              "color": (layout.amChart.balloon.color == undefined ? "#000000" : layout.amChart.balloon.color),
              "cornerRadius": (layout.amChart.balloon.cornerRadius == undefined ? 0 : layout.amChart.balloon.cornerRadius),
              "drop": (layout.amChart.balloon.drop == undefined ? false : layout.amChart.balloon.drop),
              "fillAlpha": (layout.amChart.balloon.fillAlpha == undefined ? 1 : layout.amChart.balloon.fillAlpha),
              "fillColor": (layout.amChart.balloon.fillColor == undefined ? "#FFFFFF" : layout.amChart.balloon.fillColor),
              "fixedPosition": (layout.amChart.balloon.fixedPosition == undefined ? true : layout.amChart.balloon.fixedPosition),
              "fontSize": (layout.amChart.balloon.fontSize == undefined ? 11 : layout.amChart.balloon.fontSize),
              "horizontalPadding": (layout.amChart.balloon.horizontalPadding == undefined ? 8 : layout.amChart.balloon.horizontalPadding),
              "maxWidth": (layout.amChart.balloon.maxWidth == undefined ? 9999 : layout.amChart.balloon.maxWidth),
              "pointerOrientation":(layout.amChart.balloon.pointerOrientation == undefined ? "down" : layout.amChart.balloon.pointerOrientation),
              "pointerWidth": (layout.amChart.balloon.pointerWidth == undefined ? 6 : layout.amChart.balloon.pointerWidth),
              "shadowAlpha": (layout.amChart.balloon.shadowAlpha == undefined ? 0 : layout.amChart.balloon.shadowAlpha),
              "shadowColor": (layout.amChart.balloon.shadowColor == undefined ?  "#000000" : layout.amChart.balloon.shadowColor),
              "showBullet": (layout.amChart.balloon.showBullet == undefined ? false : layout.amChart.balloon.showBullet),
              "verticalPadding": (layout.amChart.balloon.verticalPadding == undefined ? 4 : layout.amChart.balloon.verticalPadding),
            },     
            "color": (layout.amChart.labelColor == undefined ? "#000000" : layout.amChart.labelColor),
            "outlineAlpha":(layout.amChart.outlineAlpha == undefined ? 1 : layout.amChart.outlineAlpha),
            "outlineThickness":(layout.amChart.outlineThickness == undefined ? 0 : layout.amChart.outlineThickness),
            "labelTickColor": (layout.amChart.labelTickColor == undefined ? "#000000" : layout.amChart.labelTickColor),
            "labelTickAlpha":(layout.amChart.labelTickAlpha == undefined ? 1 : layout.amChart.labelTickAlpha),
          } );
          

          //Handel THEMES
          if(layout.amChart.theme != "none") {
            chart.color = chart.theme.AmChart.color;

            if(layout.amChart.backgroundAlpha == undefined || layout.amChart.backgroundAlpha == 0) layout.amChart.backgroundAlpha =1;

            chart.backgroundColor = chart.theme.AmChart.backgroundColor;
            chart.legend.backgroundColor = chart.theme.AmChart.backgroundColor;
            chart.legend.backgroundAlpha = layout.amChart.backgroundAlpha;
            chart.backgroundAlpha = layout.amChart.backgroundAlpha;


            if(chart.theme.AmChart.fontSize != undefined) {
                chart.fontSize = chart.theme.AmChart.fontSize;
                chart.legend.fontSize = chart.theme.AmChart.fontSize;
            };

            if(chart.theme.AmChart.handDrawn != undefined) {
              layout.amChart.handDrawn = chart.theme.AmChart.handDrawn;
              chart.handDrawn = chart.theme.AmChart.handDrawn;
              chart.fontSize = 13;
              chart.legend.fontSize = 13;
          }

            chart.colors = chart.theme.AmSlicedChart.colors;
            chart.outlineAlpha = chart.theme.AmSlicedChart.outlineAlpha;
            chart.labelTickColor = chart.theme.AmSlicedChart.labelTickColor;
            chart.labelTickAlpha = chart.theme.AmSlicedChart.labelTickAlpha;

            chart.legend.color = chart.theme.AmLegend.color;
            if(chart.theme.AmLegend.markerBorderAlpha != undefined) chart.legend.markerBorderAlpha = chart.theme.AmLegend.markerBorderAlpha;
            if(chart.theme.AmLegend.markerSize != undefined) chart.legend.markerSize = chart.theme.AmLegend.markerSize;
            if(chart.theme.AmLegend.switchColor != undefined) chart.legend.switchColor = chart.theme.AmLegend.switchColor;

          };

          chart.write($element[0]);

          //CSS STUFF
          if (layout.amChart.handDrawn) {
            $element.find("*").css("font-family", "Kristen ITC");
          } else {
            $element.find("*").css("font-family", layout.amChart.labelFontFamily);
          }

          if (layout.amChart.theme == 'dark'){
            $element.css("background-color", "#3F3F3F");
            } else {
              if(layout.amChart.theme == 'chalk') {
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

          if(layout.amChart.interactionQlik == true) {
            chart.addListener("clickSlice", handleClickPieGraphItem);

            function handleClickPieGraphItem(event) {
              var dimValArray = [];
              var dp = event.dataItem.dataContext['elemNumber'+hc.qDimensionInfo[0].cId] ;
              dimValArray.push(dp);
              self.selectValues(0, dimValArray, false);
            }
          }
          
          return qlik.Promise.resolve();
        }
      }
});

