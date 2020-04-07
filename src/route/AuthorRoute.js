import { Router } from 'express';

import AuthorBus from '../bus/AuthorBus';

const authorRoute = Router();

authorRoute.get('/authors', AuthorBus.getAuthors);
authorRoute.get('/authors/:author_id', AuthorBus.getAuthor);
authorRoute.post('/authors', AuthorBus.createAuthor);
authorRoute.put('/authors/:author_id', AuthorBus.updateAuthor);
authorRoute.delete('/authors/:author_id', AuthorBus.removeAuthor);

export default authorRoute;