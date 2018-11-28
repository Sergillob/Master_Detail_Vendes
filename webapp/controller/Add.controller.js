/*global location */
sap.ui.define([
		"sl/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"sl/model/formatter"
	], function (BaseController, JSONModel, formatter) {
		"use strict";

		return BaseController.extend("sl.controller.Add", {

			formatter: formatter,

			/* =========================================================== */
			/* lifecycle methods                                           */
			/* =========================================================== */

			onInit : function () {
			
			},

		});

	}
);