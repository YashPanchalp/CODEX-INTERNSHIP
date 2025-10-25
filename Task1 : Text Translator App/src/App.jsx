import { useState } from "react";
import axios from "axios";
import { Loader } from "lucide-react";


function App(){

  //to save the input text
  const [ textinput , setTextInput] =useState("");

  //to save which language is selected
  const [ selectValue , setSelectValue] =useState("");
  
  //save the translated text as result
  const [ result , setResult] =useState("");

  //add the loading state
  const [ loading , setLoading] =useState(false);

  //translate function to call the api
  const handleTextTranslation = async ()  => {
    //when the api call starts set loading to true
    setLoading (true);
    try{
      const options = {
        method: 'POST',
        url: 'https://google-translator9.p.rapidapi.com/v2',
        headers: {
    'x-rapidapi-key': '10d2d05841mshe0a5718783d5690p15c037jsne708c3247872',
    'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
    'Content-Type': 'application/json'
     },
     data: {
     q: `${textinput}`,
     source: 'en',
     target: `${selectValue}`,
     format: 'text'
     }
   };
    const response = await axios.request(options);
    //after the api call is complete set loading to false
    setLoading (false);
    console.log(response?.data?.data?.translations?.[Number(0)].translatedText);
    setResult (response?.data?.data?.translations?.[Number(0)].translatedText);
    }
    catch(error){
      setLoading (false);
      console.log("Error while calling the translation api", error);
    }
    
  }

  return (
    <div className="h-screen w-screen bg-slate-200 items-center justify-center flex">
       <div className="flex flex-col items-center justify-center gap-y-10"> 
        <h1 className="text-3xl color-zinc-700 font-bold">Text Translator</h1>
        <div className="flex  flex-col gap-y-5 items-center justify-center">
          <textarea name="input-text" id="" className="bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg font-bold text-gray-600 px-5 py-2"
          onChange = {(e) => setTextInput(e.target.value)}
          placeholder="Enter the English text to Translate"/>
          <textarea name="input-text" id="" className="bg-white  h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg font-bold text-gray-600 px-5 py-2"
          value={result} readOnly/>

        </div>

        <div>
          <label htmlFor="options" className="pr-2">Select Language :</label>
          <select name="value" className="bg-white px-2 py-1 rounded-lg border-zinc-700 outline-none cursor-pointer"
          onChange = {(e) => setSelectValue(e.target.value)}>

            <option value="">Select</option>
            <option value="hi">Hindi</option>
            <option value="gu">Gujrati</option>
          </select>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-[480px] cursor-pointer flex items-center justify-center gap-x-2"
        onClick={handleTextTranslation}>
          {
            loading ? (<Loader className="animate-spin"/>) : "Translate Text"
          }
          </button>
       </div>
    </div>
  );
}

export default App;