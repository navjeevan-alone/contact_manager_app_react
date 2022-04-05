import React from "react";
import { ListGroup, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avtar from "../img/avtar.png";
// import EditIcon from '@mui/icons-material/Edit';

function ContactItem(props) {
  const { name, phone, id, deleteHandler } = props.contact;
  return (
    <ListGroup.Item as="li" className="contact-item">
      <div className="flex-shrink-0">
        <Image className="avtar" src={Avtar} alt="avtar" roundedCircle />
      </div>
      <div className="contact-details flex-grow-1">
        <Link to={`/contact/${id}`} state={{ getContact: props.contact }}>
          <h6 className="primary-text-color">{name}</h6>
          <p className="nunito secondary-text-color">{phone}</p>
        </Link>
      </div>
      <div className="justify-self-end">
        <Button
          variant="danger"
          className="material-icons btn-circle"
          onClick={() => {
            deleteHandler(id);
          }}
        >
          delete
        </Button>
      </div>
    </ListGroup.Item>
  );
}
export default ContactItem;
