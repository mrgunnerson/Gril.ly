import React, { Component } from "react";


class Landing extends Component {
    render() {
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Gril.ly</b> {" "}
                            <span style={{ fontFamily: "monospace" }}>TIME</span>
                        </h4>
                        <p className="flow-text grey-text text-darken-1">
                            Some placeholder text
                        </p>
                        <br />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;