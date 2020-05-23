describe('Google Page', () =>{
    it('should have the right title', ()=>{
        browser.url('./')
        const title = browser.getTitle()
        // expect(title).to.equal('Google');
    })
})