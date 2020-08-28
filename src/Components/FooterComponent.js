import React from 'react';
import { Jumbotron } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

function Footer(props) {
    return(
        <Jumbotron dark>
        <div class="container d-inline-flex">
            <div className="footer-heading">
                <h3 class="text-primary"><i class="fas fa-cloud mr-3"></i><span class="text-dark">Skills</span> To Learn</h3>
                <p>
                    5th Floor, A-118,
                    Sector-136, Noida, Uttar Pradesh - 201305
                </p>
                <p>Email: feedback@geeksforgeeks.org</p>
                <div class="social fex-1">
                <SocialIcon url="https://twitter.com/" />
                <SocialIcon url="https://youtube.com/" />
                <SocialIcon url="https://linkedin.com/" />
                <SocialIcon url="https://facebook.com/" />
                <SocialIcon url="https://instagram.com/" />
                </div>
            </div>
            <div class="card-deck justify-content-around" dark>
                <div className="card ml-5 footer-links-1">
                    <ul class="card-body" style={{listStyle:"none"}}>
                        <h3 class="card-heading text-primary">Link</h3>
                        <li>sublinks</li>
                        <li>sublinks</li>
                        <li>sublinks</li>
                    </ul>
                </div>
                <div className="card ml-5 footer-links-2">
                    <ul class="card-body" style={{listStyle:"none"}}>
                        <h3 class="card-heading text-primary">Link</h3>
                        <li><a>sublinks</a></li>
                        <li><a>sublinks</a></li>
                        <li><a>sublinks</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </Jumbotron>
    )
}
export default Footer;