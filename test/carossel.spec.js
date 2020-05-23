browser.addCommand('getActiveSlide', () =>{
    carouselElements.findIndex(el => {
          return (el.getAttribute('class').includes('acitve') === true)
      });
})


describe("Carousell", () => {
  beforeEach(() => {
    browser.url("./#/carousel");
  });

  it("should count the amount of slides in the carousell", () => {
    const carouselList = browser.$$("div.carousel-item");
    console.log("the lenght is :" + carouselList.lenght);
  });

  it("renders carousel image + caption test", () => {
    const carouselElements = browser.$$("div.carousel-item");
    carouselElements.forEach((item) => {
      //extract the caption text
      const itemCaption = browser.$("div.carousel-caption >h3");
      //extract the image
      const itemImage = browser.$("div.picsum-img-wrapper > img");
      it("render the carousel image", () => {
        expect(itemImage.isDisplayed()).to.be.true;
      });

      it("render the caption text", () => {
        expect(itemCaption.isDisplayed()).to.be.true;
      });
    });
  })
  it.only('renders the next slide on next click', () => {
      const nextClick = browser.$('a.carousel-control-next');
      const carouselElements = browser.$$('div.carousel-item');
      const currentAciveSlide = browser.getActiveSlide(carouselElements);

      nextClick.click();
      const newActiveSlide = browser.getActiveSlide(carouselElements);
      expect(newActiveSlide).to.equal(currentAciveSlide + 1);  
  })

  it('renderns the previous slide on prev click', () =>{
    const prevClick = browser.$('a.carousel-control-next');
    const carouselElements = browser.$$('div.carousel-item');
    const currentAciveSlide = browser.getActiveSlide(carouselElements);

    prevClick.click();
    const newActiveSlide = browser.getActiveSlide(carouselElements);
    expect(newActiveSlide).to.equal(currentAciveSlide - 1);  
  })
});
