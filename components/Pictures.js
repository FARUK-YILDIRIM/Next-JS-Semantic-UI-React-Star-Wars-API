import { Image } from "semantic-ui-react";

function Pictures(props) {
  const name = props.name;

  switch (name) {
    case "Luke Skywalker":
      return (
        <Image src="https://s.tcdn.co/e3a/c38/e3ac380a-f4ed-3e93-a4c2-555984664668/192/3.png" />
      );
    case "C-3PO":
      return (
        <Image src="https://s.tcdn.co/e3a/c38/e3ac380a-f4ed-3e93-a4c2-555984664668/192/9.png" />
      );
    case "R2-D2":
      return (
        <Image src="https://s.tcdn.co/e3a/c38/e3ac380a-f4ed-3e93-a4c2-555984664668/192/8.png" />
      );
    case "Darth Vader":
      return (
        <Image src="https://s.tcdn.co/e3a/c38/e3ac380a-f4ed-3e93-a4c2-555984664668/192/1.png" />
      );
    case "Leia Organa":
      return (
        <Image src="https://s.tcdn.co/e3a/c38/e3ac380a-f4ed-3e93-a4c2-555984664668/192/4.png" />
      );
    case "Owen Lars":
      return (
        <Image src="https://s.tcdn.co/e3a/c38/e3ac380a-f4ed-3e93-a4c2-555984664668/192/5.png" />
      );
    case "Beru Whitesun lars":
      return (
        <Image src="https://s.tcdn.co/e3a/c38/e3ac380a-f4ed-3e93-a4c2-555984664668/192/6.png" />
      );
    case "R5-D4":
      return (
        <Image src="https://s.tcdn.co/e3a/c38/e3ac380a-f4ed-3e93-a4c2-555984664668/192/8.png" />
      );
    case "Biggs Darklighter":
      return (
        <Image src="https://s.tcdn.co/e3a/c38/e3ac380a-f4ed-3e93-a4c2-555984664668/192/12.png" />
      );
    case "Obi-Wan Kenobi":
      return (
        <Image src="https://s.tcdn.co/e3a/c38/e3ac380a-f4ed-3e93-a4c2-555984664668/192/5.png" />
      );
    case "error":
      return <Error text={text} />;
    default:
      return null;
  }
}

export default Pictures;
