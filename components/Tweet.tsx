import Script from "next/script";
import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { isMobile, isTablet } from 'react-device-detect';
import { tweetBase } from "../utils/generate-text";

export function Tweet({fakeText, monarkisses, setChaos} : {fakeText: string, monarkisses: any, setChaos: Dispatch<SetStateAction<boolean>>}) {
    const [loading, setLoading] = useState(true);
    const tweets = useRef(tweetBase(monarkisses).length);
    const tweetOverlayRef = useRef<HTMLDivElement>();

    useEffect(()=>{
        var interval = setInterval(waitIframeDisplay, 600);
        setInterval(() => clearInterval(interval),1500);
        function waitIframeDisplay() {
          if(document.querySelector('[class="twitter-tweet twitter-tweet-rendered"]') !== null && tweetOverlayRef.current !== undefined) { 
            tweetOverlayRef.current.classList.remove('opacity-0')
            setLoading(false);
            clearInterval(interval);
          }
        }
    },[tweetOverlayRef.current])

    return(
        <div className="relative">
            <div key={loading.toString()} ref={tweetOverlayRef} className="mobileFakeText opacity-0 text-sm md:text-xl h-14 md:leading-6 absolute text-black bg-white" style={{top:'83.333px', left: '18px', width: '512px'}}>
                {fakeText}
            </div>
            <blockquote className="twitter-tweet text-transparent">
                <p lang="pt" dir="ltr">
                    {(isMobile && !isTablet) ? 'Flow é maior que esse cancelamento,' : 'Flow é maior que esse cancelamento, nós não vamos a lugar algum, nós não estamos sozinhos.'}
                </p>
                &mdash; ♔ Monark (@monark) 
                <a href="https://twitter.com/monark/status/1454912673083232263?ref_src=twsrc%5Etfw">October 31, 2021</a>
            </blockquote> 
            <Script async src="https://platform.twitter.com/widgets.js"></Script>
            <div className="flex gap-2 flex-wrap w-4/5 md:gap-0 md:w-full md:flex-nowrap justify-between">
                <label className="inline-flex items-center">
                    <input onChange={(e)=>setChaos(e.target.checked)} type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-white">tweets caóticos?</span>
                </label>
                <p onClick={()=>{setLoading(false); alert('tente desativar o mixed-content blocking')}} className="cursor-pointer underline text-white">firefox?</p>
                <p className="text-white">{tweets.current} tweets usados</p>
            </div>
        </div>
    )
}