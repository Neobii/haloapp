//obvious
FlowRouter.route("/recipient/dashboard", {
	action() {
		BlazeLayout.render("recipientDashboardLayout", {main: "recipientHomeView"})
	}
});