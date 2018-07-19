define([
], function() {
    'use strict';

    //Appearance
    var appearance = {
        type: "items",
        label: "Chart Appearance",
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
                    value: "qlik",
                    label: "Qlik"
                }],
                defaultValue: "none"
            },
            useThemeColors: {
                type: "boolean",
                component: "switch",
                label: "Theme Colors for Measures",
                ref: "amChart.useThemeColors",
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
                    return (data.amChart.theme !='none')
                },        
            },
            depth3D: {
                type: "number",
                component: "slider",
                label: "Chart 3D",
                ref: "amChart.depth3D",
                min: 0,
                max: 100,
                step: 0.01,
                defaultValue: 0
            },
            angle: {
                type: "number",
                component: "slider",
                label: "Angle Chart",
                ref: "amChart.angle",
                min: 0,
                max: 100,
                step: 0.01,
                defaultValue: 0
            },
            innerRadius: {
                type: "number",
                component: "slider",
                label: "Inner Radius (Donut)",
                ref: "amChart.innerRadius",
                min: 0,
                max: 100,
                step: 0.01,
                defaultValue: 0
            },
            handDrawn:{
                type: "boolean",
                component: "switch",
                label: "Hand Drawn Chart",
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
            handDrawScatter: {
                type: "number",
                component: "slider",
                label: "Hand Drawn Scatter",
                ref: "amChart.handDrawScatter",
                min: 0,
                max: 40,
                step: 0.01,
                defaultValue: 2,
                show: function(data) {
                    return (data.amChart.handDrawn == true || data.amChart.theme =='chalk')
                },        
            },
            handDrawThickness: {
                type: "number",
                component: "slider",
                label: "Hand Drawn Thickness",
                ref: "amChart.handDrawThickness",
                min: 0,
                max: 30,
                step: 0.01,
                defaultValue: 1,
                show: function(data) {
                    return (data.amChart.handDrawn == true || data.amChart.theme =='chalk')
                },        
            },
            usePrefix: {
                type: "boolean",
                component: "switch",
                label: "Use Prefix for Numbers",
                ref: "amChart.usePrefix",
                options: [{
                    value: true,
                    label: "On"
                },
                {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false
            },
            FontFamily: {
                type: "string",
                component: "dropdown",
                label: "Global Font Family",
                ref: "amChart.fontFamily",
                options: [{
                        value: "Verdana",
                        label: "Verdana",
                    },{
                        value: "QlikView Sans",
                        label: "QlikView Sans",
                    },{
                        value: "Arial",
                        label: "Arial"
                    },{
                        value: "Tahoma",
                        label: "Tahoma"
                    },{
                        value: "Times New Roman",
                        label: "Times New Roman"
                    },{
                        value: "Cambria",
                        label: "Cambria"
                    },{
                        value: "Calibri",
                        label: "Calibri"
                    },{
                        value: "Lucida Console",
                        label: "Lucida Console"
                    },{
                        value: "Courier New",
                        label: "Courier New"
                    }, {
                        value: ".c.",
                        label: "Custom"
                    } ],
                defaultValue: "Verdana",
                show: function(data) {
                    return (data.amChart.handDrawn != true && data.amChart.theme !='chalk')
                },        
            },
            fontFamilyCustom: {
                type: "string",
                label: "Global Font Family",
                ref: "amChart.fontFamilyCustom",
                expression: "optional",
                defaultValue: "Verdana",
                show: function(data) {
                    return (data.amChart.theme !='chalk' && data.amChart.fontFamily == ".c.")
                },
            },
            labelRadius: {
                type: "number",
                component: "slider",
                label: "Chart Radius",
                ref: "amChart.radius",
                min: 0,
                max: 100,
                step: 0.01,
                defaultValue: 30
            },
            startAngle: {
                type: "number",
                component: "slider",
                label: "Start Angle",
                ref: "amChart.startAngle",
                min: 0,
                max: 360,
                step: 0.1,
                defaultValue: 90
            },
            baseColor: {
                type: "string",
                label: "Base Color",
                expression: "optional",
                ref: "amChart.baseColor",
                defaultValue: ""
            },
            colors: {
                type: "string",
                label: "Slice Color (separated by comma)",
                expression: "optional",
                ref: "amChart.colors",
                defaultValue: "#FF0F00,#FF6600,#FF9E01,#FCD202,#F8FF01,#B0DE09,#04D215,#0D8ECF,#0D52D1,#2A0CD0,#8A0CCF,#CD0D74,#754DEB,#DDDDDD,#999999,#333333,#000000,#57032A,#CA9726,#990000,#4B0C25"
            },
            alpha: {
                type: "number",
                component: "slider",
                label: "Slice Opacity",
                ref: "amChart.alpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 1
            },
            hoverAlpha: {
                type: "number",
                component: "slider",
                label: "Hover Opacity",
                ref: "amChart.hoverAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 1
            },
            outlineColor: {
                type: "string",
                label: "Outline Color",
                expression: "optional",
                ref: "amChart.outlineColor",
                defaultValue: "#FFFFFF",
            },
            outlineAlpha: {
                type: "number",
                component: "slider",
                label: "Outline Opacity",
                ref: "amChart.outlineAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 0,
            },
            outlineThickness: {
                type: "number",
                component: "slider",
                label: "Outline Thickness",
                ref: "amChart.outlineThickness",
                min: 0,
                max: 30,
                step: 0.01,
                defaultValue: 0,
            },
        }
    };

    //Animation
    var animation = {
        type: "items",
        label: "Chart Animation",
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
                label: "Start Radius",
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
                label: "Start Opacity",
                ref: "amChart.startAlpha",
                min: 0,
                max: 1,
                step: 0.01,
                defaultValue: 0,
                show: function(data) {
                    return (data.amChart.chartAnimation != false)
                }        
            },
            startDuration: {
                type: "number",
                component: "slider",
                label: "Start Duration",
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
                label: "Start Effect",
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
                label: "Pullout Only Once",
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
                label: "Pull Out Radius",
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
                label: "Pull Out Duration",
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
                label: "Pull Out Effect",
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
