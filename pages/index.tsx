import { useState } from "react";
import { Tweet } from "../components/Tweet";
import { GenerateText } from "../utils/generate-text";

export async function getStaticProps(context) {
  const result =  await require(`../utils/monark.txt`).default;
  return {
    props: {
      monarkisses: result
    }, // will be passed to the page component as props
  }
}

export default function Index({monarkisses}) {
  const [generatedText, setText] = useState(GenerateText(monarkisses));
  return (
    <div className="w-screen h-screen flex flex-col gap-6 -mt-6 md:-mt-0 md:gap-10 justify-center items-center bg-blue-400">
      <p className="text-2xl md:text-4xl text-white" style={{fontFamily: 'Barlow, sans-serif', fontWeight: 500, textShadow: '2px 3px 1px black'}}>Gerador de tweets Monarkikos!</p>
      <Tweet monarkisses={monarkisses} fakeText={generatedText}/>
      <button onClick={() => setText(GenerateText(monarkisses))} className="hover text-white font-bold py-2 px-4 rounded-full" style={{boxShadow: '2px 4px 10px #00000050', backgroundColor: 'rgb(29, 155, 240)'}}>
        Gerar mais um Tweet!
      </button>
      <p style={{width:'85vw'}} className="text-white text-center">Esta é apenas a primeira versão dessa aplicação. Os resultados podem variar por ser uma geração aleatória com poucos dados de base ainda. Você pode contribuir com tweets <a className="text-blue-700 underline" href="https://github.com/Jonhyfun/Gerador-De-Tweets-Monarkikos">aqui</a></p>
    </div>
  )
}