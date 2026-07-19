import { test } from '@playwright/test'

test('file upload', async ({ page }) => {

    await page.goto('https://www.file.io/')
    await page.getByText('Upload Files').setInputFiles('InputFiles\path-6514885_1280.jpg')
    await page.waitForTimeout(4000)

})