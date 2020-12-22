import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = (props) => {
   console.log(props);
   const [convertText, setconvertText] = useState("");
   useEffect(() => {
      const lang = async () => {
         let response = await axios.post(
            "https://translation.googleapis.com/language/translate/v2",
            {},
            {
               params: {
                  q: props.text,
                  target: props.language.value,
                  key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
               },
            }
         );
         console.log(response.data.data.translations[0].translatedText);
         if (!props.text) {
            return null;
         }
         setconvertText(response.data.data.translations[0].translatedText);
      };
      lang();
   }, [props.text, props.language]);

   return (
      <React.Fragment>
         <h1>{convertText}</h1>
      </React.Fragment>
   );
};

export default Convert;
