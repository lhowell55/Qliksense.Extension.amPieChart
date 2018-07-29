define([
], function() {
    'use strict';
        
    //settings
    var settings = {
        type: "items",
        label: "Settings",
        items: {
            labelsEnabled: {
                type: "boolean",
                component: "switch",
                label: "Show Labels",
                ref: "amChart.labelsEnabled",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: true
            },
            labelText: {
                type: "string",
                label: "Label Text",
                component: "dropdown",
                ref: "amChart.labelText",
                defaultValue: "[[title]]: [[percents]]%",
                options: [{
                        value: "[[title]]: [[percents]]%",
                        label: "[[title]]: [[percents]]%"
                    }, {
                        value: "[[title]]: [[value]]",
                        label: "[[title]]: [[value]]"
                    }, {
                        value: "[[title]]: $[[value]]",
                        label: "[[title]]: $[[value]]"
                    }, {
                        value: "[[title]]",
                        label: "[[title]]"
                    }, {
                        value: "[[percents]]%",
                        label: "[[percents]]%"
                    }, {
                        value: "[[value]]",
                        label: "[[value]]"
                    }, {
                        value: "$[[value]]",
                        label: "$[[value]]"
                    }, {
                        value: ".c.",
                        label: "Custom"
                    },
                ],  
                show: function(data) {
                    return (data.amChart.labelsEnabled != false)
                },
            },
            labelTextCustom: {
                type: "string",
                label: "Label Custom Text",
                expression: "optional",
                ref: "amChart.labelTextCustom",
                defaultValue: "[[title]]",
                show: function(data) {
                    return (data.amChart.labelsEnabled != false && data.amChart.labelText =='.c.')
                }        
            },
            labelFontSize: {
                ref: "amChart.labelFontSize",
                label: "Label Font Size",
                type: "number",
                defaultValue: 12,
                show: function(data) {
                    return (data.amChart.labelsEnabled != false && data.amChart.theme !='chalk')
                }        
            },
            labelColor: {
                type: "string",
                label: "Label Color",
                expression: "optional",
                ref: "amChart.labelColor",
                defaultValue: "#000000",
                show: function(data) {
                    return (data.amChart.labelsEnabled != false && data.amChart.theme =='none')
                }        
            },
            maxLabelWidth: {
                type: "number",
                label: "Label Width",
                ref: "amChart.maxLabelWidth",
                component: "slider",                
                min: 0,
                max: 300,
                step: 0.01,
                defaultValue: 200,
                show: function(data) {
                    return (data.amChart.labelsEnabled != false)
                },
            },
            labelRadius: {
                type: "number",
                component: "slider",
                label: "Label Radius",
                ref: "amChart.labelRadius",
                min: 0,
                max: 50,
                step: 0.01,
                defaultValue: 0
            },
            hideLabelsPercent: {
                type: "number",
                label: "Hide Labels Percent",
                ref: "amChart.hideLabelsPercent",
                expression: "optional",                
                defaultValue: 0
            },
            labelTickColor: {
                type: "string",
                label: "Label Tick Color",
                expression: "optional",
                ref: "amChart.labelTickColor",
                defaultValue: "#000000",
                show: function(data) {
                    return (data.amChart.labelsEnabled != false)
                },
            },
            labelTickAlpha: {
                type: "number",
                label: "Label Tick Opacity",
                component: "slider",
                ref: "amChart.labelTickAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 0,
                show: function(data) {
                    return (data.amChart.labelsEnabled != false)
                },
            },
        }
    };

    return {
        label: "amChart Labels",
        type: "items",
        items: {
            settings:settings,
        }
    };
});
