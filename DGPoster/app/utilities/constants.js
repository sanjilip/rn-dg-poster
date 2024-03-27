import page1 from '../reduxToolkit/api/JSONFiles/contentListPage1.json';
import page2 from '../reduxToolkit/api/JSONFiles/contentListPage2.json';
import page3 from '../reduxToolkit/api/JSONFiles/contentListPage3.json';

export const POSTER_HEADER_TITLE = page1.page.title;

export const INITIAL_PAGE = 1;

export const HARDWARE_BACK_PRESS = 'hardwareBackPress';

export const POSTER = [
    page1.page['content-items'].content,
    page2.page['content-items'].content,
    page3.page['content-items'].content
];

export const MISSING_IMAGE = require('../resources/images/placeholder_for_missing_posters.png');

export const IMAGES = {
    'poster1.jpg': require('../resources/images/poster/poster1.jpg'),
    'poster2.jpg': require('../resources/images/poster/poster2.jpg'),
    'poster3.jpg': require('../resources/images/poster/poster3.jpg'),
    'poster4.jpg': require('../resources/images/poster/poster4.jpg'),
    'poster5.jpg': require('../resources/images/poster/poster5.jpg'),
    'poster6.jpg': require('../resources/images/poster/poster6.jpg'),
    'poster7.jpg': require('../resources/images/poster/poster7.jpg'),
    'poster8.jpg': require('../resources/images/poster/poster8.jpg'),
    'poster9.jpg': require('../resources/images/poster/poster9.jpg')
};

export const LEFT_ICON = require('../resources/images/back.png');
export const RIGHT_ICON = require('../resources/images/search.png');
export const HEADER_BACKGROUND = require('../resources/images/nav_bar.png');

export const POSTER_DATA = [
    ...page1.page['content-items'].content,
    ...page2.page['content-items'].content,
    ...page3.page['content-items'].content
];
