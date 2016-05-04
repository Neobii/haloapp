//donor dashboard routes
FlowRouter.route("/donor/dashboard", {
	action() {
		BlazeLayout.render("donorDashboardLayout", {main: "donorDashboardView"})
	}
});