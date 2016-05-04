//front facing routes here
FlowRouter.route("/", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "homeView"})
	}
});

FlowRouter.route("/current-needs", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "currentNeeds"})
	}
});
FlowRouter.route("/how-it-works", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "howItWorks"})
	}
});
FlowRouter.route("/about-HALO", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "aboutHalo"})
	}
});
FlowRouter.route("/faq", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "faq"})
	}
});
FlowRouter.route("/help-and-support", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "helpAndSupport"})
	}
});

