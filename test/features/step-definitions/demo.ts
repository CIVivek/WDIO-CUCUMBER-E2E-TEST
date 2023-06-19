import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai";

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
});

Then(/^URL should match (.*)$/, async function (ExpectedURL) {
  let url = await browser.getUrl();
  chai.expect(url).to.equal(ExpectedURL);
});

Given(/^A web page is opened$/, async function () {
  await browser.url("/dropdown");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^Perform web interaction$/, async function () {
  //let inputBox=await $(`input[type=number]`);
  //await inputBox.setValue("12345");
  //await browser.debug();
  //let num=123456
  //let strNum=num.toString()
  //inputBox.click();
  //for(let i=0; i<strNum.length; i++){
    //await browser.pause(1000);
   // await browser.keys(strNum.charAt(i));   
  //}
  //let dropDownBoxEdit=await $(`//select/option[@selected="selected"]`);
 // let actualValue=await dropDownBox.getText();
  //chai.expect(actualValue).to.equal("Please select an option1");


  //let dropDownBox=await $(`#dropdown`)
  //dropDownBox.selectByAttribute("value","1");

  //let dropDownElements=$$(`select > option`);
  //await browser.debug();

});
