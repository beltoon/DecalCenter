import React from 'react';
import PageHeader from "../components/PageHeader/PageHeader";
// import axios from "axios";
import ImageRequestPage from "../components/UploadFile/ImageRequestPage";


function UploadDecalPage() {

    return (
        <>
        <div className="page-container">
            <PageHeader page="UPLOAD" intro="Snel een beetje"/>

             <ImageRequestPage/>

        </div>
        </>
    );
}

export default UploadDecalPage;