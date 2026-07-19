import { expect, test } from '@playwright/test'
test('Facebook Page', async ({ page }) => {
    await page.goto('https://www.facebook.com/')
    await expect(page.getByText('Log in to Facebook')).toBeVisible()
    await page.waitForTimeout(3000)
    const uname = await page.getByText('Email address or mobile number')
    await expect(uname).toBeVisible()
    await page.waitForTimeout(2000)
    const password = await page.locator("//label[contains(text(),'Password')]")
    await expect(password).toBeVisible()

    
});
