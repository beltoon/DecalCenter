import RoleBasedComponent from "../helpers/RoleBasedComponent";
import {AuthContext} from "../context/AuthContext";
import React, {useContext} from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import AddCar from "../admintools/AddCar";
import DeleteCar from "../admintools/DeleteCar";
import DeleteDecal from "../admintools/DeleteDecal";
import AddEvent from "../admintools/AddEvent";

function AdminPage() {

    const {user} = useContext(AuthContext);

    return (

        <RoleBasedComponent
            role={user.role}
            supportedRoles={["ROLE_ADMIN"]}>
            <div className="page-container">
                <PageHeader page="ADMIN PAGE" intro="Available for those who make the world a better place"/>

                <AddCar/>

                <DeleteCar/>

                <DeleteDecal/>

                <AddEvent/>

            </div>
        </RoleBasedComponent>

    )
}

export default AdminPage;