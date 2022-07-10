const RoleBasedComponent = ({ children, supportedRoles, role }) => {
    return (
        <div>
            {supportedRoles.indexOf(role) > -1 ? children : <h2>Access Denied</h2>}
        </div>
    );
};

export default RoleBasedComponent;