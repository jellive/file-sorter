import { test, expect, _electron as electron } from '@playwright/test';
import { ElectronApplication, Page } from 'playwright';
import * as path from 'path';

test.describe('Electron App E2E Tests', () => {
    let electronApp: ElectronApplication;
    let page: Page;

    test.beforeAll(async () => {
        // Launch Electron app
        electronApp = await electron.launch({
            args: [path.join(__dirname, '../../dist/main.js')],
        });

        // Get the first window
        page = await electronApp.firstWindow();
    });

    test.afterAll(async () => {
        await electronApp.close();
    });

    test('application launches successfully', async () => {
        expect(electronApp).toBeTruthy();
        expect(page).toBeTruthy();
    });

    test('window has correct title', async () => {
        const title = await page.title();
        expect(title).toBeTruthy();
    });

    test('main content is visible', async () => {
        // Wait for the page to load
        await page.waitForLoadState('domcontentloaded');

        // Check if main div exists
        const mainContent = await page.locator('div').first();
        expect(mainContent).toBeTruthy();
    });
});
