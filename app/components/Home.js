var React = require('react');
var Link = require('react-router').Link;

var MainContainer = require('./MainContainer');

var Home = React.createClass({
  render: function(){
    return (
      <MainContainer>
      	<h1>GitHub Battle</h1>
      	<p className="lead">React eating the world</p>
      	<Link to='/playerOne'>
      		<button type="button" className="btn btn-lg btn-success">Get started</button>
      	</Link>
      </MainContainer>
    )
  }
});

module.exports = Home;