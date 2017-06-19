/* global Consigliere */
describe('Core', function() {
  it('Consigliere exists', () => expect(Consigliere).is.not.undefined )

  it('it can read a list of tokens', () => {
    var consigliere = new Consigliere(['12345', '67890'])
    expect(consigliere.tokens.length).is.equal(2)
  })

  it('it can handle an empty list of tokens', () => {
    var consigliere = new Consigliere()
    expect(consigliere.tokens.length).is.equal(0)
    consigliere = new Consigliere([])
    expect(consigliere.tokens.length).is.equal(0)
  })
})