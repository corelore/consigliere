import helpers from './helpers/helpers'

/**
 * Consigliere token broker as ES6 class.
 */
export default class {
  constructor(tokens) {
    // Check for tokens and assign empty array if none present.
    this.tokens = (!tokens || !tokens.length) ? [] : tokens
  }
  get message() {
    return `${this.text} ${this.name}!`
  }
  set message(text) {
    this.text = helpers.trim(text)
  }

  get token() {
    return `${this.tokens[index]}`
  }
  set token(token) {
    this.tokens.push(token)
  }

  getFreshToken(tokenType) {
    return tokens[0]
  }
  setExpireToken(token) {
    return tokens[0]
  }
}