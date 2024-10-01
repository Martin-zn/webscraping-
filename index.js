import puppeteer from 'puppeteer'; //Lllamo a puppeteer

//Creo una funcion
async function openWebPage(){
    //Inicializo puppeteer, osea declaro una instancia de esta
    //Esta es asincrona
    const browser = await puppeteer.launch();
    //
    const page = await browser.newPage();


}