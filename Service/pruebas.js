
async function openWebPage(){

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 500
    });

    const page = await browser.newPage();

    await page.goto('https://example.com');
    await browser.close();

}

// openWebPage();

async function pictureOfPage(){
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 500
    })
    const page = await browser.newPage();

    await page.goto('https://vendemetuauto.cl');
    await page.screenshot({path: 'prueba.png'});
    await browser.close();
}
// pictureOfPage()


async function pictureOfLogin(){
    const browser = await puppeteer.launch({
        headless: false,
        slowmo: 500
    });

    const page = await browser.newPage();

    await page.goto('https://quotes.toscrape.com/');
    await page.click('a[href="/login"]');
    await page.screenshot({path: 'login.png'});
    await page.browser.close()
    
}

// pictureOfLogin()

async function getDataFromPage(){
    const browser = await puppeteer.launch({
        // headless: false,
        // slowmo: 500
    });

    const page = await browser.newPage();
    await page.goto('https://example.com');
    const result = await page.evaluate(() => {
        const title = document.querySelector('h1').innerText;
        const description = document.querySelector('p').innerText;
        const more = document.querySelector('a').innerText;

        return{
            title,
            description,
            more
        }
    })
    console.log(result);

    await browser.close();
}

// getDataFromPage()
