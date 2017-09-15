class EthereumView extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h1>ethereum prices</h1>
      </div>
    )
  }
}