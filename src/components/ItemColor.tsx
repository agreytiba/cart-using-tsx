import React from 'react';
import { NavDropdown } from 'react-bootstrap';
type ItemColorProps = {
	colors: string[];
};
const ItemColor = ({ colors }: ItemColorProps) => {
	return (
		<NavDropdown title="select color" id="basic-nav-dropdown">

			{colors.map((color) => <NavDropdown.Item href="#action/3.2">{color}</NavDropdown.Item>)}
		</NavDropdown>
	);
};

export default ItemColor;
