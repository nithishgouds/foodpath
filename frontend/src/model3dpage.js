import Content3d from "./model3d/content3d";
import React from "react";
import Header from "./homepagenew/components/Header";

function Model3dpage(){
    return(
        <div>
            <Header />
            <div className="3dmodelpage pt-28">
            <Content3d />
            </div>
        </div>
    );
}
export default Model3dpage;