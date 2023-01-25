import './index.html';
import './index.scss';

import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';
import { mainPage } from './modules/mainPage/mainPage';
import { router } from './modules/router';
import { menMainPage } from './modules/mainPage/menMainPage';
import { WomenMainPage } from './modules/mainPage/womenMainPage';


router.on('*', () => {
    renderHeader();
    renderFooter();
});

router.on('/', () => {
    mainPage()
});

router.on('women', () => {
    WomenMainPage()
});

router.on('men', () => {
    menMainPage()
});


// setTimeout(() => {
//     router.navigate('men')
// }, 3000);

// setTimeout(() => {
//     router.navigate('women')
// }, 6000);

router.resolve();

