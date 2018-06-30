define([
], function() {
    'use strict';

    var titles = {
        type: "array",
        ref: "amChart.titles",
        label: "Titles",
        itemTitleRef: "text",
        allowAdd: true,
        allowRemove: true,
        addTranslation: "Add Titles",
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
                defaultValue: 26,
                ref:"size", 
            },
            color: {
                type:"string", 
                label: "Color",
                expression: "optional",
                ref: "color",
                defaultValue: "#000000",
            },
        }
    };

    return {
        label: "Chart Titles",
        component: "items",
        items: {
            titles:titles,
        }
    };
});
