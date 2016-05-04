//obvious
FlowRouter.route("/recepient/dashboard", {
	action() {
		BlazeLayout.render("recepientDashboardLayout", {main: "recipientrDashboardView"})
	}
});