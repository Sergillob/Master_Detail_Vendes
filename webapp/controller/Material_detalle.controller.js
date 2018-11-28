sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sl.controller.Material_detalle", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sl.view.Material_detalle
		 */
		onInit: function() {

			// Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// Validate/Match the Router Details sent from source using oRouter.navTo("Router_Detail", {SelectedItem: selectPO});
			oRouter.getRoute("material").attachMatched(this._onRouteFound, this);

		},

		// Custom Method to bind the elements using the Event Arguments
		_onRouteFound: function(oEvt) {
			debugger;
			var oArgument = oEvt.getParameter("arguments");

			var oView = this.getView();
			//Fem el binding de la view perque només hi ha un objecte, el Form, si n'hi hagués més ho bindaríem al Form
			//amb 
			//var oForm = this.getView().byId("sl_form_mat");
			// oForm.bindElement({ ..... })
			oView.bindElement({
				path: "/MaterialSet('" + oArgument.matnrId + "')",
				//perque es vegi els puntets de pensar...
				events: {
					dataRequested: function(oEvt) {
						oView.setBusy(true);
					},
					dataReceived: function(oEvt) {
						oView.setBusy(false);
					}
				}
			});
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sl.view.Material_detalle
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sl.view.Material_detalle
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sl.view.Material_detalle
		 */
		//	onExit: function() {
		//
		//	}

	});

});