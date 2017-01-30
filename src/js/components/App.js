let React = require("react");

let GlobalHeader = require("./GlobalHeader");
let MainContent = require("./MainContent");
let GlobalFooter = require("./GlobalFooter");

/* Data - This could be CMS Driven, CMS renders JSON data per page. */
let headerData = [
  { text: "Help", link: "/help/" }
];

class App extends React.Component {

	getInitialState() {
		return {
			view: "search"
		};
	}

	render() {
	// Global Main Renderer
		return (
			<div>
				<GlobalHeader data={headerData} />
				<main role="main" className="main-page clearfix">
					<div className="container clearfix">
						<MainContent />
					</div>
				</main>
				<GlobalFooter />
			</div>
		);
	}
}

module.exports = App;
