import { test, expect } from '@playwright/test'

test('Test 1', async ({ page }) => {
    console.log('Test 1')

})
test('Test 2', async ({ page }) => {
    console.log('Test 2')
})
test('Test 3', async ({ page, browserName }) => {
    console.log("Test 5")
})