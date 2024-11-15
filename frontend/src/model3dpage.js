// import Content3d from "./model3d/content3d";
// import React from "react";
// import Header from "./homepagenew/components/Header";
// import HeaderStationary from "./homepagenew/components/HeaderStationary";

// function Model3dpage(){
//     return(
//         <div>
//             <HeaderStationary />
//             <div className="3dmodelpage pt-28">
//             <Content3d />
//             </div>
//         </div>
//     );
// }
// export default Model3dpage;
import Content from "./model3d/content3d";
import React from "react";
import Header from "./homepagenew/components/Header";

function Model2dpage() {
  return (
    <>
      <div style={{paddingTop:'95px'}}></div>
      <Header />
      <div class='contentbackground'style={{backgroundColor:'#1C2E3B',width:'94%',marginTop:'20px',borderRadius:'20px',padding:'20px',position:'relative',zIndex:'10',diplay:'flex',marginLeft:'53px',marginBottom:'7px'}}>
      <Content />
      </div>
    </>
  );
}
export default Model2dpage;
