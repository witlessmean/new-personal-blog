import React from 'react';
import { withRouter } from "react-router-dom";
import { CustomAdminButton } from "../buttons/AdminButton";

const AdminPage = () => {
    return (
        <>
        <CustomAdminButton style={{position: 'relative'}}  to="/admin-page/password-reset">Reset Password</CustomAdminButton>
       <div style={{position: 'relative'}} >
            this is the admin page
        </div>
        </>
    )
}

export default withRouter(AdminPage);

//after you reset password, reset the password state and push the user to the admin page. 
