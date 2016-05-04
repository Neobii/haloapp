//donor dashboard routes
FlowRouter.route("/donor/dashboard", {
	name: "donorHome",
	action() {
		BlazeLayout.render("donorDashboardLayout", {main: "donorDashboardView"})
	}
});
FlowRouter.route("/donor/goals", {
	name: "goals",
	action() {
		BlazeLayout.render("donorDashboardLayout", {main: "goalsView"})
	}
});
FlowRouter.route("/donor/giving-profile", {
	name: "givingProfile",
	action() {
		BlazeLayout.render("donorDashboardLayout", {main: "givingProfileView"})
	}
});
FlowRouter.route("/donor/giving-achievements", {
	name: "givingAchievements",
	action() {
		BlazeLayout.render("donorDashboardLayout", {main: "givingAchievementsView"})
	}
});
FlowRouter.route("/donor/settings", {
	name: "donorSettings",
	action() {
		BlazeLayout.render("donorDashboardLayout", {main: "donorSettingsView"})
	}
});
FlowRouter.route("/donor/help-and-feedback", {
	name: "donorHelpAndFeedback",
	action() {
		BlazeLayout.render("donorDashboardLayout", {main: "donorHelpAndFeedbackView"})
	}
});