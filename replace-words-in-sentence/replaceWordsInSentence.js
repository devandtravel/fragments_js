function censor() {
  const pairs = []
  return function replaceWordsInSentence(string1, string2) {
    if (arguments.length > 2) {
      console.log('to many arguments')
      return
    }
    if (arguments.length === 2) {
      pairs.push([string1, string2])
    } else if (pairs) {
      let sentence = string1
      pairs.forEach(pair => {
        sentence = sentence.replace(pair[0], pair[1])
      })
      return sentence
    } else {
      console.log('no pairs, so nothing to replace')
      return
    }
  }
}
const changeScene = censor()
changeScene('PHP', 'JS')
changeScene('backend', 'frontend')
console.log(changeScene('PHP is the most popular programming language for backend web-development'))
