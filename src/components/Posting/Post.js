import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../ducks/reducer";
// import axios from "axios";
import {
  // MDBMask,
  MDBRow,
  MDBCol,
  // MDBBtn,
  // MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  // MDBAnimation,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter
  // MDBIcon
} from "mdbreact";
// import "./Post.css";

export class Post extends Component {
  // handleChange = (key, value) => {
  //   this.setState({ [key]: value });
  // };

  // toggleCollapse = collapseID => () =>
  //   this.setState(prevState => ({
  //     collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  //   }));

  render() {
    return (
      <div id="postPage">
        {/* <MDBView> */}
        {/* <MDBMask className="d-flex justify-content-center align-items-center gradient"> */}
        {/* <MDBBtn color="elegant">Create Post</MDBBtn> */}
        <div className="postContent">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                {/* THIS IS JUST DUMMIE DATA */}
                <MDBCard className="shadow-box-example hoverable">
                  <MDBCardBody className="btn stretched-link">
                    <MDBCardTitle tag="h5">{this.props.el.title}</MDBCardTitle>
                    <MDBCardText className="postText">
                      {/* className="btn stretched-link" */}
                      {this.props.el.content}
                      {/* <br />
                      <button>
                        <MDBIcon icon="arrow-alt-circle-up" />
                      </button>
                      <br />
                      <button>
                        <MDBIcon icon="arrow-alt-circle-down" />
                      </button> */}
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
                <MDBCardFooter className="footerBar">
                  <p>Last updated 1 min ago</p>
                  <button>
                    <i class="fas fa-comment-alt"> Comment</i>
                  </button>
                  <button>
                    <i class="fas fa-share"> Share</i>
                  </button>
                  <i class="fas fa-bookmark"> Save</i>
                  {/* <button>
                    <i class="fas fa-ellipsis-h"></i>
                  </button> */}
                </MDBCardFooter>
                {/* DUMMIE END */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        {/* </MDBView> */}
      </div>
    );
  }
}

export default connect(null, { updateUserInfo })(Post);
