const expect = require('chai').expect;

describe('Tabs:', () =>{
    beforeEach(() =>{
        browser.url('./');
    })

    it('shows the first tab on page load',() => {
        const tabList = browser.$$('li.nav-items');
        console.log(tabList.length)
        expect(tabList.$('a').getAttribute('class')).to.contain('active')
    })

    it.skip('show the first tab content on page load',() =>{
        //fetch the paragrath
        const element = browser.$('h2')
        isDisplayed = element.isDisplayed()
        expect(isDisplayed).to.be.true
    })
    
    it('displays black header of the fiest tab', () => {
       const tabList = browser.$('li.nav-item')
       const firstTab = tabList[0];
       const firstLink = firstTab.$('a') 
       console.log(firstLink.getCSSProperty('color'))
    })

    it('the second tab becomes active when clicj on fancy tab', () => {
        const secondTab = browser('#fancy-tab')
        secondTab.click()
        expect(secondTab.getCSSProperty('class')).to.contain('active');
    })
})