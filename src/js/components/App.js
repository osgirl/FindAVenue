const React = require('react');

const GlobalHeader = require('./GlobalHeader');
const MainContent = require('./MainContent');
const GlobalFooter = require('./GlobalFooter');

/* Data - This could be CMS Driven, CMS renders JSON data per page. */
const headerData = [
  { text: 'Help', link: '/help/' },
];

// ES6 Stateless Component
const App = () => (
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

App.propTypes = {
  headerData: React.PropTypes.object,
};

module.exports = App;
