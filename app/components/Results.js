var React = require('react');
var PropTypes = React.PropTypes;

function puke (obj) {
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function Results (props) {
	return <div>{puke(props)}</div>
}

Results.propTypes = {
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired
}

module.exports = Results;