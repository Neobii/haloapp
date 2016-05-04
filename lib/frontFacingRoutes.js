//front facing routes here
FlowRouter.route("/", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "homeView"})
	}
});

FlowRouter.route("/current-needs", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "currentNeedsView"})
	}
});
FlowRouter.route("/how-it-works", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "howItWorksView"})
	}
});
FlowRouter.route("/about-HALO", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "aboutView"})
	}
});
FlowRouter.route("/faq", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "faqView"})
	}
});
FlowRouter.route("/help-and-support", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "helpAndSupportView"})
	}
});
