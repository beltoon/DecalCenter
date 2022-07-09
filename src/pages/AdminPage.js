import RoleBasedComponent from "../components/RoleBasedComponent";
import {AuthContext} from "../context/AuthContext";
import React, {useContext} from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import AddCar from "../AdminTools/AddCar";
import DeleteCar from "../AdminTools/DeleteCar";
import DeleteDecal from "../AdminTools/DeleteDecal";
import AddEvent from "../AdminTools/AddEvent";

function AdminPage() {

    const {user} = useContext(AuthContext);

    return (
        <div className="outer-content-container">
        <RoleBasedComponent
            role={user.role}
            supportedRoles={["ROLE_ADMIN"]}>
            <div className=".inner-content-container">
                <PageHeader page="ADMIN PAGE" intro="Available for those who make the world a better place"/>

                <AddCar/>

                <DeleteCar/>

                <DeleteDecal/>

                <AddEvent/>

            </div>
        </RoleBasedComponent>
        </div>
    )
}

export default AdminPage;