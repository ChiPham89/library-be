import { Router } from 'express';

import HTTPMethods from '../constant/HTTPMethods';
import authorRoutes from './AuthorRoute';
import bookRoutes from './BookRoute';
import userRoutes from './UserRoute';

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
}

AppRouter.registerRoutes(authorRoutes);
AppRouter.registerRoutes(bookRoutes);
AppRouter.registerRoutes(userRoutes);

export default AppRouter.router;