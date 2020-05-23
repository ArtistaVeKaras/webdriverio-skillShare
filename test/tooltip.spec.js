describe('Tooltip:',()=>{
    beforeEach(() =>{
        browser.url('./#/tooltip')
    })
    it('on page load tooltip is not displayed',()=>{
        const tooltip = browser.$('ngb-tooltip-window')
        expect(tooltip.isDisplayed()).to.be.false;
    })

    it('should dislpay the tooptip wne button is clicked',()=>{
        const tooltip = browser.$('.tooltip-inner')
        const btn = browser.$('.btn')
        btn.click()
        expect(tooltip.isDisplayed()).to.be.true;
    })

    it('disapers the tooltip on press the escape',()=>{
        const btn = browser.$('button')
        const tooltip = browser.$('.tooltip-inner')
        btn.click()
        browser.keys('Escape');
        expect(tooltip.isDisplayed()).to.be.false;
    })
})