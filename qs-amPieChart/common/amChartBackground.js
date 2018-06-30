define([
], function() {
    'use strict';

    //Margins
    var margins = {
        type: "items",
        label: "Margins",
        items: {
            marginBottom: {
                type: "number",
                label: "Margin bottom",
                ref: "amChart.marginBottom",
                defaultValue: 10
            },
            marginLeft: {
                type: "number",
                label: "Margin left",
                ref: "amChart.marginLeft",
                defaultValue: 0
            },
            marginRight: {
                type: "number",
                label: "Margin right",
                ref: "amChart.marginRight",
                defaultValue: 0
            },
            marginTop: {
                type: "number",
                label: "Margin top",
                ref: "amChart.marginTop",
                defaultValue: 10
            },
        }
    };

    //Reserved for Plot area
//    show: function(data) {
//        return (data.extensionMeta.style != "pie")
//    },        

    //Background
    var background = {
        type: "items",
        label: "Background",
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
        label: "Chart Background & plot area",
        component: "expandable-items",
        items: {
            margins: margins,
            background: background,
        }
    };
});
