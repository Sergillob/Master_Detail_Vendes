jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderHeaderSet in the list
// * All 3 SalesOrderHeaderSet have at least one OrderToItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"sl/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"sl/test/integration/pages/App",
	"sl/test/integration/pages/Browser",
	"sl/test/integration/pages/Master",
	"sl/test/integration/pages/Detail",
	"sl/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "sl.view."
	});

	sap.ui.require([
		"sl/test/integration/MasterJourney",
		"sl/test/integration/NavigationJourney",
		"sl/test/integration/NotFoundJourney",
		"sl/test/integration/BusyJourney",
		"sl/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});