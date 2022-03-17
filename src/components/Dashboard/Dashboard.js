import React from 'react';
import duckpic from '../../images/duck.png'
import {Link} from 'react-router-dom';

function About(props) {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center m-5">
                <div>
                    <h1 className='h1'>You have been visited by the Dashboard Duck.</h1>
                    <div className="d-flex justify-content-center m-5">
                        <img src={duckpic}></img>
                    </div>
                    <div className="d-flex justify-content-center m-5">
                        <Link to="/">Back to login, where you're safe?</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;