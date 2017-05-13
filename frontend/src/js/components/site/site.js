import React from 'react';

export default () => {
    return (
        <div>
            <div className="site-card generic-card">
                <div className="site-card-text">
                    <h3>Frontend</h3>
                    <p>The frontend of this site made using React with Redux. I usually work on backend projects and used this as an opportunity to improve my JavaScript and learn React and find out why it is one of the most talked about JS libraries.</p>
                </div>
                <div className="site-card-table">
                    <div className="site-card-table-row">
                        <img className="logo-image" src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494690199/react_wj17oq.png" />
                        <img className="logo-image" src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494690446/redux_qdkw3r.png" />
                    </div>
                </div>
            </div>
            <div className="site-card generic-card">
                <div className="site-card-text">
                    <h3>Backend</h3>
                    <p>The backend uses django rest framework to give a clean rest API and allows me to use the built in django admin console as a basic CMS for the blog.</p>
                    <p>The Blog entries are stored in a PostgreSQL database.</p>
                </div>
                <div className="site-card-table">
                    <div className="site-card-table-row">
                        <img className="logo-image" src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494692329/python_h4igko.png" />
                        <img className="logo-image" src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494692338/django_mzx2bo.png" />
                        <img className="logo-image-wide" src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494692334/drf_iz3imi.png" />
                        <img className="logo-image" src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494693562/postgres_ag5n0i.png" />
                    </div>
                </div>
            </div>
            <div className="site-card generic-card">
                <div className="site-card-text">
                    <h3>Deployment</h3>
                    <p>I have CircleCI set up for a one command deploy. It builds docker images for the frontend and backend. The frontend bundle and other static files are copied from the frontend container and an nginx image is built with these, the database uses a stock PostgreSQL image.</p>
                    <p>Nginx acts as a reverse proxy, serving both the frontend static files and passing any api requests on to the backend. The nginx image, postgres image and the backend api image are then pushed to an image repository and deployed to Google container engine cluster with Kubernetes.</p>
                </div>
                <div className="site-card-table">
                    <div className="site-card-table-row">
                        <img className="logo-image" src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494693336/docker_sjmwgg.png" />
                        <img className="logo-image" src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494693338/kubernetes_wpb3zp.png" />
                        <img className="logo-image" src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494693343/circle_dr2rlo.png" />
                        <img className="logo-image-wider" src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494693566/nginx_k6wmri.png" />
                    </div>
                </div>
            </div>

            {/*<img src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494194646/dodiemiroconstruction1_j97ppq.gif" />
            <img src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494194581/Atlantis8044constructionheavy_ibiija.gif" />
            <img src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494195241/vovooo13gifSupercompressed_koala-construct3_a9uywt.gif" />*/}
        </div>
    );
}