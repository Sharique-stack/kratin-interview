import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/mentalhealth" activeStyle>
						Mental well-being
					</NavLink>
					<NavLink to="/fit" activeStyle>
						Be fit and mobile
					</NavLink>
					<NavLink to="/alert" activeStyle>
						Meds reminder
					</NavLink>
					<NavLink to="/check-ups" activeStyle>
						Stay up to date with check-ups
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
