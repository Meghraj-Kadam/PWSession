import {test,expect, chromium} from '@playwright/test'

test('Window Handling', async({page})=>{

const browser= await chromium.launch()

const browsercontext1= await browser.newContext();
const page1= await browsercontext1.newPage();

const browsercontext2=await browser.newContext()
const page2=await browsercontext2.newPage()

await page1.goto('https://freelance-learn-automation.vercel.app/login')
await page2.goto('https://www.google.com/')


})