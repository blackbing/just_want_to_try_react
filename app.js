var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h1>Hello, world!</h1>
        <h2>React.js</h2>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
