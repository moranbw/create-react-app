import {Viewer} from 'cesium';

let map;

const createMap = () => {
    map = new Viewer('map');
};

export default {
    createMap,
};
