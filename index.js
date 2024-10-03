import { mlScrap } from './Service/service.js';
import { googleScrap, googleSimpleScrap } from './Service/GoogleService.js';


// googleSimpleScrap('https://www.google.com/maps/search/constructora/@-33.4853056,-70.5930901,14630m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D');
// googleScrap('https://www.google.com/maps/search/constructora/@-33.4853056,-70.5930901,14630m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D');

//Tratare de scrapear mercado libre
mlScrap()