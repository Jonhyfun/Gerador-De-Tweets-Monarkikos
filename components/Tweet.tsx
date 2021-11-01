import Script from "next/script";
import { useEffect, useState } from "react";

export function Tweet({fakeText} : {fakeText: string}) {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        var interval = setInterval(waitIframeDisplay, 300);
        function waitIframeDisplay() {
          if(document.querySelector('iframe').style.display !== 'none') {
              console.log(document.querySelector('iframe').style.display)
              setLoading(false);
              clearInterval(interval);
          }
        }
    },[])
    return(
        <div className="relative">
        {!loading && 
            <div className="text-xl h-14 leading-6 absolute text-black bg-white" style={{top:'83.333px', left: '18px', width: '512px'}}>
                {fakeText}
            </div>
        }
        <blockquote className="twitter-tweet text-transparent">
            <p lang="pt" dir="ltr">
            Flow é maior que esse cancelamento, nós não vamos a lugar algum, nós não estamos sozinhos.
            </p>
            &mdash; ♔ Monark (@monark) 
            <a href="https://twitter.com/monark/status/1454912673083232263?ref_src=twsrc%5Etfw">October 31, 2021</a>
        </blockquote> 
        <Script onLoad={()=>console.log('foi')} async src="https://platform.twitter.com/widgets.js"></Script>
        </div>
    )
}