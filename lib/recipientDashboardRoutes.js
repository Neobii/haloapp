//obvious
FlowRouter.route("/recipient/dashboard", {
	name: "recipientHome",
	action() {
		BlazeLayout.render("recipientDashboardLayout", {main: "recipientHomeView"})
	}
});
FlowRouter.route("/recipient/my-needs", {
	name: "myNeeds",
	action() {
		BlazeLayout.render("recipientDashboardLayout", {main: "myNeedsView"})
	}
});
FlowRouter.route("/recipient/create-need", {
	name: "createNeed",
	action() {
		BlazeLayout.render("recipientDashboardLayout", {main: "createNeedView"})
	}
});
FlowRouter.route("/recipient/profile", {
	name: "profile",
	action() {
		BlazeLayout.render("recipientDashboardLayout", {main: "profileView"})
	}
});