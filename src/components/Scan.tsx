import React from 'react';
import { Link } from 'react-router-dom';

import Id from '../images/id-bg.svg';

const Scan = () => {
    return (
        <div className="scan">
            <header className="header">
                <h1 className="logo">BankClient</h1>
                <hr />
            </header>
            <main className="main">
                <h2 className="title">Scan your ID</h2>
                <p className="text">
                    Take a picture. It may take time to validate your personal
                    information.
                </p>
                <div className="card-frame">
                    <img className="id-image" alt="" src={Id} />
                </div>
                <Link to="/cam">
                    <button className="btn btn-action">take picture</button>
                </Link>
            </main>
        </div>
    );
};

export default Scan;
