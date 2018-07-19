var PieDataBuilder = function(hyperCube,numeral) {
  var self = this;
  self.hyperCube = hyperCube;
  self.dataProvider = [];
  self.numeral = numeral;
};

PieDataBuilder.prototype.addData = function() {
  var self = this;
  self.hyperCube.qDataPages.forEach(function(page, pindex) {
    page.qMatrix.forEach(function(row, rindex) {
      var pieDataRow = new PieDataRow(row, rindex, self.hyperCube, self);
      pieDataRow.addRowData();
    });
  });
};

var PieDataRow = function(row, rindex, hyperCube, dataProvider) {
  var self = this;
  self.dataProvider = dataProvider;
  self.hyperCube = hyperCube;
  self.row = row;
  self.rindex = rindex;
  self.rowObject = {};
};

PieDataRow.prototype.isCellDimension = function(cindex) {
  var self = this;
  return cindex < self.hyperCube.qDimensionInfo.length;
};

PieDataRow.prototype.findCellId = function(isDimension, cindex) {
  var self = this;
  if (isDimension) {
    return self.hyperCube.qDimensionInfo[cindex].cId;
  } else {
    return self.hyperCube.qMeasureInfo[cindex - self.hyperCube.qDimensionInfo.length].cId;
  }
};

PieDataRow.prototype.addRowData = function() {
  var self = this;

  self.row.forEach(function(cell, cindex) {
    var isDimension = self.isCellDimension(cindex);
    var cellId = self.findCellId(isDimension, cindex);
    var PieDataPoint;

    switch (isDimension) {
      // DIMENSION
      case true:
        PieDataPoint = new PieDimensionPoint(self.hyperCube, self.rindex, cell, cindex, cellId,self.dataProvider.numeral);
        PieDataPoint.addAllData();
        self.rowObject = $.extend(self.rowObject, PieDataPoint.values);
        break;

        // MEASURE
      case false:
          PieDataPoint = new PieMeasurePoint(self.hyperCube, self.rindex, cell, cindex, cellId,self.dataProvider.numeral);
          PieDataPoint.addAllData();
          self.rowObject = $.extend(self.rowObject, PieDataPoint.values);
          break;
      }
  });

  self.dataProvider.dataProvider.push(self.rowObject);
};

var PieDataPoint = function(hyperCube, rindex, cell, cindex, cellId,numeral) {
  var self = this;
  self.hyperCube = hyperCube;
  self.cell = cell;
  self.cindex = cindex;
  self.rindex = rindex;
  self.cellId = cellId;
  self.values = {};
  self.numeral = numeral;
};

PieDataPoint.prototype.addPointData = function() {
  var self = this;

  self.values['text' + self.cellId] = self.cell.qText;

  if (self.cell.qState == 'L'){
    var qFormat = self.hyperCube.qMeasureInfo[0].qNumFormat.qFmt
    // if (self.cell.qNum != 'NaN') console.log(self.numeral(self.cell.qNum).format(qFormat));
    self.values['data' + self.cellId] = (self.cell.qNum == 'NaN' ? 0 : self.numeral(self.numeral(self.cell.qNum).format(qFormat)))._value;
    self.values['format' + self.cellId] = qFormat;
  } 
};

PieDataPoint.prototype.addAllData = function() {
  var self = this;
  self.addPointData();
};

var PieDimensionPoint = function(hyperCube, rindex, cell, cindex, cellId,numeral) {
  var self = this;
  PieDataPoint.call(self, hyperCube, rindex, cell, cindex, cellId,numeral);
};

PieDimensionPoint.prototype = Object.create(PieDataPoint.prototype);
PieDimensionPoint.prototype.constructor = PieDimensionPoint;

PieDimensionPoint.prototype.addDimensionData = function() {
  var self = this;
   self.values['elemNumber' + self.cellId] = self.cell.qElemNumber;
   self.values.dimText = self.cell.qText;
};

PieDimensionPoint.prototype.addAllData = function() {
  var self = this;
  self.addPointData();
  self.addDimensionData();
};

var PieMeasurePoint = function(hyperCube, rindex, cell, cindex, cellId,numeral) {
  var self = this;
  PieDataPoint.call(self, hyperCube, rindex, cell, cindex, cellId,numeral);
};

PieMeasurePoint.prototype = Object.create(PieDataPoint.prototype);
PieMeasurePoint.prototype.constructor = PieMeasurePoint;

PieMeasurePoint.prototype.addMeasureData = function() {
  var self = this;
};

PieMeasurePoint.prototype.addAllData = function() {
  var self = this;
  self.addPointData();
};

PieDataBuilder.prototype.addLegend = function(legend,amChart) {
  var self = legend;
  
  self.enabled = false;

  if (amChart.enabled != false) {
    self.enabled = amChart.enabled;
    self.align = amChart.align;
    self.position = amChart.position;
    self.equalWidths = amChart.equalWidths;
    self.labelWidth = amChart.labelWidth;
    self.valueAlign = amChart.valueAlign;
    self.valueWidth = amChart.valueWidth;
    self.reversedOrder =  amChart.reversedOrder;
    self.horizontalGap = amChart.horizontalGap;
    self.verticalGap = amChart.verticalGap;
    self.backgroundAlpha = amChart.backgroundAlpha;
    self.borderAlpha = amChart.borderAlpha;
    self.fontSize = amChart.fontSize;
    self.markerLabelGap =  amChart.markerLabelGap;
    self.markerSize =  amChart.markerSize;
    self.useMarkerColorForLabels = amChart.useMarkerColorForLabels;
    self.useMarkerColorForValues = amChart.useMarkerColorForValues;
    self.spacing = amChart.spacing;
    self.valueText = "";
    self.maxColumns = (amChart.maxColumns == undefined ? 999999 : amChart.maxColumns);

    if (amChart.backgroundColor != '') self.backgroundColor = amChart.backgroundColor;
    if (amChart.color != '') self.color = amChart.color;
    if (amChart.borderColor != '') self.borderColor = amChart.borderColor;
    if (amChart.legendAdjustWidth == false) self.width = amChart.width;

    if(amChart.labelTextPick == '.c.') {
      self.labelText = amChart.labelTextCustom;
    }else self.labelText = "[[title]]";
    
    if (amChart.showValueText != false) {
      if(amChart.valueTextPick == '.c.') {
        self.valueText = amChart.valueTextCustom;
      }else self.valueText = "[[value]]";
    };

    self.autoMargins = amChart.autoMargins;

    if (self.autoMargins != true){
      if (amChart.marginBottom != undefined) self.marginBottom = amChart.marginBottom;
      if (amChart.marginLeft != undefined) self.marginLeft = amChart.marginLeft;
      if (amChart.marginRight != undefined) self.marginRight = amChart.marginRight;
      if (amChart.marginTop != undefined) self.marginTop = amChart.marginTop;
    };

    if (legend.useGraphSettings != true){
      self.markerBorderAlpha =  amChart.markerBorderAlpha;
      self.markerType = amChart.markerType;
      self.markerBorderThickness = amChart.markerBorderThickness;

      if (amChart.markerBorderColor != '') self.markerBorderColor = amChart.markerBorderColor;
    }
  };
};

PieDataBuilder.prototype.addBalloon = function(balloon,amChart) {
  var self = balloon;
  
  self.enabled = false;

  if (amChart.enabled !=false) {
    self.enabled = amChart.enabled;
    self.adjustBorderColor =amChart.adjustBorderColor;
    self.animationDuration = amChart.animationDuration;
    self.borderAlpha = amChart.borderAlpha;
    self.borderThickness = amChart.borderThickness;
    self.cornerRadius = amChart.cornerRadius;
    self.drop = amChart.drop;
    self.fillAlpha =  amChart.fillAlpha;
    self.fixedPosition = amChart.fixedPosition;
    self.fontSize =amChart.fontSize;
    self.horizontalPadding = amChart.horizontalPadding;
    self.pointerOrientation = amChart.pointerOrientation;
    self.pointerWidth = amChart.pointerWidth;
    self.shadowAlpha = amChart.shadowAlpha;
    self.verticalPadding =  amChart.verticalPadding;
    self.maxWidth = amChart.maxWidth;
    self.balloonText = "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";

    if(amChart.textPick == '.c.') self.balloonText = amChart.textCustom;
    if (amChart.borderColor != '') self.borderColor = amChart.borderColor;
    if (amChart.color != '') self.color = amChart.color;
    if (amChart.fillColor != '') self.fillColor = amChart.fillColor;
    if (amChart.shadowColor != '') self.shadowColor = amChart.shadowColor;
  };
  
};

PieDataBuilder.prototype.addChartData = function(chart,amChart) {
  var self = chart;
  
  self.angle = amChart.angle;
  self.depth3D =  amChart.depth3D;
  self.innerRadius =amChart.innerRadius+"%";
  self.alpha =amChart.alpha;
  self.hoverAlpha =amChart.hoverAlpha;
  self.labelsEnabled =amChart.labelsEnabled;
  self.labelText = amChart.labelText;
  self.maxLabelWidth =amChart.maxLabelWidth;
  self.labelRadius =amChart.labelRadius;
  self.fontSize =  amChart.labelFontSize;
  self.handDrawn = amChart.handDrawn;
  self.handDrawScatter= amChart.handDrawScatter;
  self.handDrawThickness= amChart.handDrawThickness;
  self.marginBottom = amChart.marginBottom;
  self.marginLeft = amChart.marginLeft;
  self.marginRight = amChart.marginRight;
  self.marginTop = amChart.marginTop;
  self.backgroundAlpha = amChart.backgroundAlpha;
  self.borderAlpha = amChart.borderAlpha;
  self.pullOutOnlyOne = amChart.pullOutOnlyOne;
  self.pullOutRadius = amChart.pullOutRadius+"%";
  self.radius = amChart.radius+"%";
  self.hideLabelsPercent =  (amChart.hideLabelsPercent == undefined ? 0 : amChart.hideLabelsPercent);
  self.pullOutDuration = amChart.pullOutDuration;
  self.usePrefixes = amChart.usePrefix;
  self.pullOutEffect = amChart.pullOutEffect;
  self.sequencedAnimation =amChart.sequencedAnimation;
  self.startAlpha = amChart.startAlpha;
  self.startDuration =amChart.startDuration;
  self.startEffect = amChart.startEffect;
  self.startRadius = amChart.startRadius+"%";
  self.startAngle = amChart.startAngle;
  self.outlineAlpha = amChart.outlineAlpha;
  self.outlineThickness =amChart.outlineThickness;
  self.labelTickColor = amChart.labelTickColor;
  self.labelTickAlpha = amChart.labelTickAlpha;
  self.fontFamily = "Verdana";

  if(amChart.labelText == '.c.') self.labelText = amChart.labelTextCustom;

  if (amChart.backgroundColor != '') {
    self.backgroundColor = amChart.backgroundColor;
  } else self.backgroundColor = "#FFFFFF";

  if (amChart.borderColor != '') {
    self.borderColor = amChart.borderColor;
  } else self.borderColor = "#000000";

  if (amChart.outlineColor != '') {
    self.outlineColor = amChart.outlineColor;
  } else self.outlineColor = "#FFFFFF";

  if (amChart.baseColor != '') {
    self.baseColor = amChart.baseColor;
  } else self.baseColor = "";

  if (amChart.labelColor != '') {
    self.color = amChart.labelColor;
  } else self.color = "#000000";

  if (amChart.labelTickColor != '') {
    self.labelTickColor = amChart.labelTickColor;
  } else self.labelTickColor = "#000000";

  if ( amChart.fontFamily != undefined) {
    if ( amChart.fontFamily != '.c.') {
      self.fontFamily =  amChart.fontFamily;
    }else{
        if ( amChart.fontFamilyCustom != undefined)  self.fontFamily =  amChart.fontFamilyCustom;
    }
  };

  if(amChart.chartAnimation == false){
    self.startDuration = 0;
  };

  if(amChart.pullOutAnimation == false){
    self.pullOutRadius = 0;
  };
};

PieDataBuilder.prototype.doChartTheme = function(chart,amChart) {
  var self = chart;
  var i;
  var empty;

  //Handel THEMES
  if(amChart.theme != "none") {
    self.color = self.theme.AmChart.color;

    if (amChart.backgroundAlpha == 0) amChart.backgroundAlpha =1;

    self.backgroundColor = self.theme.AmChart.backgroundColor;
    self.legend.backgroundColor = self.theme.AmChart.backgroundColor;
    self.legend.backgroundAlpha = amChart.backgroundAlpha;
    self.backgroundAlpha = amChart.backgroundAlpha;


    if(self.theme.AmChart.fontSize != undefined) {
      self.fontSize = self.theme.AmChart.fontSize;
      self.legend.fontSize = self.theme.AmChart.fontSize;
    };

    if(self.theme.AmChart.handDrawn != undefined) {
      amChart.handDrawn = self.theme.AmChart.handDrawn;
      self.handDrawn = self.theme.AmChart.handDrawn;
      self.fontSize = 13;
      self.legend.fontSize = 13;
    }

    self.outlineAlpha = self.theme.AmSlicedChart.outlineAlpha;
    self.outlineThickness = self.theme.AmSlicedChart.outlineThickness;
    self.labelTickColor = self.theme.AmSlicedChart.labelTickColor;
    self.labelTickAlpha = self.theme.AmSlicedChart.labelTickAlpha;

    if (amChart.useThemeColors == true){
      self.colors = self.theme.AmSlicedChart.colors;
    };

    self.legend.color = self.theme.AmLegend.color;

    if(self.theme.AmLegend.markerBorderAlpha != undefined) self.legend.markerBorderAlpha = self.theme.AmLegend.markerBorderAlpha;
    if(self.theme.AmLegend.markerSize != undefined) self.legend.markerSize = self.theme.AmLegend.markerSize;
    if(self.theme.AmLegend.switchColor != undefined) self.legend.switchColor = self.theme.AmLegend.switchColor;

    
    for (i = 0; i < self.titles.length; i++) { 
      self.titles[i].color =(self.theme.AmChart.color != undefined ? self.theme.AmChart.color : self.titles[i].color); 
    };

    for (i = 0; i < self.allLabels.length; i++) { 
      self.allLabels[i].color =(self.theme.AmChart.color != undefined ? self.theme.AmChart.color : self.allLabels[i].color); 
    };
  };
};


