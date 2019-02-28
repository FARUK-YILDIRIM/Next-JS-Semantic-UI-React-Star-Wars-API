import { List, Container, Header, Modal, Card } from "semantic-ui-react";
import Pictures from "./Pictures";

const StarWarsCharacterLists = props => (
  <Container textAlign="center" style={{ marginTop: "7em" }}>
    <Header
      as="h1"
      content="Star Wars Character Lists"
      subheader="Click on characters for detailed information"
    />
    {props.swc.results.map(swc => (
      <List horizontal relaxed key={swc.name}>
        <List.Item>
          <List.Content>
            <Modal
              trigger={
                <Card style={{ margin: "5px" }}>
                  <Pictures name={swc.name} />
                  <Card.Content>
                    <Card.Header>{swc.name}</Card.Header>
                  </Card.Content>
                </Card>
              }
            >
              <Modal.Header>@{swc.name}</Modal.Header>
              <Modal.Content image>
                <Pictures name={swc.name} picSize="avatar" />
                <Modal.Description>
                  <Header>{swc.name}</Header>
                  <List>
                    <List.Item>Height: {swc.height}</List.Item>
                    <List.Item>Mass: {swc.mass}</List.Item>
                    <List.Item>Hair Color: {swc.hair_color}</List.Item>
                    <List.Item>Skin Color: {swc.skin_color}</List.Item>
                    <List.Item>Eye Color: {swc.eye_color}</List.Item>
                    <List.Item>Birthyear: {swc.birth_year}</List.Item>
                    <List.Item>Gender: {swc.gender}</List.Item>
                  </List>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </List.Content>
        </List.Item>
      </List>
    ))}
  </Container>
);

export default StarWarsCharacterLists;
