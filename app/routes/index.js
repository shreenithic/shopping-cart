import Route from '@ember/routing/route';
import { products } from '../data/products';

export default class IndexRoute extends Route {
  queryParams = {
    showAvailableOnly: {
      refreshModel: true,
    },
    searchText: {
      refreshModel: false,
    },
  };

  model(params) {
    const { showAvailableOnly } = params;

    if (showAvailableOnly) {
      return products.filter((product) => product.isAvailable);
    } else {
      return products;
    }
  }
}
