import React from 'react';

const Navbar = () => {
	return (
		<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="https://bulma.io">
            <span className="icon is-large">
              <i className="fab fa-github fa-2x"></i>
            </span>
				</a>

				<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
				   data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<div className="navbar-item">
						<input className="input is-small navbar-input" type="text" placeholder="Search or jump to..."/>
					</div>
					<a className="navbar-item">
						Pull requests
					</a>
					<a className="navbar-item">
						Issues
					</a>
					<a className="navbar-item">
						Marketplace
					</a>
					<a className="navbar-item">
						Explore
					</a>
				</div>

				<div className="navbar-end">
					<div className="navbar-item">
						<button className="button is-dark">
							<i className="fas fa-bell"></i>
						</button>
					</div>

					<div className="navbar-item">
						<div className="navbar-item is-hoverable has-dropdown">
							<a className="navbar-link icon">
								<i className="fas fa-plus"></i>
							</a>

							<div className="navbar-dropdown is-boxed is-right">
								<a className="navbar-item">
									New repository
								</a>
								<a className="navbar-item">
									Import repository
								</a>
								<a className="navbar-item">
									New gist
								</a>
								<a className="navbar-item">
									New organisation
								</a>
								<a className="navbar-item">
									New project
								</a>
							</div>
						</div>
					</div>

					<div className="navbar-item">
						<div className="navbar-item is-hoverable has-dropdown">
							<a className="navbar-link icon">
								<img src={process.env.PUBLIC_URL + '/nick.jpg'}/>
							</a>

							<div className="navbar-dropdown is-boxed is-right">
								<a className="navbar-item">
									<p>
										Signed in as
										<br/>
										<strong>nchong128</strong>
									</p>
								</a>
								<hr className="navbar-divider"/>
								<a className="navbar-item">
									"Motto"
								</a>
								<hr className="navbar-divider"/>
								<a className="navbar-item">
									Your profile
								</a>
								<a className="navbar-item">
									Your repositories
								</a>
								<a className="navbar-item">
									Your projects
								</a>
								<a className="navbar-item">
									Your stars
								</a>
								<a className="navbar-item">
									Your gists
								</a>
								<hr className="navbar-divider"/>
								<a className="navbar-item">
									Feature preview
								</a>
								<a className="navbar-item">
									Help
								</a>
								<a className="navbar-item">
									Settings
								</a>
								<a className="navbar-item">
									Sign out
								</a>

							</div>
						</div>
					</div>

				</div>
			</div>
		</nav>
	);
}

export default Navbar;