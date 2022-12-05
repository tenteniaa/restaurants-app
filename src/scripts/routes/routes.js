/* eslint-disable spaced-comment */
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
//import About fron '../views/components/about';

const routes = {
  '/': Home, // default page
  '/restaurants': Home,
  '/detail/:id': Detail,
  '/like': Like,
  //'/about' : About,
};

export default routes;
