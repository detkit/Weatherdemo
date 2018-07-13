var React = require('react');
var {Link} = require('react-router');

var Nav = () => {
  return (
      <div>
        <h2>Nav Component</h2>
        <Link to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</Link>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>

        <a href="#/about">Go To About</a>
      </div>
    );
};

module.exports = Nav;
