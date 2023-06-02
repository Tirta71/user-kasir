import { Card } from "react-bootstrap";
export const MenuCard = ({ item, handleTambahMenu }) => {
  return (
    <Card
      style={{ width: "18rem" }}
      key={item.id}
      className="shadow my-card-huhu"
      onClick={() => handleTambahMenu(item)}
    >
      <Card.Img variant="top" src={item.gambar} className="Image-card" />
      <Card.Body>
        <Card.Title>{item.nama}</Card.Title>
        <Card.Text>Harga : {item.harga}</Card.Text>
      </Card.Body>
    </Card>
  );
};
