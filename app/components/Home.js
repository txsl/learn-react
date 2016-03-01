var React = require('react');
var styles = require('../styles');
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function(){
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
		<h1>GitHub Battle</h1>
		<p className="lead">React eating the world</p>
		<Link to='/playerOne'>
			<button type="button" className="btn btn-lg btn-success">Get started</button>
		</Link>
      </div>
    )
  }
});

module.exports = Home;