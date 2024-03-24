import { Link } from "react-router-dom"
import "./App.css"

function Navbar() {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                < Link to={"/all"} className="nav-link active" >
                    All
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        < Link to={"/fsd"} className="nav-link active">
                            Full Stack Development
                        </Link>
                        < Link to={"/datascience"} className="nav-link active">
                            DataScience
                        </Link>
                        < Link to={"/CyberSecurity"} className="nav-link active">
                            CyberSecurity
                        </Link>
                        < Link to={"/Career"} className="nav-link active">
                            Career
                        </Link>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar