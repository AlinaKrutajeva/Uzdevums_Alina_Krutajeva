module.exports = {
  "@tags": ["ssLv"],

  "The first advertisement from the list of premises on https://www.ss.lv/lv/"(browser) {

    const page = browser.page.ssLv();

    page
      .navigate()
      .assert.visible("@premises")
      .assert.attributeContains("@premises", "title", "Telpas")
      .click("@premises")
      .click("@advertisementsFilter")
      .assert.visible("@optionTheLast5Days")
      .assert.textContains("@optionTheLast5Days", "Par 5 dienām")
      .click("@optionTheLast5Days")
      .getText("@firstAdvertismentDescription", function (result) {
        console.log("First advertisement description:", result.value);
      })
      .getText("@firstAdvertisementDistrict", function (result) {
        console.log("First advertisement district:", result.value);
      })
      .getText("@firstAdvertisementPrice", function (result) {
        console.log("First advertisement price:", result.value);
      })
      .saveScreenshot("tests_output/ssLv.png")
      .end();
  },
};
