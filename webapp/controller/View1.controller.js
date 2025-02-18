sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
        },
        onPress(oEvent){
            MessageBox.information("Hello World");

        }
    });
});