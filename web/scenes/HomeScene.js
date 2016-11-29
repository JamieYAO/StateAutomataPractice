const React = require('react');
const ReactDOM = require('react');

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      selectState: null,
    };
  }

  componentDidMount() {
    this.setState({
      selectState: "Mounted"
    })
  }

  handleButton(key: String) {
    this.setState({
      selectState: key
    })
  }

  render() {
    return(
      <div style={{ textAlign: 'center' }}>
        <button onClick={ () => { this.handleButton("Initialized") } }>Initialized</button>
        <button onClick={ () => { this.handleButton("Pending") } }>Pending</button>
        <button onClick={ () => { this.handleButton("Applied") } }>Applied</button>
        <div>stat: {this.state.selectState}</div>
      </div>
    )
  }
}

export default Home;
