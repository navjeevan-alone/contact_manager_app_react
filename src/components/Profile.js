import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Avtar from "../img/avtar.png";
function Profile(props) {
	const location = useLocation();
	const { getContact } = location.state;
	// const { name, phone } = props.location.state;
	console.log(props);
	return (
		<>
			<Card
				className="profie-card primary-text-color"
				style={{ width: "18rem" }}>
				<Card.Header as="h5">Profile</Card.Header>
				<Card.Img variant="top" src={Avtar} />
				<Card.Body>
					<Card.Title className="primary-text-color">
						{getContact.name}{" "}
					</Card.Title>
					<Card.Text className="nunito secondary-text-color">
						{getContact.phone}
					</Card.Text>
					<div className="d-flex gap-3">
						<Button
							variant=""
							className="material-icons btn-circle icon-only secondary-text">
							edit
						</Button>
						<Button
							variant=""
							className="material-icons btn-circle icon-only secondary-text">
							delete
						</Button>
					</div>
				</Card.Body>
			</Card>
			<div className=" my-3 mx-auto">
				<Link to="/">
					<Button variant="primary" className=" bg-dark">
						Back
					</Button>
				</Link>
			</div>
		</>
	);
}
export default Profile;
