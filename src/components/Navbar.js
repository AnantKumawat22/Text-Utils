import React from 'react';
import Theme from './Theme';

export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-${(props.theme)}`}>
                <a className={`navbar-brand text-${props.theme === 'light' ? 'dark' : 'light'}`} href="#">TextUtils</a>
                <button className={`navbar-toggler bg-${props.theme === 'dark' ? 'light' : 'light'}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className={`nav-link text-${props.theme === 'light' ? 'dark' : 'light'}`} href="#">About Us <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className={`btn btn-outline-success my-2 my-sm-0 btn-${props.theme === 'dark' ? 'light' : 'light'}`} type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Theme theme={props.theme} toggletheme={props.toggletheme} />
        </>
    );
}
