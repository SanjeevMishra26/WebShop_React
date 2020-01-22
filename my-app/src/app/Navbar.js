import React from 'react';
import './css/Navbar.css';

class Navbar extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
 
  render() {
    return (
      <div className="App">
		
		{/* Header */}
		<header>
			<div className="brand-header">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<nav className="navbar">
								<div className="brand-name">
									<h3 className="brand-title">Web <strong>Shop</strong></h3>
								</div>
								<div className="pull-right">
									<ul className="nav-bar nav">
										<li>Home</li>
										<li>About Us</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>		
			</div>	
		</header>
		
      </div>
    );
  }
}

export default Navbar;
