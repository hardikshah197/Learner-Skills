import React from 'react';

function Web(props) {
    return(
        <div>
        <h3 class="m-4 ml-5 text-primary text-center">Web Development</h3>
        <div class="container" style={{border:"0.2px solid #919191", padding:"2rem", marginTop:"3rem", marginBottom: '3rem'}}>
                <h3 class="text-center" style={{color:"black", fontWeight: "200"}}>Front End</h3><hr/>
            <div class="card-deck" style={{color:"white"}}>
                <div class="card bg-warning" >
                    <div class="card-title text-center mt-2"><h3><a>HTML</a></h3></div>
                    <div class="card-body text-center">
                    <p class="card-text">Some text inside the second card</p>
                    </div>
                </div>
                <div class="card bg-success">
                    <div class="card-title text-center mt-2"><h3>CSS</h3></div>
                    <div class="card-body text-center">
                    <p class="card-text">Some text inside the third card</p>
                    </div>
                </div>
                <div class="card bg-danger">
                    <div class="card-title text-center mt-2"><h3>Java-Script</h3></div>
                    <div class="card-body text-center">
                    <p class="card-text">Some text inside the fourth card</p>
                    </div>
                </div>
                <div class="card bg-info">
                    <div class="card-title text-center mt-2"><h3>React</h3></div>
                    <div class="card-body text-center">
                    <p class="card-text">Some text inside the fourth card</p>
                    </div>
                </div>
            </div><br/>
            <h3 class="text-center" style={{color:"black", fontWeight: "200"}}>Back End</h3><hr/>
            <div class="card-deck" style={{color:"white"}}>
            
            <div class="card bg-warning" >
                    <div class="card-title text-center mt-2"><h3>Node JS</h3></div>
                    <div class="card-body text-center">
                    <p class="card-text">Some text inside the second card</p>
                    </div>
                </div>
                <div class="card bg-success">
                    <div class="card-title text-center mt-2"><h3>Bootstrap</h3></div>
                    <div class="card-body text-center">
                    <p class="card-text">Some text inside the third card</p>
                    </div>
                </div>
                <div class="card bg-danger">
                    <div class="card-title text-center mt-2"><h3>Angular</h3></div>
                    <div class="card-body text-center">
                    <p class="card-text">Some text inside the fourth card</p>
                    </div>
                </div>
                <div class="card bg-info">
                    <div class="card-title text-center mt-2"><h3>React-Native</h3></div>
                    <div class="card-body text-center">
                    <p class="card-text">Some text inside the fourth card</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Web;