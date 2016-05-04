//front facing routes here
FlowRouter.route("/", {
	action() {
		BlazeLayout.render("frontFacingLayout", {main: "homeView"})
	}
})