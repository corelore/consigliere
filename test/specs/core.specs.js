/* global Consigliere */
describe('Core', function() {
  it('Consigliere exsists', () => expect(Consigliere).is.not.undefined )

  it('it can send friendly messages', () => {
    var consigliere = new Consigliere()
    expect(consigliere.message).is.equal('hi there Dear Coder!')
    // these white spaces will be trimmed
    consigliere.message = '   goodbye         '
    expect(consigliere.message).is.equal('goodbye Dear Coder!')
  })
})