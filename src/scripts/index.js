import '../styles/main.css';

import MainModel from './models/mainModel';
import MainView from './views/mainView';
import MainController from './controllers/mainController';

// wiring up model, views, and controllers
const model = new MainModel();
const view = new MainView();
const controller = new MainController(model, view); 