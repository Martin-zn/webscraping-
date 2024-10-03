import puppeteer from 'puppeteer'; //Lllamo a puppeteer

export async function googleScrap(url){
    const browser = await puppeteer.launch({
        headless: false,
        slowmo: 500
    })

    const page = await browser.newPage();

    await page.goto(url,{
        waitUntil: 'networkidle2'
    });

    let previousHeight;
    const allResults = [];

    while (true){
        const newResults = await page.evaluate(() => {
            const data = document.querySelectorAll(".lcr4fd")
            console.log(data)
            const links = [ ...data ].map(element => {
                const link = element.querySelector('a');
                if (link) {
                    return link.href;
                }
                return null;
            }).filter(Boolean);
            console.log(links)
            return links;
        });
        

        allResults.push(...newResults);

        previousHeight = await page.evaluate('document.body.scrollHeight');
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');

        await new Promise(resolve => setTimeout(resolve, 2000));

        const newHeight = await page.evaluate('document.body.scrollHeight');
        if (newHeight === previousHeight){
            break;
        }

    }

    
    console.log(allResults);
    await browser.close();
 
}

export async function googleSimpleScrap(url){
    const browser = await puppeteer.launch({
        headless: false,
        slowmo: 500
    })

    const page = await browser.newPage();

    await page.goto(url,{
        waitUntil: 'networkidle2'
    });

    const results = await page.evaluate(() => {
        const links = [...document.querySelectorAll('a.lcr4fd')];

        return links.map(link => link.href);
    })

    console.log(results);
    await browser.close();
 
}