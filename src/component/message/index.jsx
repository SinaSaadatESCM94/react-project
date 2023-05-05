import React from "react";
import PropTypes from "prop-types";
import "./message.scss";

function Message({ textMessage }) {
  return (
    <div>
      <div className="d-flex p-3 message-container rounded-4 h6">
        {!textMessage.length < 200 ? textMessage : "Long message"}
      </div>
    </div>
  );
}

Message.propTypes = { textMessage: PropTypes.string };
Message.defaultProps = {
  textMessage:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio repudiandae aliquid quas quia ab ipsum eos, quisquam magnam laboriosam accusantium!",
};

export default Message;
