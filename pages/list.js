import StarWarsCharacterLists from "../components/StarWarsCharacterLists";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";

class swc extends React.Component {
  static async getInitialProps() {
    const res = await fetch("https://swapi.co/api/people/");
    const swc = await res.json();
    return {
      swc
    };
  }

  render() {
    return (
      <Layout title="Star Wars Character Lists">
        <StarWarsCharacterLists swc={this.props.swc} />
      </Layout>
    );
  }
}

export default swc;
