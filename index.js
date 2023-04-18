const puppeteer = require('puppeteer');
const fs = require('fs/promises')
const cron = require('node-cron')

import { gameCode, botName } from './kahootSessionStorage.js';



//Edit these values 
const kahootKey = ''
const userName = ' '


//start puppetteer instructions

async function startKahoot() {
    for (let i = 0; i < 10; i++) {
    
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://kahoot.it/");

   
   //Select kahoot input field 
    const kahootInputField = '#game-input';
    await page.waitForSelector(kahootInputField);
    const field = await page.$(kahootInputField);

    //Paste the kahoot key into the field
    await field.type(kahootKey);


    //Click submit button
    const clickButtonSelector = '#root > div.controller__AppWrapper-sc-1m4rw0k-0.kJqUlD > div > div > div.sc-bATJPV.eBHtWy.sc-dzAwWg.drFGIL > div.sc-glalpP.duYZnJ > div.sc-bTtZEv.tzTnm > main > div > form > button';
    await page.waitForSelector(clickButtonSelector);
    await page.click(clickButtonSelector);


    //Select name input field
    const nameInputField = '#nickname';
    await page.waitForSelector(nameInputField);
    const nameField = await page.$(nameInputField);

    //Paste the name into the field
    const numberGenerator = Math.floor(Math.random() * 9000) + 1000; //generate string of nums to attach after username
    await nameField.type(userName + numberGenerator.toString());


    //Click OK, go! button
    const clickNameSelector = '#root > div.controller__AppWrapper-sc-1m4rw0k-0.kJqUlD > div > div > div > div.sc-glalpP.duYZnJ > div.sc-bTtZEv.tzTnm > main > div > form > button';
    await page.waitForSelector(clickNameSelector);
    await page.click(clickNameSelector);


    //Close browser after 1 seconds 
    setTimeout(async () => {
        await browser.close();
      }, 1000);
    
    }
}

startKahoot()