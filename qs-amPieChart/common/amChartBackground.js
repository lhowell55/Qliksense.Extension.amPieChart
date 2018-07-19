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
                label: "Margin bottom",
                ref: "amChart.marginBottom",
                component: "slider",
                min: 0,
                max: 200,
                step: 0.01,
                defaultValue: 10
            },
            marginLeft: {
                type: "number",
                label: "Margin left",
                ref: "amChart.marginLeft",
                component: "slider",
                min: 0,
                max: 200,
                step: 0.01,
                defaultValue: 0
            },
            marginRight: {
                type: "number",
                label: "Margin right",
                ref: "amChart.marginRight",
                component: "slider",
                min: 0,
                max: 200,
                step: 0.01,
                defaultValue: 0
            },
            marginTop: {
                type: "number",
                label: "Margin top",
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
            backgroundAlpha: {
                type: "number",
                component: "slider",
                label: "Background alpha",
                ref: "amChart.backgroundAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 0
            },
            backgroundColor: {
                type: "string",
                label: "Background color",
                expression: "optional",
                ref: "amChart.backgroundColor",
                defaultValue: "#FFFFFF",
                show: function(data) {
                    return (data.amChart.theme =='none')
                }        
            },
            borderAlpha: {
                type: "number",
                component: "slider",
                label: "Border alpha",
                ref: "amChart.borderAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 0
            },
            borderColor: {
                type: "string",
                label: "Border color",
                expression: "optional",
                ref: "amChart.borderColor",
                defaultValue: "#000000"
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
