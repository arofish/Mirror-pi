/* MagicMirror² Test config for display setters module using the helloworld module
 *
 * By Rejas
 * MIT Licensed.
 */
let config = {
	modules: [
		{
			module: "helloworld",
			position: "top_bar",
			header: "test_header",
			config: {
				text: "Test Display Header"
			}
		},
		{
			module: "helloworld",
			position: "bottom_bar",
			config: {
				text: "Test Hide Header"
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
