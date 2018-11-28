jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"sl/test/integration/NavigationJourneyPhone",
		"sl/test/integration/NotFoundJourneyPhone",
		"sl/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});