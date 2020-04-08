import { Router } from 'express';
import { readdirSync } from "fs";
import { join } from 'path';

import HTTPMethods from '../constant/HTTPMethods';

class AppRouter {
    static router = Router();

    static registerRoute(route) {
        switch (route.httpMethod) {
            case HTTPMethods.GET :
                this.router.get(route.path, route.handler);
                break;
            case HTTPMethods.POST :
                this.router.post(route.path, route.handler);
                break;
            case HTTPMethods.PUT :
                this.router.put(route.path, route.handler);
                break;
            case HTTPMethods.DELETE :
                this.router.delete(route.path, route.handler);
                break;
            default:
                console.log("Unrecognised method");
        }
    }

    static registerRoutes(routes) {
        routes.forEach(route => {
            this.registerRoute(route);
        });
    }

    static importRoute(path) {
        console.log(path);
        let routes = require(path);
        console.log(routes);
        this.registerRoutes(routes.default);
    }
}

const routesDir = __dirname + '/routes';
readdirSync(routesDir)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    AppRouter.importRoute(join(routesDir, file));
  });

export default AppRouter.router;