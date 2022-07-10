import React from 'react';
import PageHeader from "../components/PageHeader/PageHeader";
import ImageRequestPage from "../components/UploadFile/ImageRequestPage";


function UploadDecalPage() {

    return (
        <>
        <div className="page-container">
            <PageHeader page="UPLOAD" intro="Share your decals with the rest of the community!"/>

             <ImageRequestPage/>

        </div>
        </>
    );
}

export default UploadDecalPage;