import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../component";
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-100 vh-100 overflow-hidden d-flex flex-column align-items-center justify-content-center bg-dark">
      <h1 className="text-white fw-bolder fs-huge">4O4</h1>
      <p className="text-white fw-bolde h1">Page not found</p>
      <div className="col-9 col-sm-6 col-md-4 h-auto d-flex align-item-center mt-5">
        <Button
          tabIndex="1"
          fontSize="h4"
          type="button"
          id="redirect-home"
          value="button"
          backgroundColor="btn-purple"
          borderRadius="rounded-2"
          showLoadingOnClick={false}
          onClick={() => {
            navigate("/SinaSaadatESCM94/react-project.git");
          }}
          label="login"
        />
      </div>
    </div>
  );
}

export default NotFound;
