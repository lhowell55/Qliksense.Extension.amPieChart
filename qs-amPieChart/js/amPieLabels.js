define([
], function() {
    'use strict';
        
    //Activate
    var activate = {
        type: "items",
        label: "Activate",
        items: {
            labelsEnabled: {
                type: "boolean",
                component: "switch",
                label: "Labels Enabled",
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
        }
    };

    //Settings
    var settings = {
        type: "items",
        label: "Settings",
        show: function(data) {
            return (data.amChart.labelsEnabled != false)
        },
        items: {
            labelText: {
                type: "string",
                label: "Label text",
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
                        value: "C",
                        label: "Custom"
                    },
                ],  
            },
            labelTextCustom: {
                type: "string",
                label: "Label custom text",
                expression: "optional",
                ref: "amChart.labelTextCustom",
                defaultValue: "[[title]]",
                show: function(data) {
                    return (data.amChart.labelText =='C')
                }        
            },
            labelTickAlpha: {
                type: "number",
                label: "Label tick alpha",
                component: "slider",
                ref: "amChart.labelTickAlpha",
                min: 0,
                max: 1,
                step: 0.1,
                defaultValue: 0,
            },
            maxLabelWidth: {
                type: "number",
                label: "Max label width",
                ref: "amChart.maxLabelWidth",
                defaultValue: 200,
            },
            labelTickColor: {
                type: "string",
                label: "Label tick color",
                expression: "optional",
                ref: "amChart.labelTickColor",
                defaultValue: "#000000",
            },
            labelColor: {
                type: "string",
                label: "Label color",
                expression: "optional",
                ref: "amChart.labelColor",
                defaultValue: "#000000",
                show: function(data) {
                    return (data.amChart.theme =='none')
                }        
            },
            labelFontSize: {
                ref: "amChart.labelFontSize",
                label: "Font Size",
                type: "number",
                defaultValue: 12,
                show: function(data) {
                    return (data.amChart.theme !='chalk')
                }        
            },
        }
    };

    return {
        label: "Chart Labels",
        component: "expandable-items",
        items: {
            activate: activate,
            settings,settings,
        }
    };
});
