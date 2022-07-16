import '../styles/app.css';

import AppModel from './models/appModel';
import AppView from './views/appView';
import AppController from './controllers/appController';

// wiring up model, views, and controllers
const model = new AppModel();
const view = new AppView();
const controller = new AppController(model, view);