import React from "react";

const Dropdown = (props) => {
   const renderData = props.options.map((data) => {
      if (props.defaultoption.value === props.updatelanguage.value) {
         return null;
      }
      return (
         <React.Fragment key={data.id}>
            <a
               className='dropdown-item'
               onClick={() => props.updatelanguage(data)}
               style={{ cursor: "pointer" }}
            >
               {data.label}
            </a>
         </React.Fragment>
      );
   });

   return (
      <div className='container'>
         <div className='row'>
            <div className='col-md-12'>
               <h3 style={{ textAlign: "center", marginTop: "40px" }}>
                  Show Languages
               </h3>
            </div>
         </div>
         <div className='row'>
            <div className='col-md-12'>
               <div className='dropdown'>
                  <button
                     style={{ marginTop: "40px" }}
                     className='btn btn-secondary dropdown-toggle'
                     type='button'
                     id='dropdownMenuButton'
                     data-toggle='dropdown'
                     aria-haspopup='true'
                     aria-expanded='false'
                  >
                     {props.defaultoption.label}
                  </button>
                  <div
                     className='dropdown-menu '
                     aria-labelledby='dropdownMenuButton'
                  >
                     {renderData}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dropdown;
