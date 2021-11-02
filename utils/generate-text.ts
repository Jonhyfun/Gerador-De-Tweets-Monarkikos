import Markov from 'markov-strings';

export function tweetBase(monarkisses: string) {
  const data = monarkisses.split('\n').map((word) => word.replace('\r', '')).filter((word) => {return word.replace(/([\r\n]){1,}/g, '\n\n')});
  return {data, length: data.length}
}

export function GenerateText(monarkisses: string, chaos: boolean) {
    const data = tweetBase(monarkisses).data

    const markov = new Markov({ stateSize: chaos ? 1 : 2 })
    
    markov.addData(data)
    
    const options = {
      maxTries: 200,

      prng: Math.random,
    
      filter: (result) => {
        return result.refs.length !== 1 && data.includes(result.string) === false && result.string.length < 101
      }
    }
    
    const result = markov.generate(options)
    return result.string
}