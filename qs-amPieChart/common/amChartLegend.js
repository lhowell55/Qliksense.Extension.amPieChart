define([
], function() {
    'use strict';

    var labelTextHelp = "Label text.\nThe text which will be displayed in the legend.\nTag [[title]] will be replaced with the title of the graph.\nYou can prefix text data as wll\n//example: Suff [[title]] here";
    var valueTextHelp = "Value text.\nThe text which will be displayed in the value portion of the legend.\nYou can use tags like:[[value]],[[percents]]\nexample: [[percents]]%";

    //Settings
    var settings = {
        type: "items",
        label: "Settings",
        items: {
            legendEnabled: {
                type: "boolean",
                component: "switch",
                label: "Show Chart Legend",
                ref: "amChart.legend.enabled",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false,
            },
            legendPosition: {
                type: "string",
                component: "dropdown",
                label: "Legend Position",
                ref: "amChart.legend.position",
                options: [{
                    value: "bottom",
                    label: "bottom"
                }, {
                    value: "top",
                    label: "top"
                }, {
                    value: "left",
                    label: "left"
                },
                {
                    value: "right",
                    label: "right"
                }],
                defaultValue: "bottom",
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendAlign: {
                type: "string",
                component: "dropdown",
                label: "Legend Align",
                ref: "amChart.legend.align",
                options: [{
                    value: "left",
                    label: "left"
                }, {
                    value: "center",
                    label: "center"
                },
                {
                    value: "right",
                    label: "right"
                }],
                defaultValue: "center",
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendReversedOrder: {
                type: "boolean",
                component: "switch",
                label: "Reversed Legend Order",
                ref: "amChart.legend.reversedOrder",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendMaxColumns: {
                type: "number",
                label: "Maximun # of Columns",
                ref: "amChart.legend.maxColumns",
                component: "slider",
                min: 1,
                max: 20,
                step: 0.01,
                defaultValue: 10,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendEqualWidths: {
                type: "boolean",
                component: "switch",
                label: "Legend Label Equal Widths",
                ref: "amChart.legend.equalWidths",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendFontSize: {
                ref: "amChart.legend.fontSize",
                label: "Legend Font Size",
                type: "number",
                expression: "optional",
                defaultValue: 11,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendLabelTextPick: {
                type: "string",
                component: "buttongroup",
                label: "Legend Label Text",
                ref: "amChart.legend.labelTextPick",
                options: [{
                    value: "d",
                    label: "Default",
                    tooltip: "Default text"
                }, {
                    value: ".c.",
                    label: "Custom",
                    tooltip: labelTextHelp,
                }],
                defaultValue: "d",
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendLabelTextCustom: {
                type: "string",
                label: "Legend Label Custom Text",
                ref: "amChart.legend.labelTextCustom",
                defaultValue: "[[title]]",
                show: function(data) {
                    return (data.amChart.legend.labelTextPick =='.c.')
                }        
            },
            legendColorText: {
                type: "string",
                label: "Legend Label Color",
                ref: "amChart.legend.color",
                expression: "optional",
                defaultValue: "#000000",
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },
            },
            legendLabelWidth: {
                type: "number",
                label: "Legend Label Width",
                ref: "amChart.legend.labelWidth",
                component: "slider",
                min: 50,
                max: 350,
                step: 0.01,
                defaultValue: 100,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendValueEnabled: {
                type: "boolean",
                component: "switch",
                label: "Show Legend Value Text",
                ref: "amChart.legend.showValueText",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendValueText: {
                type: "string",
                component: "buttongroup",
                label: "Legend Value Text",
                ref: "amChart.legend.valueTextPick",
                options: [{
                    value: "d",
                    label: "Default",
                    tooltip: "Default text"
                }, {
                    value: ".c.",
                    label: "Custom",
                    tooltip: valueTextHelp,
                }],
                defaultValue: "d",
                show: function(data) {
                    return (data.amChart.legend.enabled != false && data.amChart.legend.showValueText != false)
                }        
            },
            legendValueTextCustom: {
                type: "string",
                label: "Legend Value Custom Text",
                expression: "optional",
                ref: "amChart.legend.valueTextCustom",
                show: function(data) {
                    return (data.amChart.legend.enabled != false && data.amChart.legend.showValueText != false && data.amChart.legend.valueTextPick =='.c.')
                }        
            },
            legendValueWidth: {
                type: "number",
                label: "Legend Value Width",
                ref: "amChart.legend.valueWidth",
                component: "slider",
                min: 50,
                max: 350,
                step: 0.01,
                defaultValue: 50,
                show: function(data) {
                    return (data.amChart.legend.enabled != false && data.amChart.legend.showValueText != false)
                }        
            },
            legendValueAlign: {
                type: "string",
                component: "dropdown",
                label: "Legend Value Align",
                ref: "amChart.legend.valueAlign",
                options: [{
                    value: "left",
                    label: "left"
                }, {
                    value: "right",
                    label: "right"
                }],
                defaultValue: "right",
                show: function(data) {
                    return (data.amChart.legend.enabled != false && data.amChart.legend.showValueText != false)
                }        
            },
            legendSpacing: {
                type: "number",
                label: "Space betwen Legends",
                ref: "amChart.legend.spacing",
                component: "slider",
                min: 0,
                max: 75,
                step: 0.01,
                defaultValue: 20,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendVerticalGap: {
                type: "number",
                label: "Legend Vertical Gap",
                ref: "amChart.legend.verticalGap",
                component: "slider",
                min: 0,
                max: 75,
                step: 0.01,
                defaultValue: 10,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendHorizontalGap: {
                type: "number",
                label: "Legend Horizontal Gap",
                ref: "amChart.legend.horizontalGap",
                component: "slider",
                min: 0,
                max: 150,
                step: 0.01,
                defaultValue: 0,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendAdjustWidth: {
                type: "boolean",
                component: "switch",
                label: "Auto Adjust Legend Width",
                ref: "amChart.legend.legendAdjustWidth",
                options: [{
                    value: true,
                    label: "Yes"
                }, {
                    value: false,
                    label: "No"
                }],
                defaultValue: true,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendWidth: {
                type: "number",
                label: "Legend Width",
                ref: "amChart.legend.width",
                component: "slider",
                min: 10,
                max: 1200,
                step: 0.01,
                defaultValue: 300,
                show: function(data) {
                    return (data.amChart.legend.enabled != false && data.amChart.legend.legendAdjustWidth == false)
                },        
            },
            legendBackgroundColorText: {
                type: "string",
                label: "Legend Background Color",
                ref: "amChart.legend.backgroundColor",
                expression: "optional",
                defaultValue: "#FFFFFF",
                show: function(data) {
                    return (data.amChart.legend.enabled  != false)
                },
            },
            legendBackgroundAlpha: {
                type: "number",
                component: "slider",
                label: "Legend Background Opacity",
                ref: "amChart.legend.backgroundAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 0,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendBorderColorText: {
                type: "string",
                label: "Legend Border Color",
                ref: "amChart.legend.borderColor",
                expression: "optional",
                defaultValue: "#FFFFFF",
                show: function(data) {
                    return (data.amChart.legend.enabled  != false)
                },
            },
            legendBorderAlpha: {
                type: "number",
                component: "slider",
                label: "Legend Border Opacity",
                ref: "amChart.legend.borderAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 0,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendMarkerSize: {
                type: "number",
                label: "Marker Size",
                ref: "amChart.legend.markerSize",
                component: "slider",
                min: 0,
                max: 50,
                step: 0.01,
                defaultValue: 16,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendMarkerType: {
                type: "string",
                component: "dropdown",
                label: "Marker Type",
                ref: "amChart.legend.markerType",
                options: [{
                    value: "circle",
                    label: "circle"
                }, {
                    value: "square",
                    label: "square"
                },
                {
                    value: "diamond",
                    label: "diamond"
                },
                {
                    value: "triangleUp",
                    label: "triangleUp"
                },
                {
                    value: "triangleDown",
                    label: "triangleDown"
                },
                {
                    value: "triangleLeft",
                    label: "triangleLeft"
                },
                {
                    value: "bubble",
                    label: "bubble"
                },
                {
                    value: "line",
                    label: "line"
                }],
                defaultValue: "circle",
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendMarkerBorderColorText: {
                type: "string",
                label: "Marker Border Color",
                ref: "amChart.legend.markerBorderColor",
                expression: "optional",
                defaultValue: "#FFFFFF",
                show: function(data) {
                    return (data.amChart.legend.enabled  != false)
                },
            },
            legendMarkerBorderAlpha: {
                type: "number",
                component: "slider",
                label: "Marker Border Opacity",
                ref: "amChart.legend.markerBorderAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 0,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendMarkerBorderThickness: {
                type: "number",
                label: "Marker Border Thickness",
                ref: "amChart.legend.markerBorderThickness",
                component: "slider",
                min: 0,
                max: 20,
                step: 0.01,
                defaultValue: 1,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendMarkerLabelGap: {
                type: "number",
                label: "Label Gap",
                ref: "amChart.legend.markerLabelGap",
                component: "slider",
                min: 0,
                max: 20,
                step: 0.01,
                defaultValue: 5,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendUseMarkerColorForLabels: {
                type: "boolean",
                component: "switch",
                label: "Use Marker Color for Labels",
                ref: "amChart.legend.useMarkerColorForLabels",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendUseMarkerColorForValue: {
                type: "boolean",
                component: "switch",
                label: "Use Marker Color for Values",
                ref: "amChart.legend.useMarkerColorForValues",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendAutoMargins: {
                type: "boolean",
                component: "switch",
                label: "Use Legend Auto Margins",
                ref: "amChart.legend.autoMargins",
                options: [{
                    value: true,
                    label: "On"
                },
                {
                    value: false,
                    label: "Off"
                }],
                defaultValue: true,
                show: function(data) {
                    return (data.amChart.legend.enabled != false)
                },        
            },
            legendMarginTop: {
                type: "number",
                label: "Legend Margin Top",
                ref: "amChart.legend.marginTop",
                component: "slider",
                min: 0,
                max: 200,
                step: 0.01,
                defaultValue: 0,
                show: function(data) {
                    return (data.amChart.legend.autoMargins != undefined && data.amChart.legend.autoMargins != true)
                },
            },
            legendMarginBottom: {
                type: "number",
                label: "Legend Margin Bottom",
                ref: "amChart.legend.marginBottom",
                component: "slider",
                min: 0,
                max: 200,
                step: 0.01,
                defaultValue: 0,
                show: function(data) {
                    return (data.amChart.legend.autoMargins != undefined && data.amChart.legend.autoMargins != true)
                },
            },
            legendMarginLeft: {
                type: "number",
                label: "Legend Margin Left",
                ref: "amChart.legend.marginLeft",
                component: "slider",
                min: 0,
                max: 800,
                step: 0.01,
                defaultValue: 20,
                show: function(data) {
                    return (data.amChart.legend.autoMargins != undefined && data.amChart.legend.autoMargins != true)
                },
            },
            legendMarginRight: {
                type: "number",
                label: "Legend Margin Right",
                ref: "amChart.legend.marginRight",
                component: "slider",
                min: 0,
                max: 800,
                step: 0.01,
                defaultValue: 20,
                show: function(data) {
                    return (data.amChart.legend.autoMargins != undefined && data.amChart.legend.autoMargins != true)
                },
            },
        },
    };

    return {
        label: "amChart Legend",
        type: "items",
        items: {
            settings: settings,
        }
    };
});
