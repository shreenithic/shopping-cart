import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
    @service session;

    setupController(controller) {
        super.setupController(...arguments);
        controller.set('auth', this.auth);
    }
}
