import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @service session; 
  @service router; 

  username = ''; 
  password = ''; 


  @action
  updateUsername(event) {
    this.username = event.target.value; 
  }

  @action
  updatePassword(event) {
    this.password = event.target.value;
  }

  @action
  login(event) {
    event.preventDefault(); 

    let username = this.username;
    let password = this.password;

    if (this.session.authenticate(username, password)) {
      let attemptedTransition = this.session.attemptedTransition;

      if (attemptedTransition) {
        attemptedTransition.retry();
        this.session.attemptedTransition = null; 
      } else {
        this.router.transitionTo('index'); 
      }
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
