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

