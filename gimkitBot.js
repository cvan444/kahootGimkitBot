const puppeteer = require('puppeteer');
const fs = require('fs/promises')
const cron = require('node-cron')

import gimkitSessionStorage from './gimkitSessionStorage.js';


import { gimkitTempBotName, gimkitTempGameCode } from './gimkitSessionStorage.js';

//Edit these values 
let gimkitKey = gimkitTempGameCode;
let gimkitUserName = gimkitTempBotName


//start puppetteer instructions

async function startGimkit() {
    for (let i = 0; i < 10; i++) {
    
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.gimkit.com/join?class=60a1e3ba9eaadc0022adafb6");

   
   //Select gimkit input field 
    const gimkitInputField = '##content > div > div > div > div > div > input';
    await page.waitForSelector(gimkitInputField);
    const field = await page.$(gimkitInputField);

    //Paste the gimkit key into the field
    await field.type(gimkitKey);


    //Click submit button
    const clickGimkitButtonSelector = '#content > div > div > div > div > div > div > div';
    await page.waitForSelector(clickGimkitButtonSelector);
    await page.click(clickGimkitButtonSelector);


    //Select name input field
    const nameGimkitInputField = '##content > div > div > div > div > div > input';
    await page.waitForSelector(nameGimkitInputField);
    const gimkitNameField = await page.$(nameGimkitInputField);

    //Paste the name into the field
    const numberGenerator = Math.floor(Math.random() * 9000) + 1000; //generate string of nums to attach after username
    await gimkitNameField.type(gimkitUserName + numberGenerator.toString());


    //Click Join button
    const clickGimkitNameSelector = '#content > div > div > div > div > div > div > div';
    await page.waitForSelector(clickGimkitNameSelector);
    await page.click(clickGimkitNameSelector);


    //Close browser after 1 seconds 
    setTimeout(async () => {
        await browser.close();
      }, 1000);
    
    }
}

startGimkit()