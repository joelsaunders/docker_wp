import React from 'react';

export default () => {
    return (
        <div>
             <div className="about-biocard generic-card">
                <div className="about-biotext">
                    <h3>Get in touch!</h3>
                    <p className="contact-text">Please feel free to contact me with any questions or queries you might have about topics in this blog, or anything else!</p>
                    <p>I'll try and respond as fast as I can.</p> 
                    <p>I would especially like to hear from you if you think anything I have said is wrong or you don't agree with me.</p>
                    <p>Reach me at <a className="hlink" href="mailto:joel.st.saunders@gmail.com">joel.st.saunders@gmail.com</a></p>
                </div>
                <div className="contact-logotable">
                    <div className="site-card-table">
                        <div className="site-card-table-row">
                            <div className="contact-logotable-cell">
                                <a href="https://www.linkedin.com/in/joel-saunders-266476102/"><i className="fa fa-linkedin"></i></a>
                            </div>
                            <div className="contact-logotable-cell">
                                <a href="https://github.com/joelsaunders"><i className="fa fa-github"></i></a>
                            </div>
                            <div className="contact-logotable-cell">
                                <a href="mailto:joel.st.saunders@gmail.com"><i className="fa fa-envelope"></i></a>
                            </div>
                            <div className="contact-logotable-cell">
                                <a href="#"><i className="fa fa-skype"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}