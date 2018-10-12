import React from "react";
import { connect } from "react-redux";
import { toggleMessage } from "../toggle/actions";

import { bindActionCreators } from "redux";

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    {messageVisibility && <p>You will be seeing this</p>}

    <button onClick={toggleMessage}>Toggle me</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage: toggleMessage
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
