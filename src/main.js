import './styles/main.css';
import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';

const data = [];
const model = new Model(data);
const view = new View();

const controller = new Controller(model, view);

controller.fetchNews();

// Please use https://open-platform.theguardian.com/documentation/
