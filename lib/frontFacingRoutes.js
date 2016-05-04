//front facing routes here
FlowRouter.route("/", {
	name: "home",
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "homeView"})
	}
});

FlowRouter.route("/current-needs", {
	name: "currentNeeds",
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "currentNeedsView"})
	}
});
FlowRouter.route("/how-it-works", {
	name: "howItWorks",
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "howItWorksView"})
	}
});
FlowRouter.route("/about-HALO", {
	name: "aboutHalo",
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "aboutView"})
	}
});
FlowRouter.route("/faq", {
	name: "faq",
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "faqView"})
	}
});
FlowRouter.route("/help-and-support", {
	name: "helpAndSupport",
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "helpAndSupportView"})
	}
});

FlowRouter.route("/need/:slug", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "singleNeedView"})
	}
})