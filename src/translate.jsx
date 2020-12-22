import React, { useState } from "react";
import Dropdown from "./dropdown";
import Convert from "./convert";
const options = [
   {
      id: 1,
      label: "Marathi",
      value: "mr",
   },
   {
      id: 2,
      label: "Hindi",
      value: "hi",
   },
   {
      id: 3,
      label: "Tamil",
      value: "ta",
   },
   {
      id: 4,
      label: "Gujarati",
      value: "gu",
   },
   {
      id: 5,
      label: "English",
      value: "en",
   },
];
const Translate = () => {
   const [language, setLanguage] = useState(options[0]);
   const [text, setText] = useState("");

   return (
      <div className='container'>
         <div className='row'>
            <div className='col-md-12'>
               <input
                  style={{ marginTop: "40px" }}
                  type='search'
                  className='form-control'
                  placeholder='search text'
                  onChange={(e) => setText(e.target.value)}
               />
            </div>
         </div>
         <Dropdown
            options={options}
            defaultoption={language}
            updatelanguage={setLanguage}
         />
         <Convert text={text} language={language} />
      </div>
   );
};

export default Translate;
