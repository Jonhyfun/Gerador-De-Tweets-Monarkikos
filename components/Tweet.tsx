import Script from "next/script";
import { useEffect, useState } from "react";
import { isMobile, isTablet } from 'react-device-detect';

export function Tweet({fakeText} : {fakeText: string}) {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        var interval = setInterval(waitIframeDisplay, 300);
        var cleaninterval = setInterval(() => clearInterval(interval),1500);
        function waitIframeDisplay() {
          if(document.querySelector('iframe').style.display !== 'none') {
              setLoading(false);
              clearInterval(interval);
          }
        }
    },[])
    return(
        <div className="relative">
        {!loading && 
            <div className="mobileFakeText text-sm md:text-xl h-14 md:leading-6 absolute text-black bg-white" style={{top:'83.333px', left: '18px', width: '512px'}}>
                {fakeText}
            </div>
        }
        <blockquote className="twitter-tweet text-transparent">
            <p lang="pt" dir="ltr">
                {(isMobile && !isTablet) ? 'Flow é maior que esse cancelamento,' : 'Flow é maior que esse cancelamento, nós não vamos a lugar algum, nós não estamos sozinhos.'}
            </p>
            &mdash; ♔ Monark (@monark) 
            <a href="https://twitter.com/monark/status/1454912673083232263?ref_src=twsrc%5Etfw">October 31, 2021</a>
        </blockquote> 
        <Script async src="https://platform.twitter.com/widgets.js"></Script>
        <p onClick={()=>setLoading(false)} className="cursor-pointer underline text-white">firefox?</p>
        </div>
    )
}