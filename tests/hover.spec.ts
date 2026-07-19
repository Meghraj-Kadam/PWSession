import { test } from '@playwright/test'
test('mouse event', async ({ page }) => {

    page.goto('https://demoqa.com/text-box')

    //await page.getByRole('button', { name: 'Submit' }).hover
    await page.getByPlaceholder('Full Name').fill('Hey')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.getByPlaceholder('name@example.com').click
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(10000)



    await page.waitForTimeout(10000)
})