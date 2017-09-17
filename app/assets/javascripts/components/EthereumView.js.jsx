class EthereumView extends React.Component {
  constructor(props) {
    super(props)

    this.state = { prices: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api')
      .then((data) => {
        this.setState({ prices: data });
      })
  }

  buildEthereumDataGraph() {
    let chart;
    // just for an example to get working - below will be the ethereum price points
    let myArray = [21, 43, 6, 7, 8, 797, 43];
    let dataArray = myArray.unshift('data1')

    chart = c3.generate({
      data: {
        columns: [
          dataArray
        ],
        names: {
          data1: 'Ethereum Price',
        }
      }
    });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>ethereum prices</h1>
        <div id="chart"></div>
        {this.buildEthereumDataGraph()}
      </div>
    )
  }
}