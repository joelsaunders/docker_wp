import React from 'react';

export default () => {
    return (
        <div>
            <div className="about-biocard generic-card">
                <div className="about-biopicture">
                    <img src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494177669/joelpic1_gobweb.jpg" className="post-picture" />
                </div>
                <div className="about-biotext">
                    <h3>A little bit about me...</h3>
                    <div className="about-biotable">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="about-biotable-cell">
                                        <h6><strong>Name</strong></h6>
                                    </td>
                                    <td className="about-biotable-cell">
                                        <h6>Joel Stephen Saunders</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="about-biotable-cell">
                                        <h6><strong>Age</strong></h6>
                                    </td>
                                    <td className="about-biotable-cell">
                                        <h6>26</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="about-biotable-cell">
                                        <h6><strong>Location</strong></h6>
                                    </td>
                                    <td className="about-biotable-cell">
                                        <h6>London</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="about-biotable-cell">
                                        <h6><strong>Interests</strong></h6>
                                    </td>
                                    <td className="about-biotable-cell">
                                        <h6>Skiing, Rugby, Travel, Craft Beer</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="about-biotable-cell">
                                        <h6><strong>Technologies</strong></h6>
                                    </td>
                                    <td className="about-biotable-cell">
                                        <h6>Python, Django REST Framework, React, Docker, Kubernetes</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="about-biotable-cell">
                                        <h6><strong>Favourite<br/>Animal</strong></h6>
                                    </td>
                                    <td className="about-biotable-cell">
                                        <h6>Dog</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="about-biotable-cell">
                                        <h6><strong>Studied</strong></h6>
                                    </td>
                                    <td className="about-biotable-cell">
                                        <h6>Physics</h6>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>            
            <div className="detail-post-container generic-card">
                <div className="detail-post-textarea">
                    <h3 className="title-text">Would you like to know more?</h3>
                    <p>
                        I am a London based back-end, and aspiring full stack developer with a passion for learning new technologies. 
                    </p>
                    <p>
                        I had my first experience of programming whilst studying Physics at Swansea University, where a short module taught the class to write a program that simulated and drew the orbit of the earth, moon and sun. A couple of years later I found myself choosing a dissertation project that was all computational and involved writing a program to compute the descent of objects from various heights through the atmosphere.
                    </p>
                    <p>
                        Working for a time in the laser and optics industry, made me come to the realisation that I needed to make a career change to do something that I truly enjoyed. I began to teach myself to program in Python every week night after work and weekend.
                    </p>
                    <p>
                        5 months later I took a job as a back-end developer at <nobr><a className="hlink" href="https://ueni.com/">UENI</a></nobr> and haven't looked back since. 
                    </p>
                </div>
            </div>
            <div className="about-interests-card generic-card">
                <div className="image-text">
                    <img src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494276668/1010213_10151852586077051_988562173_n_qf96ts.jpg" className="about-interestspicture" className="image-text-image" />
                    <h1 className="image-text-text" >Skiing</h1>           
                </div>
                <div className="detail-post-textarea">
                    <p>
                        I love to ski. I've been interested in skiing from an early age and was a member of my University ski racing team, competing in regional and national competitions.
                    </p>
                    <p>
                        I enjoy slalom, freeride and have recently been spending a lot of time on the park.
                    </p>
                    <p>
                        In the future I would like to try some ski touring and would one day like to tour the Chamonix to Zermatt Haute Route.
                    </p>
                </div>
            </div>
            <div className="about-interests-card generic-card">
                <div className="image-text">
                    <img src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494280648/IMG_20150102_170923902_vqnvat.jpg" className="about-interestspicture" className="image-text-image" />
                    <h1 className="image-text-text" >Seeing stuff</h1>           
                </div>
                <div className="detail-post-textarea">
                    <p>
                        Just like nearly everyone, I like to travel and see things. Not knowing what to do immediately after graduating led to me joining my girlfriend going to teach for a year in a school in China. We used any time off to go visit places, mostly not in China because when there is a holiday, everyone is on holiday.
                    </p>
                    <p>
                        I was also been lucky enough to spend a year of my time at university as an exchange student at UNSW in Sydney. Being a student gave me a lot of time off which allowed me and a few friends to complete a road trip from Darwin to Adelaide, something i had wanted to do for a long time.
                    </p>
                </div>
            </div>
        </div>
    );
}