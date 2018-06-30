define([
], function() {
    'use strict';

    //Activate
    var activate = {
        type: "items",
        label: "Activate",
        items: {
            enabled: {
                type: "boolean",
                component: "switch",
                label: "Legend enabled",
                ref: "amChart.legend.enabled",
                options: [{
                    value: true,
                    label: "On"
                }, {
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
            return (data.amChart.legend.enabled != false)
        },        
        items: {
            equalWidths: {
                type: "boolean",
                component: "switch",
                label: "Equal widths",
                ref: "amChart.legend.equalWidths",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: true,
            },
            labelText: {
                type: "string",
                label: "Label text",
                component: "dropdown",
                ref: "amChart.legend.labelText",
                defaultValue: "[[title]]",
                options: [{
                        value: "[[title]]",
                        label: "[[title]]"
                    }, {
                        value: "C",
                        label: "Custom"
                    },
                ],  
            },
            labelTextCustom: {
                type: "string",
                label: "Label custom text",
                expression: "optional",
                ref: "amChart.legend.labelTextCustom",
                defaultValue: "[[title]]",
                show: function(data) {
                    return (data.amChart.legend.labelText =='C')
                }        
            },
            labelWidth: {
                type: "number",
                label: "Label width",
                ref: "amChart.legend.labelWidth",
                defaultValue: 100,
            },
            valueText: {
                type: "string",
                label: "Value text",
                component: "dropdown",
                ref: "amChart.legend.valueText",
                defaultValue: "[[value]]",
                options: [{
                        value: "[[value]]",
                        label: "[[value]]"
                    }, {
                        value: "C",
                        label: "Custom"
                    },
                ],  
            },
            valueTextCustom: {
                type: "string",
                label: "Value custom text",
                expression: "optional",
                ref: "amChart.legend.valueTextCustom",
                defaultValue: "[[value]]",
                show: function(data) {
                    return (data.amChart.legend.enabled != false && data.amChart.legend.valueText =='C')
                }        
            },
            valueWidth: {
                type: "number",
                label: "Value width",
                ref: "amChart.legend.valueWidth",
                defaultValue: 50,
            },
            valueAlign: {
                type: "string",
                component: "dropdown",
                label: "Value Align",
                ref: "amChart.legend.valueAlign",
                options: [{
                    value: "left",
                    label: "left"
                }, {
                    value: "right",
                    label: "right"
                }],
                defaultValue: "right",
            },
            maxColumns: {
                type: "number",
                label: "Max columns (0=no max)",
                ref: "amChart.legend.maxColumns",
                defaultValue: 0,
            },
            reversedOrder: {
                type: "boolean",
                component: "switch",
                label: "Reversed Order",
                ref: "amChart.legend.reversedOrder",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: true,
            },
        }
    };

    //Position and Margins
    var margins = {
        type: "items",
        label: "Position & Margins",
        show: function(data) {
            return (data.amChart.legend.enabled != false)
        },        
        items: {
            align: {
                type: "string",
                component: "dropdown",
                label: "Align",
                ref: "amChart.legend.align",
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
            position: {
                type: "string",
                component: "dropdown",
                label: "Position",
                ref: "amChart.legend.position",
                options: [{
                    value: "bottom",
                    label: "bottom"
                }, {
                    value: "top",
                    label: "top"
                }, {
                    value: "left",
                    label: "left"
                },
                {
                    value: "right",
                    label: "right"
                }],
                defaultValue: "bottom",
            },
            verticalGap: {
                type: "number",
                label: "Vertical gap",
                ref: "amChart.legend.verticalGap",
                defaultValue: 10,
            },
            horizontalGap: {
                type: "number",
                label: "Horizontal gap",
                ref: "amChart.legend.horizontalGap",
                defaultValue: 0,
            },
        }
    };

    //Appearances
    var appearance = {
        type: "items",
        label: "Appearance",
        show: function(data) {
            return (data.amChart.legend.enabled != false)
        },        
        items: {
            backgroundAlpha: {
                type: "number",
                component: "slider",
                label: "Background alpha",
                ref: "amChart.legend.backgroundAlpha",
                min: 0,
                max: 1,
                step: 0.1,
                defaultValue: 0,
            },
            backgroundColor: {
                type: "string",
                label: "Background color",
                expression: "optional",
                ref: "amChart.legend.backgroundColor",
                defaultValue: "#FFFFFF",
            },
            borderAlpha: {
                type: "number",
                component: "slider",
                label: "Border alpha",
                ref: "amChart.legend.borderAlpha",
                min: 0,
                max: 1,
                step: 0.1,
                defaultValue: 0,
            },
            borderColor: {
                type: "string",
                label: "Border color",
                expression: "optional",
                ref: "amChart.legend.borderColor",
                defaultValue: "#000000",
            },
            color: {
                type: "string",
                label: "Text color",
                expression: "optional",
                ref: "amChart.legend.color",
                defaultValue: "#000000",
            },
            fontSize: {
                ref: "amChart.legend.fontSize",
                label: "Font Size",
                type: "number",
                defaultValue: 11,
            },
        }
    };

    //Marker
    var markers = {
        type: "items",
        label: "Markers",
        show: function(data) {
            return (data.amChart.legend.enabled != false)
        },        
        items: {
            markerType: {
                type: "string",
                component: "dropdown",
                label: "Marker type",
                ref: "amChart.legend.markerType",
                options: [{
                    value: "circle",
                    label: "circle"
                }, {
                    value: "square",
                    label: "square"
                },
                {
                    value: "diamond",
                    label: "diamond"
                },
                {
                    value: "triangleUp",
                    label: "triangleUp"
                },
                {
                    value: "triangleDown",
                    label: "triangleDown"
                },
                {
                    value: "triangleLeft",
                    label: "triangleLeft"
                },
                {
                    value: "bubble",
                    label: "bubble"
                },
                {
                    value: "line",
                    label: "line"
                }],
                defaultValue: "circle",
            },
            markerBorderAlpha: {
                type: "number",
                component: "slider",
                label: "Marker border alpha",
                ref: "amChart.legend.markerBorderAlpha",
                min: 0,
                max: 1,
                step: 0.1,
                defaultValue: 0,
            },
            markerBorderThickness: {
                type: "number",
                label: "Marker border thickness",
                ref: "amChart.legend.markerBorderThickness",
                defaultValue: 1,
            },
            markerBorderColor: {
                type: "string",
                label: "Marker border color",
                expression: "optional",
                ref: "amChart.legend.markerBorderColor",
                defaultValue: "#000000",
            },
            markerLabelGap: {
                type: "number",
                label: "Marker label gap",
                ref: "amChart.legend.markerLabelGap",
                defaultValue: 1,
            },
            markerSize: {
                type: "number",
                label: "Marker size",
                ref: "amChart.legend.markerSize",
                defaultValue: 16,
            },
            useMarkerColorForLabels: {
                type: "boolean",
                component: "switch",
                label: "Use marker color for labels",
                ref: "amChart.legend.useMarkerColorForLabels",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false,
            },
            useMarkerColorForValue: {
                type: "boolean",
                component: "switch",
                label: "Use marker color for values",
                ref: "amChart.legend.useMarkerColorForValues",
                options: [{
                    value: true,
                    label: "On"
                }, {
                    value: false,
                    label: "Off"
                }],
                defaultValue: false,
            },
        }
    };

    return {
        label: "Chart Legend",
        component: "expandable-items",
        items: {
            activate:activate,
            settings: settings,
            margins: margins,
            appearance: appearance,
            markers: markers,
        }
    };
});
