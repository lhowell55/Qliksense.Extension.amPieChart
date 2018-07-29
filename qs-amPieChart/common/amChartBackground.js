define([
], function() {
    'use strict';

    //Margins
    var margins = {
        type: "items",
        label: "Chart Margins",
        items: {
            marginBottom: {
                type: "number",
                label: "Margin Bottom",
                ref: "amChart.marginBottom",
                component: "slider",
                min: 0,
                max: 200,
                step: 0.01,
                defaultValue: 10
            },
            marginLeft: {
                type: "number",
                label: "Margin Left",
                ref: "amChart.marginLeft",
                component: "slider",
                min: 0,
                max: 200,
                step: 0.01,
                defaultValue: 0
            },
            marginRight: {
                type: "number",
                label: "Margin Right",
                ref: "amChart.marginRight",
                component: "slider",
                min: 0,
                max: 200,
                step: 0.01,
                defaultValue: 0
            },
            marginTop: {
                type: "number",
                label: "Margin Top",
                ref: "amChart.marginTop",
                component: "slider",
                min: 0,
                max: 200,
                step: 0.01,
                defaultValue: 10
            },
        }
    };

    //Background
    var background = {
        type: "items",
        label: "Chart Background",
        items: {
            backgroundColor: {
                type: "string",
                label: "Background Color",
                expression: "optional",
                ref: "amChart.backgroundColor",
                defaultValue: "#FFFFFF",
                show: function(data) {
                    return (data.amChart.theme =='none')
                }        
            },
            backgroundAlpha: {
                type: "number",
                component: "slider",
                label: "Background Alpha",
                ref: "amChart.backgroundAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 0,
                show: function(data) {
                    return (data.amChart.theme =='none')
                }        
            },
            borderColor: {
                type: "string",
                label: "Border Color",
                expression: "optional",
                ref: "amChart.borderColor",
                defaultValue: "#000000"
            },
            borderAlpha: {
                type: "number",
                component: "slider",
                label: "Border Alpha",
                ref: "amChart.borderAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 0
            },
        }
    };

    return {
        label: "Chart Background",
        component: "expandable-items",
        items: {
            margins: margins,
            background: background,
        }
    };
});
