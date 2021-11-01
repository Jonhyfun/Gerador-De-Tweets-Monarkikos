import { useState } from "react";
import { Tweet } from "../components/Tweet";
import { GenerateText } from "../utils/generate-text";

export default function Index() {
  const [generatedText, setText] = useState(GenerateText());
  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center bg-blue-400">
      <p className="text-4xl text-white" style={{fontFamily: 'Barlow, sans-serif', fontWeight: 500, textShadow: '2px 3px 1px black'}}>Gerador de tweets Monarkikos!</p>
      <Tweet fakeText={generatedText}/>
      <button onClick={() => setText(GenerateText())} className="hover text-white font-bold py-2 px-4 rounded-full" style={{boxShadow: '2px 4px 10px #00000050', backgroundColor: 'rgb(29, 155, 240)'}}>
        Gerar mais um Tweet!
      </button>
      <p style={{width:'700px'}} className="text-white">Esta é apenas a primeira versão dessa aplicação. Os resultados podem variar por ser uma geração aleatória com poucos dados de base ainda. Você pode contribuir com tweets <a className="text-blue-700 underline" href="">aqui</a></p>
    </div>
  )
}