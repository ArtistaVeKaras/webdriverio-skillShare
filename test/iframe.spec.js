describe('Iframe',() =>{
    beforeEach(() =>{
        browser.url('./#/iframe')
    })

    it('should get the text from the iframe',() =>{
        const btn = browser.$('button.btn')
        const text =browser.$('h1')
        btn.click()

        browser.switchToFrame(0) //enter in the iframe
        console.log('Header text is:' + text.getText())
        expect(text).to.equal('From parent to iframe')
        
    })
})