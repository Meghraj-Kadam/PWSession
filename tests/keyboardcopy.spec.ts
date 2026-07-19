import { test } from '@playwright/test'

test('kebboard action', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare')
    await page.getByPlaceholder("Paste one version of the text here.").fill("First Input Box")
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.keyboard.press('Control+V')

    //    await page.getByPlaceholder("Paste another version of the text here.")





    await page.waitForTimeout(2000)

})