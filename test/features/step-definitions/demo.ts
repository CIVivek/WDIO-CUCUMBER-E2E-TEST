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
  await browser.waitUntil(async ()=>{
    return await browser.getTitle()==="WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
  },{timeout: 20000, interval : 500, timeoutMsg: `Failed Loading WDIO web page : ${await browser.getTitle()}`})
  let url = await browser.getUrl();
  chai.expect(url).to.equal(ExpectedURL);
});

Given(/^A web page is opened$/, async function () {
  await browser.url("/");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^Perform web interaction$/, async function () {
  /*let inputBox=await $(`input[type=number]`);
  await inputBox.setValue("12345");
  await browser.debug();
  let num=123456
  let strNum=num.toString()
  inputBox.click();
  for(let i=0; i<strNum.length; i++){
    await browser.pause(1000);
    await browser.keys(strNum.charAt(i));   
  }*/

  /*let dropDownBoxEdit=await $(`//select/option[@selected="selected"]`);
  let actualValue=await dropDownBoxEdit.getText();
  console.log(actualValue)
  chai.expect(actualValue).to.equal("Please select an option");
  let dropDownBox = await $(`#dropdown`);
  await dropDownBox.selectByIndex(1);
  await browser.pause(3000);

  let dropDownElements=await $$(`select > option`);
  let arr=[]
  for(let i=0; i<dropDownElements.length;i++){
    let ele=await dropDownElements[i].getText()
    arr.push(ele)

  }
console.log(`Options array: ${arr}`)*/
/*let mainWintitle=await browser.getTitle()
let mainWinHandle=await browser.getWindowHandle()
console.log(`Title: ${mainWintitle}`)
console.log(`Handle: ${mainWinHandle}`)
let windowlink= await $('//a[@href="/windows/new"]')
windowlink.click()
await $('=Elemental Selenium').click()
let allWin=await browser.getWindowHandles()
console.log(allWin.length)
for(let i=0; i<allWin.length; i++){
  await browser.switchToWindow(allWin[i])
  if(await browser.getTitle()==="New Window"){
    break
  }
}
let eleNewWin=await $('<h3>')
let checkText=await eleNewWin.getText()
chai.expect(checkText).to.equal("New Window")
browser.switchToWindow(mainWinHandle)*/

/*let jsAlert=await $('//button[.="Click for JS Alert"]')
let jsConfirmAlert= await $('//button[.="Click for JS Confirm"]')
let jsPromptAlert= await $('//button[.="Click for JS Prompt"]')
await jsPromptAlert.click()
if(await browser.isAlertOpen()){
  console.log("In")
  let alertText=await browser.getAlertText()
  console.log(`Alert Text: ${alertText}`)
  await browser.sendAlertText(`Hello Alert !`)
  browser.acceptAlert()
}*/
/*await $(`#file-upload`).addValue(`${process.cwd()}/data/demo.txt`)
await $(`#file-submit`).click()*/

/*await $(`//a[@href="/iframe"]`).click()
let frameID=await $(`#mce_0_ifr`)
await browser.switchToFrame(frameID)
await $(`#tinymce`).addValue("thats good")
await browser.keys(["Meta","A"])
await browser.pause(1000)
await browser.keys("Delete")
await $(`#tinymce`).setValue("aas")
await browser.switchToParentFrame()*/
/*await $('span=Top Sellers in Books for you').scrollIntoView(false)
await browser.debug()*/
/*let table1Rows=await $$('//table[@id="table1"]/tbody/tr')
let table1Column= await $$('//table[@id="table1"]/thead/tr/th')
chai.expect(table1Rows.length).to.equal(4)
chai.expect(table1Column.length).to.equal(6)
let allData=[]
let personObj ={
  lastname: "",
  firstname: "",
  email: "",
  due: "",
  web: ""
}
for(let row=1;row<=table1Rows.length; row++){
  for (let col=1; col<=table1Column.length;col++){
    let data= await $(`//table[@id="table1"]/tbody/tr[${row}]/td[${col}]`).getText()
    //allData.push(data)
    if(col==1) personObj.lastname=data
    if(col==2) personObj.firstname=data
    if(col==3) personObj.email=data
    if(col==4) personObj.due=data
    if(col==5) personObj.web=data

  }
  allData.push(personObj)
}

console.log(`all data: ${JSON.stringify(allData)}`)
let arr=[]
for(let row=1;row<=table1Rows.length; row++){
  let firstName= await $(`//table[@id="table1"]/tbody/tr[${row}]/td[2]`).getText()
  let due= await $(`//table[@id="table1"]/tbody/tr[${row}]/td[4]`).getText()
  if(+(due.replace("$",""))>50){    
    arr.push(firstName)
  }
}
console.log(`single col value: ${arr}`)*/

await browser.execute(()=>{
  window.scrollBy(0, window.innerHeight)
})
await browser.pause(2000)
await browser.execute(()=>{
  window.scrollBy(0, -window.innerHeight)
})

await browser.execute(()=>{
  window.scrollTo(0, document.body.scrollHeight)
})
await browser.pause(2000)
await browser.execute(()=>{
  window.scrollTo(0, document.body.scrollTop)
})

});

