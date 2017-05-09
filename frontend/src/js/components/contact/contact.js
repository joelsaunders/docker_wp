import React from 'react';

export default () => {
    return (
        <div>
             <div className="about-biocard generic-card">
                <div className="about-biotext">
                    <h3>Get in touch!</h3>
                    <p>Contact me with any questions or queries you might have about topics in this blog</p>
                </div>
                <div className="about-biotable">
                    <table>
                        <tbody>
                            <tr>

                                <td><a href="#"><i className="fa fa-linkedin"></i></a></td>
                                <td><a href="#"><i className="fa fa-github"></i></a></td>
                            </tr>
                            <tr>
                                <td><a href="#"><i className="fa fa-envelope"></i></a></td>
                                <td><a href="#"><i className="fa fa-skype"></i></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}