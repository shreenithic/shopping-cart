import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { products } from '../data/products';

export default class ItemRoute extends Route {

  @service session;
  @service router;
  
  beforeModel(transition) {
    if (!this.session.isAuthenticated) {
     
      this.session.attemptedTransition = transition;
      this.router.transitionTo('login'); 
    }
  }

  model(params) {
    const { item_id } = params;
    const product = products.find(({ id }) => id === item_id);

    return product;
  }
}
