import React from 'react';
import TeamTable from './team_table_card';

export default () => {
    return (
        <div>
            <div className="team-tablecontainer generic-card">
                <div className="detail-post-textarea">
                    <h3>Our team</h3>
                    <p className="contact-text">Our team is our strength. We are one team. We never let one another down. We all work together toward the same goal.</p>
                </div>
                <TeamTable />
            </div>
            <div className="detail-post-container generic-card">
                <div className="detail-post-textarea">
                    <h3>Join Us</h3>
                    <p>We are always looking for the top talent to join our skilled and dedicated team. Help to change the world and make it a better place for all Joel Saunders. If you are interested and think you meet the requirements, head on over to the <a className="hlink" href="/contact">contact page</a> and apply by email.</p>
                    <p><strong>Requirements:</strong><br/>Joel Saunders</p>
                    <p><strong>Nice to haves:</strong><br/>Joel Saunders</p>
                </div>
            </div> 
        </div>
    );
}