import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"

Given(/^Google page is opened$/, async function () {
  console.log(`Before opening the browser...`);
  await browser.url("https://www.google.com");
  await browser.pause(1000);
  console.log(`After opening the browser...`);
});

When(/^Search with (.*)$/, async function (SearchItem) {
  console.log(`>>Search Item : ${SearchItem}`);
  let searchField = await $(`[name=q]`);
  await searchField.setValue(SearchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  let firstSearchResultLink = await $(`<h3>`);
  firstSearchResultLink.click();
})

Then (/^URL should match (.*)$/, async function(ExpectedURL){
  let url= await browser.getUrl();
  chai.expect(url).to.equal(ExpectedURL);

})