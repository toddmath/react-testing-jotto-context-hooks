import axios from 'axios'

export const getSecretWord = async setSecretWord => {
  const response = await axios.get('http://localhost:3030')
  // console.log(response.data.secretWord);
  setSecretWord(response.data.secretWord)
}

export default {
  getSecretWord,
}
