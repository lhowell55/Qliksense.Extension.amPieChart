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
                expression: "optional",
                ref: "text",
                defaultValue: "Free Label",
            },
            alpha: {
                type: "number",
                component: "slider",
                label: "Label Opacity",
                ref: "alpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 1
            },
            rotation: {
                type: "number",
                component: "slider",
                label: "Label Rotation",
                ref: "rotation",
                min: 0,
                max: 90,
                step: 0.02,
                defaultValue: 0,
              },
              reverseRotation: {
                type: "boolean",
                component: "switch",
                label: "Reverse Label Rotation",
                ref: "reverseRotation",
                options: [{
                    value: true,
                    label: "Yes"
                }, {
                    value: false,
                    label: "No"
                }],
                defaultValue: false,
                show: function(data) {
                  return (data.rotation != 0)
                }   
              },     
              bold:  {
                type: "boolean",
                component: "switch",
                label: "Label Bold",
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
                label:"Label Size", 
                expression: "optional",
                defaultValue: 12,
                ref:"size", 
            },
            color: {
                type:"string", 
                label: "Label Color",
                expression: "optional",
                ref: "color",
                defaultValue: "#000000",
            },
            align: {
                type: "string",
                component: "dropdown",
                label: "Label Align",
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
                label: "Position X axis (%)",
                ref: "x",
                min: 0,
                max: 100,
                step: 0.01,
                defaultValue: 0
            },
            Y: {
                type: "number",
                component: "slider",
                label: "Posistion Y axis (%)",
                ref: "y",
                min: 0,
                max: 100,
                step: 0.01,
                defaultValue: 0
            },
        }
    };

    return {
        label: "amChart Free Labels",
        component: "items",
        items: {
            allLabels:allLabels,
        }
    };
});
