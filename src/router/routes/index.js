import authorRoutes from './AuthorRoute';
import bookRoutes from './BookRoute';
import userRoutes from './UserRoute';

const routes = authorRoutes.concat(bookRoutes).concat(userRoutes);
export default routes; 