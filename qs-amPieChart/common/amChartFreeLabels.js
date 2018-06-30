define([
], function() {
    'use strict';

    var allLabels = {
        type: "array",
        ref: "amChart.allLabels",
        label: "Titles",
        itemTitleRef: "text",
        allowAdd: true,
        allowRemove: true,
        addTranslation: "Add Free Labels",
        items: {
            text: {
                type: "string",
                label:"Text",
                label: "text",
                expression: "optional",
                ref: "text",
            },
            alpha: {
                type: "number",
                component: "slider",
                label: "Alpha",
                ref: "alpha",
                min: 0,
                max: 1,
                step: 0.1,
                defaultValue: 1
            },
            bold:  {
                type: "boolean",
                component: "switch",
                label: "Bold",
                ref: "bold",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false
            },
            size : {
                type:"number", 
                label:"Size", 
                expression: "optional",
                defaultValue: 12,
                ref:"size", 
            },
            color: {
                type:"string", 
                label: "Color",
                expression: "optional",
                ref: "color",
                defaultValue: "#000000",
            },
            align: {
                type: "string",
                component: "dropdown",
                label: "Align",
                ref: "align",
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
            },
            X: {
                type: "number",
                component: "slider",
                label: "X axis (%)",
                ref: "x",
                min: 0,
                max: 100,
                step: 1,
                defaultValue: 0
            },
            Y: {
                type: "number",
                component: "slider",
                label: "Y axis (%)",
                ref: "y",
                min: 0,
                max: 100,
                step: 1,
                defaultValue: 0
            },
        }
    };

    return {
        label: "Chart Free Labels",
        component: "items",
        items: {
            allLabels:allLabels,
        }
    };
});
