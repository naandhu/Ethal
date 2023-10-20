import Color from "./Color";
import { Container, Row, Col } from "react-bootstrap";

function Colors() {
  const boxes = [
    {
      key: "1",
      name: "Red",
      color: "#cc0000",
    },
    {
      key: "2",
      name: "White",
      color: "#fff",
    },

    {
      key: "3",
      name: "Ash",
      color: "#5e6577",
    },
    {
      key: "4",
      name: "Sky Blue",
      color: "#056db6",
    },
    {
      key: "5",
      name: "Maroon",
      color: "#4d0f00",
    },
    {
      key: "6",
      name: "Purple",
      color: "#ac0667",
    },
    {
      key: "7",
      name: "Light Sandal",
      color: "#e5c585",
    },
    {
      key: "8",
      name: "Dark Sandal",
      color: "#a56a3e",
    },
    {
      key: "9",
      name: "Pink",
      color: "#dd0885",
    },
    {
      key: "10",
      name: "Light Pink",
      color: "#f9748b",
    },
    {
      key: "11",
      name: "Blue",
      color: "#000066",
    },
    {
      key: "12",
      name: "Peacock Green",
      color: "#00b3b3",
    },
    {
      key: "13",
      name: "Peach",
      color: "#ff471a",
    },
    {
      key: "14",
      name: "Dark Green",
      color: "#009900",
    },
    {
      key: "15",
      name: "Navy Blue",
      color: "#000033",
    },
    {
      key: "16",
      name: "Light Green",
      color: "#89c92d",
    },
    {
      key: "17",
      name: "Dark Orange",
      color: "#f64304",
    },
    {
      key: "18",
      name: "Violet",
      color: "#2f0f57",
    },

    {
      key: "19",
      name: "Mercury Yellow",
      color: "#cc8500",
    },
    {
      key: "20",
      name: "Light Orange",
      color: "#e5980e",
    },
    {
      key: "21",
      name: "Oil Green",
      color: "#333300",
    },
    {
      key: "22",
      name: "Brown",
      color: "#332100",
    },
    {
      key: "23",
      name: "Light Teal",
      color: "#0f9da5",
    },
    {
      key: "24",
      name: "Yellow",
      color: "#fae61c",
    },
    {
      key: "25",
      name: "Black",
      color: "black",
    },
    {
        key:"0",
        name:"Off white",
        color:"#fdf9e5"},
    
  ];

  return (
    <Container>
      <Row xs={2} md={4} lg={6}>
        {boxes.map((box) => (
          <Col key={box.key}>
            <Color color={box.color} name={box.name} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Colors;
