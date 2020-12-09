// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { Route, Redirect } from "react-router-dom";
// import { Request } from "../services";

// const PrivateRouter = ({ page, roles, ...props }) => {
// const [isAuthenticated, setIsAuthenticated] = useState(false);
// const [isAuthFetched, setIsAuthFetched] = useState(false);
// const [isAuthorized, setIsAuthorized] = useState(false);
// const [isRoleFetched, setIsRoleFetched] = useState(false);

// useEffect(() => {
// Request.fetchAuth();
// async function fetchAuth() {
// const { token } = await Request.fetchAuth();
// }

// fetchAuth();
// }, []);

// // return <Route {...props} render={}/>;
// };

// export default PrivateRouter;

// PrivateRouter.prototype = {
// page: PropTypes.elementType.isRequired,
// };
