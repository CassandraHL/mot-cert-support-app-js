const { expect, browser, $ } = require("@wdio/globals");

describe("My Login application", () => {
	it("should login with valid credentials", async () => {
		await browser.url(`http://localhost:3000/#/login`);
        
        await $('input[name="email"]').setValue('admin@test.com')
        await $('input[name="password"]').setValue('password123')
        console.log(await browser.getUrl())
        await $('button').click()

        await browser.pause(2000)
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'http://localhost:3000/#/projects',
                {
                    timeout: 60000,
                    timeoutMsg: 'Timeout reached after 60 seconds; URL did not change to http://localhost:3000/#/projects'
                }
        );
        console.log(await browser.getUrl())
        const element = await $('.card-title')
        await expect(element).toHaveText('Projects')
	});
});
