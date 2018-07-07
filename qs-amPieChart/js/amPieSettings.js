define([
], function() {
    'use strict';

    //Appearance
    var appearance = {
        type: "items",
        label: "Appearance",
        items: {
            interactionQlik: {
                type: "boolean",
                component: "switch",
                label: "Interaction with Qliksense",
                ref: "amChart.interactionQlik",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false
            },
            theme: {
                type: "string",
                component: "dropdown",
                label: "Theme",
                ref: "amChart.theme",
                options: [{
                    value: "none",
                    label: "None"
                }, {
                    value: "light",
                    label: "Light"
                }, {
                    value: "dark",
                    label: "Dark"
                }, {
                    value: "chalk",
                    label: "Chalk"
                }, {
                    value: "black",
                    label: "Black"
                }, {
                    value: "patterns",
                    label: "Patterns"
                }],
                defaultValue: "none"
            },
            angle: {
                type: "number",
                component: "slider",
                label: "Angle",
                ref: "amChart.angle",
                min: 0,
                max: 100,
                step: 1,
                defaultValue: 0
            },
            depth3D: {
                type: "number",
                component: "slider",
                label: "Depth3D",
                ref: "amChart.depth3D",
                min: 0,
                max: 100,
                step: 1,
                defaultValue: 0
            },
            innerRadius: {
                type: "number",
                component: "slider",
                label: "Inner radius (donut)",
                ref: "amChart.innerRadius",
                min: 0,
                max: 100,
                step: 1,
                defaultValue: 0
            },
            handDrawn:{
                type: "boolean",
                component: "switch",
                label: "Hand drawn",
                ref: "amChart.handDrawn",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false,
                show: function(data) {
                    return (data.amChart.theme !='chalk')
                }        
            },
            labelFontFamily: {
                ref: "amChart.labelFontFamily",
                label: "Font Family",
                type: "string",
                expression: "optional",
                defaultValue: "Verdana",
                show: function(data) {
                    return (data.amChart.theme !='chalk')
                }        
             },
            labelRadius: {
                type: "number",
                component: "slider",
                label: "Label radius",
                ref: "amChart.labelRadius",
                min: 0,
                max: 100,
                step: 1,
                defaultValue: 0
            },
            startAngle: {
                type: "number",
                component: "slider",
                label: "Start angle",
                ref: "amChart.startAngle",
                min: 0,
                max: 90,
                step: 1,
                defaultValue: 0
            },
            alpha: {
                type: "number",
                component: "slider",
                label: "Alpha",
                ref: "amChart.alpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 1
            },
            baseColor: {
                type: "string",
                label: "Base color",
                expression: "optional",
                ref: "amChart.baseColor",
                defaultValue: ""
            },
            colors: {
                type: "string",
                label: "Slice color (separated by comma)",
                expression: "optional",
                ref: "amChart.colors",
                defaultValue: "#FF0F00,#FF6600,#FF9E01,#FCD202,#F8FF01,#B0DE09,#04D215,#0D8ECF,#0D52D1,#2A0CD0,#8A0CCF,#CD0D74,#754DEB,#DDDDDD,#999999,#333333,#000000,#57032A,#CA9726,#990000,#4B0C25"
            },
            hoverAlpha: {
                type: "number",
                component: "slider",
                label: "Hover alpha",
                ref: "amChart.hoverAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 1
            },
            outlineAlpha: {
                type: "number",
                component: "slider",
                label: "Outline alpha",
                ref: "amChart.outlineAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 0,
            },
            outlineColor: {
                type: "string",
                label: "Outline color",
                expression: "optional",
                ref: "amChart.outlineColor",
                defaultValue: "#FFFFFF",
            },
            outlineThickness: {
                type: "number",
                component: "slider",
                label: "Outline thickness",
                ref: "amChart.outlineThickness",
                min: 0,
                max: 30,
                step: 1,
                defaultValue: 0,
            },
        }
    };

    //Animation
    var animation = {
        type: "items",
        label: "Animation",
        items: {
            chartAnimation: {
                type: "boolean",
                component: "switch",
                label: "Chart Animation",
                ref: "amChart.chartAnimation",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: true,
            },
            sequencedAnimation: {
                type: "boolean",
                component: "switch",
                label: "Sequenced Animation",
                ref: "amChart.sequencedAnimation",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false,
                show: function(data) {
                    return (data.amChart.chartAnimation != false)
                }        
            },
            startRadius: {
                type: "number",
                component: "slider",
                label: "Start radius",
                ref: "amChart.startRadius",
                min: 0,
                max: 500,
                step: 10,
                defaultValue: 500,
                show: function(data) {
                    return (data.amChart.chartAnimation != false)
                }        
            },
            startAlpha: {
                type: "number",
                component: "slider",
                label: "Start alpha",
                ref: "amChart.startAlpha",
                min: 0,
                max: 100,
                step: 1,
                defaultValue: 0,
                show: function(data) {
                    return (data.amChart.chartAnimation != false)
                }        
            },
            startDuration: {
                type: "number",
                component: "slider",
                label: "Start duration",
                ref: "amChart.startDuration",
                min: 0,
                max: 10,
                step: 1,
                defaultValue: 1,
                show: function(data) {
                    return (data.amChart.chartAnimation != false)
                }        
            },
            startEffect: {
                type: "string",
                component: "dropdown",
                label: "Start effect",
                ref: "amChart.startEffect",
                options: [{
                    value: "easeOutSine",
                    label: "easeOutSine"
                }, {
                    value: "easeInSine",
                    label: "easeInSine"
                },
                {
                    value: "elastic",
                    label: "elastic"
                },
                {
                    value: "bounce",
                    label: "bounce"
                }],
                defaultValue: "bounce",
                show: function(data) {
                    return (data.amChart.chartAnimation != false)
                }        
            },
            pullOutAnimation: {
                type: "boolean",
                component: "switch",
                label: "Pullout Animation",
                ref: "amChart.pullOutAnimation",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: true,
            },
            pullOutOnlyOne: {
                type: "boolean",
                component: "switch",
                label: "Pullout only once",
                ref: "amChart.pullOutOnlyOne",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false,
                show: function(data) {
                    return (data.amChart.pullOutAnimation != false)
                }        
            },
            pullOutRadius: {
                type: "number",
                component: "slider",
                label: "Pull out radius",
                ref: "amChart.pullOutRadius",
                min: 0,
                max: 100,
                step: 1,
                defaultValue: 20,
                show: function(data) {
                    return (data.amChart.pullOutAnimation != false)
                }        
            },
            pullOutDuration: {
                type: "number",
                component: "slider",
                label: "Pull out duration",
                ref: "amChart.pullOutDuration",
                min: 0,
                max: 5,
                step: 0.1,
                defaultValue: 1,
                show: function(data) {
                    return (data.amChart.pullOutAnimation != false)
                }        
            },
            pullOutEffect: {
                type: "string",
                component: "dropdown",
                label: "Pull out effect",
                ref: "amChart.pullOutEffect",
                options: [{
                    value: "easeOutSine",
                    label: "easeOutSine"
                }, {
                    value: "easeInSine",
                    label: "easeInSine"
                },
                {
                    value: "elastic",
                    label: "elastic"
                },
                {
                    value: "bounce",
                    label: "bounce"
                }],
                defaultValue: "bounce",
                show: function(data) {
                    return (data.amChart.pullOutAnimation != false)
                }        
            },
        }
    };

    return {
        label: "Chart Settings",
        component: "expandable-items",
        items: {
            appearance: appearance,
            animation:animation,
        }
    };
});
