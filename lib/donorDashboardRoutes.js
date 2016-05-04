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
	name: "settings",
	action() {
		BlazeLayout.render("donorDashboardLayout", {main: "settingsView"})
	}
});
FlowRouter.route("/donor/help-and-feedback", {
	name: "helpAndFeedback",
	action() {
		BlazeLayout.render("donorDashboardLayout", {main: "helpAndFeedbackView"})
	}
});