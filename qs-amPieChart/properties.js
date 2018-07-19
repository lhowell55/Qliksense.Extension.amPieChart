define([
    './common/amChartLegend',
    './common/amChartBalloon',
    './common/amChartFreeLabels',
    './common/amChartTitles',
    './common/amChartBackground',
    './js/amPieSettings',
    './js/amPieLabels',
], function(amChartLegend,amChartBalloon,amChartFreeLabels,amChartTitles,amChartBackground,amPieSettings,amPieLabels) {

    var dimensions = {
        uses: "dimensions",
        min: 1,
        max: 1
    };

    var measures = {
        uses: "measures",
        min: 1,
        max: 1,
    };

    var sorting = {
        uses: "sorting"
    };

    var settings = {
        uses: "settings",
    };

    var amSettingsBackground = {
        type: "items",
        label: "amChart Settings",
        items: {
            amPieSettings: amPieSettings,
            amChartBackground: amChartBackground,
        }
    };

    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            measures: measures,
            sorting: sorting,
            settings: settings,
            amSettingsBackground: amSettingsBackground,
            amPieLabels:amPieLabels,
            amChartLegend:amChartLegend,
            amChartBalloon:amChartBalloon,
            amChartTitles:amChartTitles,
            amChartFreeLabels:amChartFreeLabels,
        }
    };
});



