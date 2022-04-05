import React from "react";
function Footer() {
	return (
		<footer className="footer text-center py-2 bg-dark text-light">
			<h2 className="nunito">
				Made with <span className="material-icons accent-text">favorite</span>
			</h2>
			<p>
				<span className="material-icons">copyright</span> All rights reserved.
			</p>
			<p>
				{" "}
				by <br />
				<b>Navjeevan Alone</b>
			</p>
		</footer>
	);
}
export default Footer;
