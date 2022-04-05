import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactItem from "./ContactItem";
// import ContactData from "../ContactData";
import { ListGroup } from "react-bootstrap";
function Contacts(props) {
  // const goToAdd = () => {
  // 	props.history.push("/add-contacts");
  // };
  return (
    <ListGroup as="ul">
      <li className="d-flex justify-content-center ">
        <h2 className="section-title">My Contacts</h2>
        <Link to="/add">
          <Button
            variant="primary"
            className="material-icons btn add-icon text-light"
          >
            add
          </Button>
        </Link>
      </li>
      {props.contact.map((contact) => {
        return (
          <ContactItem
            contact={contact}
            name={contact.name}
            phone={contact.phone}
            id={contact.id}
            deleteHandler={contact.deleteHandler}
            key={contact.id}
          />
        );
      })}
    </ListGroup>
  );
}
export default Contacts;
