import React from "react";
import { Button } from "react-bootstrap";
function ErrorPage() {
	return (
		<header className="error-page text-center py-2">
			<h1>404! Not found</h1>
			<p>
				Go To
				<Button variant="primary">Home</Button>
			</p>
		</header>
	);
}
export default ErrorPage;
