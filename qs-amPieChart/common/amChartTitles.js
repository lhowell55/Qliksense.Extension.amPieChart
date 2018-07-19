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
                expression: "optional",
                ref: "text",
                defaultValue: "Chart Title"
            },
            alpha: {
                type: "number",
                component: "slider",
                label: "Title Opacity",
                ref: "alpha",
                min: 0,
                max: 1,
                step: 0.1,
                defaultValue: 1
            },
            bold:  {
                type: "boolean",
                component: "switch",
                label: "Title Bold",
                ref: "bold",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: true
            },
            size : {
                type:"number", 
                label:"Title Size", 
                expression: "optional",
                defaultValue: 13,
                ref:"size", 
            },
            color: {
                type:"string", 
                label: "Title Color",
                expression: "optional",
                ref: "color",
                defaultValue: "#000000",
            },
        }
    };

    return {
        label: "amChart Titles",
        component: "items",
        items: {
            titles:titles,
        }
    };
});
