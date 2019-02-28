import Layout from "../components/Layout";
import { Container, Grid, Header, Image, Segment } from "semantic-ui-react";

const ContainerExampleContainer = () => (
  <div>
    <Layout>
      <Container>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Next JS + Semantic UI React
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Simple Next.js application with Semantic UI and
                  isomorphic-fetch
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image bordered rounded size="large" src="static/sw.jpg" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </Layout>
  </div>
);

export default ContainerExampleContainer;
