import './index.html';
import './index.scss';

import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';
import { mainPage } from './modules/mainPage/mainPage';


renderHeader();
renderFooter();

mainPage()
