import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

class AddContact extends React.Component {
	state = {
		name: "",
		phone: ""
	};

	add = e => {
		e.preventDefault();
		if (this.state.name === "" || this.state.phone === "") {
			alert("ALl the fields are mandatory!");
			return;
		}
		this.props.addContactHandler(this.state);
		this.setState({ name: "", phone: "" });
		// this.props.history.push("/");
		// console.log(this.props);
	};
	render() {
		return (
			<Form className="m-3" onSubmit={this.add}>
				<h2 className="section-title">Add Contact</h2>
				<Form.Group className="mb-3">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your name"
						value={this.state.name}
						onChange={e => this.setState({ name: e.target.value })}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter your Phone number"
						value={this.state.phone}
						onChange={e => this.setState({ phone: e.target.value })}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					{/* <span className="material-icons icon-only ">add</span> */}
					Add Contact
				</Button>
				<Link to="/">
					<Button variant="" className="btn-circle bg-dark text-light mx-2">
						Back
					</Button>
				</Link>
			</Form>
		);
	}
}

export default AddContact;
