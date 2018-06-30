define([], function() {
    'use strict';

    //Activate
    var activate = {
        type: "items",
        label: "Activate",
        items: {
            enabled: {
                type: "boolean",
                component: "switch",
                label: "Balloon enabed",
                ref: "amChart.balloon.enabled",
                options: [{
                    value: true,
                    label: "On"
                },
                {
                    value: false,
                    label: "Off"
                }],
                defaultValue: true,
            },
        }
    };

    //Settings
    var settings = {
        type: "items",
        label: "General Settings",
        show: function(data) {
            return (data.amChart.balloon.enabled != false)
        },
        items: {
            text: {
                type: "string",
                label: "Value text",
                component: "dropdown",
                ref: "amChart.balloon.text",
                defaultValue: "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                options: [{
                        value: "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                        label: "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>"
                    }, {
                        value: "C",
                        label: "Custom"
                    },
                ],  
            },
            textCustom: {
                type: "string",
                label: "Value custom text",
                expression: "optional",
                ref: "amChart.balloon.textCustom",
                defaultValue: "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                show: function(data) {
                    return (data.amChart.balloon.text =='C')
                }        
            },
            adjustBorderColor: {
                type: "boolean",
                component: "switch",
                label: "Adjust border color",
                ref: "amChart.balloon.adjustBorderColor",
                options: [{
                    value: true,
                    label: "On"
                },
                {
                    value: false,
                    label: "Off"
                }],
                defaultValue: true,
            },
            animationDuration: {
                type: "number",
                component: "slider",
                label: "Animation duration",
                ref: "amChart.balloon.animationDuration",
                min: 0,
                max: 2,
                step: 0.01,
                defaultValue: 0,
            },
            fadeOutDuration: {
                type: "number",
                component: "slider",
                label: "Fade out duration",
                ref: "amChart.balloon.fadeOutDuration",
                min: 0,
                max: 2,
                step: 0.01,
                defaultValue: 0,
            },
            fixedPosition: {
                type: "boolean",
                component: "switch",
                label: "Fixed position",
                ref: "amChart.balloon.fixedPosition",
                options: [{
                    value: true,
                    label: "On"
                },
                {
                    value: false,
                    label: "Off"
                }],
                defaultValue: true,
            },        
            maxWidth: {
                type: "number",
                label: "Max width",
                ref: "amChart.balloon.maxWidth",
                defaultValue: 999,
            },
            showBullet: {
                type: "boolean",
                component: "switch",
                label: "Show Bullet",
                ref: "amChart.balloon.showBullet",
                options: [{
                    value: true,
                    label: "On"
                },
                {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false,
            },
        }
    };

    //Appearance    
    var appearance = {
        type: "items",
        label: "Appearance",
        show: function(data) {
            return (data.amChart.balloon.enabled != false)
        },
        items: {
            borderAlpha: {
                type: "number",
                component: "slider",
                label: "Border alpha",
                ref: "amChart.balloon.borderAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 1,
            },
            borderColor: {
                type: "string",
                label: "Border color",
                ref: "amChart.balloon.borderColor",
                defaultValue: "#FFFFFF",
            },
            borderThickness: {
                type: "number",
                label: "Border thickness",
                ref: "amChart.balloon.borderThickness",
                defaultValue: 2,
            },
            color: {
                type: "string",
                label: "Text color",
                ref: "amChart.balloon.Color",
                defaultValue: "#000000",
            },
            cornerRadius: {
                type: "number",
                component: "slider",        
                label: "Corner radius",
                ref: "amChart.balloon.cornerRadius",
                min: 0,
                max: 30,
                step: 1,
                defaultValue: 0,
            },
            drop: {
                type: "boolean",
                component: "switch",
                label: "Drop",
                ref: "amChart.balloon.drop",
                options: [{
                    value: true,
                    label: "On"
                },
                {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false,
            },
            fillAlpha: {
                type: "number",
                component: "slider",
                label: "Fill alpha",
                ref: "amChart.balloon.fillAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 1,
            },
            fillColor: {
                type: "string",
                label: "Fill color",
                ref: "amChart.balloon.fillColor",
                defaultValue: "#FFFFFF",
            },
            fontSize: {
                ref: "amChart.balloon.fontSize",
                label: "Font Size",
                type: "number",
                defaultValue: 11,
            },
            horizontalPadding: {
                ref: "amChart.balloon.horizontalPadding",
                label: "Horizontal padding",
                type: "number",
                defaultValue: 8,
            },
            verticalPadding: {
                ref: "amChart.balloon.verticalPadding",
                label: "Vertical padding",
                type: "number",
                defaultValue: 4,
            },
            pointerOrientation: {
                type: "string",
                component: "dropdown",
                label: "Pointer orientation",
                ref: "amChart.balloon.pointerOrientation",
                options: [{
                    value: "down",
                    label: "down"
                },
                {
                    value: "up",
                    label: "up"
                },
                {
                    value: "left",
                    label: "left"
                },
                {
                    value: "right",
                    label: "right"
                }],
                defaultValue: "down",
            },
            pointerWidth: {
                ref: "amChart.balloon.pointerWidth",
                label: "Pointer width",
                type: "number",
                defaultValue: 8,
            },
            shadowAlpha: {
                type: "number",
                component: "slider",
                label: "Shadow alpha",
                ref: "amChart.balloon.shadowAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 0,
            },
            shadowColor: {
                type: "string",
                label: "Shadow color",
                ref: "amChart.balloon.shadowColor",
                defaultValue: "#000000",
            },
        }
    };

    return {
        component: "expandable-items",
        label: "Chart Balloon",
        items: {
            activate:activate,
            settings:settings,
            appearance:appearance,
        }
    };
});
