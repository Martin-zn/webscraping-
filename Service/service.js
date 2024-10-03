import puppeteer from 'puppeteer'; //Lllamo a puppeteer

//Mercado libre web scraping
export async function mlScrap() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        userDataDir: './tmp'
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    await page.goto('https://listado.mercadolibre.cl/inmuebles/departamentos/rm-metropolitana/la-florida/arriendo_NoIndex_True#applied_filter_id%3Dcity%26applied_filter_name%3DCiudades%26applied_filter_order%3D6%26applied_value_id%3DTUxDQ0xBIGM5NzMz%26applied_value_name%3DLa+Florida%26applied_value_order%3D13%26applied_value_results%3D1328%26is_custom%3Dfalse%26view_more_flag%3Dtrue')

    await page.waitForSelector('.ui-search-layout__item');

    const allItems = await page.evaluate(() => {
        const items = document.querySelectorAll('.ui-search-layout__item');
        let data = [];

        items.forEach(item => {
            const title = item.querySelector('h2.poly-box.poly-component__title')?.innerText || item.querySelector('h2.ui-search-item__title')?.innerText;
            const price = item.querySelector('.andes-money-amount__fraction')?.innerText;

            const attributes = item.querySelectorAll('li.poly-attributes-list__item');
            const bedrooms = attributes[0]?.innerText || "No especificado";
            const bathrooms = attributes[1]?.innerText || "No especificado";
            const size = attributes[2]?.innerText || "No especificado";


            const url = item.querySelector('a')?.href;

            data.push({
                title,
                price, 
                // attributes,
                size, 
                bedrooms, 
                bathrooms, 
                url,
            });
        });
        return data;
    });

    console.log(allItems);

    // await browser.close();
}
