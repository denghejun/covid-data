const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("https://ourworldindata.org/covid-stringency-index");
        await click("DOWNLOAD");
        await click("covid-stringency-index.csv");
    } catch (error) {
        console.error(error);
    } finally {
        closeBrowser();
    }
})();
