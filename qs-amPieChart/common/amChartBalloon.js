define([], function() {
    'use strict';

    var balloonHelp = "Balloon text.\nThe following tags can be used: \n[[value]], [[title]], [[percents]]\nHTML tags like <span style> can also be used.\nexample: [[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";

    //Activate
    var settings = {
        type: "items",
        label: "Balloon Settings",
        items: {
            balloonEnabled: {
                type: "boolean",
                component: "switch",
                label: "Show Balloon",
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
            balloonDrop: {
                type: "boolean",
                component: "switch",
                label: "Balloon Tear Drop Style",
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
                show: function(data) {
                    return (data.amChart.balloon.enabled != false)
                 },
            },
            balloonTextPick: {
                type: "string",
                component: "buttongroup",
                label: "Balloon Text",
                ref: "amChart.balloon.textPick",
                options: [{
                    value: "d",
                    label: "Default",
                    tooltip: "Default Format"
                }, {
                    value: ".c.",
                    label: "Custom",
                    tooltip: balloonHelp,
                }],
                defaultValue: "d",
                show: function(data) {
                    return (data.amChart.balloon.enabled != false)
                 },
             },
             balloonTextCustom: {
                type: "string",
                component: "textarea",
                label: "Balloon Custom Text",
                ref: "amChart.balloon.textCustom",
                defaultValue: "[[title]] ([[percents]]%)",
                show: function(data) {
                    return (data.amChart.balloon.enabled != false && data.amChart.balloon.textPick =='.c.')
                },       
            },
            BalloonFontSize: {
                ref: "amChart.balloon.fontSize",
                label: "Balloon Text Font Size",
                type: "number",
                expression: "optional",
                defaultValue: 11,
                show: function(data) {
                    return (data.amChart.balloon.enabled != false)
                 },
            },
            balloonColorText: {
                type: "string",
                label: "Balloon Text Color",
                ref: "amChart.balloon.balloonColor",
                expression: "optional",
                defaultValue: "#000000",
                show: function(data) {
                    return (data.amChart.balloon.enabled  != false)
                },
            },
            balloonAnimationDuration: {
                type: "number",
                component: "slider",
                label: "Balloon Animation Duration",
                ref: "amChart.balloon.animationDuration",
                min: 0,
                max: 2,
                step: 0.01,
                defaultValue: 0.3,
                show: function(data) {
                    return (data.amChart.balloon.enabled != false)
                 },
            },
            balloonFixedPosition: {
                type: "boolean",
                component: "switch",
                label: "Balloon Fixed Position",
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
                show: function(data) {
                    return (data.amChart.balloon.enabled != false)
                 },
            },        
            maxWidth: {
                type: "number",
                label: "Max width",
                ref: "amChart.balloon.maxWidth",
                defaultValue: 999,
            },
            balloonCornerRadius: {
                type: "number",
                component: "slider",        
                label: "Balloon Corner Radius",
                ref: "amChart.balloon.cornerRadius",
                min: 0,
                max: 30,
                step: 0.01,
                defaultValue: 0,
                show: function(data) {
                    return (data.amChart.balloon.enabled != false && data.amChart.balloon.drop != true)
                 },
            },
            balloonPointerOrientation: {
                type: "string",
                component: "dropdown",
                label: "Balloon Pointer Orientation",
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
                show: function(data) {
                    return (data.amChart.balloon.enabled != false && data.amChart.balloon.drop == true)
                 },
            },
            balloonPointerWidth: {
                ref: "amChart.balloon.pointerWidth",
                label: "Balloon Pointer Width",
                component: "slider",        
                type: "number",
                min: 0,
                max: 30,
                step: 0.01,
                defaultValue: 8,
                show: function(data) {
                    return (data.amChart.balloon.enabled != false && data.amChart.balloon.cornerRadius == 0)
                 },
            },
            balloonHorizontalPadding: {
                ref: "amChart.balloon.horizontalPadding",
                label: "Horizontal Text Padding",
                component: "slider",        
                type: "number",
                min: 0,
                max: 100,
                step: 0.01,
                defaultValue: 8,
                show: function(data) {
                    return (data.amChart.balloon.enabled != false)
                 },
            },
            balloonVerticalPadding: {
                ref: "amChart.balloon.verticalPadding",
                label: "Vertical Text Padding",
                component: "slider",        
                type: "number",
                min: 0,
                max: 100,
                step: 0.01,
                defaultValue: 4,
                show: function(data) {
                    return (data.amChart.balloon.enabled != false && data.amChart.balloon.drop != true)
                 },
            },
            balloonAdjustBorderColor: {
                type: "boolean",
                component: "switch",
                label: "Adjust Balloon Border Color",
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
                show: function(data) {
                    return (data.amChart.balloon.enabled != false)
                 },
             },
            balloonBorderColorText: {
                type: "string",
                label: "Balloon Border Color",
                ref: "amChart.balloon.borderColor",
                expression: "optional",
                defaultValue: "#FFFFFF",
                show: function(data) {
                    return (data.amChart.balloon.enabled  != false && data.amChart.balloon.adjustBorderColor != true)
                },
            },
            balloonBorderAlpha: {
                type: "number",
                component: "slider",
                label: "Balloon Border Opacity",
                ref: "amChart.balloon.borderAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 1,
                show: function(data) {
                    return (data.amChart.balloon.enabled  != false)
                },
            },
            balloonBorderThickness: {
                type: "number",
                label: "Balloon Border Thickness",
                ref: "amChart.balloon.borderThickness",
                component: "slider",
                min: 0,
                max: 20,
                step: 0.01,
                defaultValue: 2,
                show: function(data) {
                    return (data.amChart.balloon.enabled  != false)
                },
            },
            balloonFllColorText: {
                type: "string",
                label: "Balloon Fill Color",
                ref: "amChart.balloon.fillColor",
                expression: "optional",
                defaultValue: "#FFFFFF",
                show: function(data) { 
                    return (data.amChart.balloon.enabled  != false && data.amChart.balloon.adjustBorderColor == true)
                },
            },
            balloonFillAlpha: {
                type: "number",
                component: "slider",
                label: "Balloon Fill Opacity",
                ref: "amChart.balloon.fillAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 1,
                show: function(data) { 
                    return (data.amChart.balloon.enabled  != false)
                },
            },
            balloonShadowColor: {
                type: "string",
                label: "Balloon Shadow color",
                ref: "amChart.balloon.shadowColor",
                expression: "optional",
                defaultValue: "#000000",
                show: function(data) {
                    return (data.amChart.balloon.enabled  != false)
                },
            },
            balloonShadowAlpha: {
                type: "number",
                component: "slider",
                label: "Balloon Shadow Opacity",
                ref: "amChart.balloon.shadowAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 0,
                show: function(data) { 
                    return (data.amChart.balloon.enabled  != false)
                },
            },
        }
    };


    return {
        type: "items",
        label: "amChart Balloon",
        items: {
            settings:settings,
        }
    };
});
