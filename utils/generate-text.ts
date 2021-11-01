import Markov from 'markov-strings';
 
export function GenerateText(monarkisses: string) {
    const data = monarkisses.split('\n').map((word) => word.replace('\r', '')).filter((word) => {return word.replace(/([\r\n]){1,}/g, '\n\n')});
    console.log(data)

    const markov = new Markov({ stateSize: 2 })
    
    markov.addData(data)
    
    const options = {
      maxTries: 200,

      prng: Math.random,
    
      filter: (result) => {
        return result.refs.length !== 1 && data.includes(result.string) === false && result.string.length < 113
      }
    }
    
    const result = markov.generate(options)
    return result.string
}