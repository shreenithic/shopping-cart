import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    queryParams = ['showAvailableOnly', 'searchText'];

    @tracked showAvailableOnly = false;
    @tracked searchText = ''; 
  
    get filteredProducts() {
      let products = this.model;
  
      if (this.showAvailableOnly) {
        products = products.filter(product => product.isAvailable);
      }
  
      if (this.searchText) {
        products = products.filter(product =>
          product.name.toLowerCase().includes(this.searchText.toLowerCase()) 
        );
      }
  
      return products;
    }
  
    @action
    toggleAvailability(isChecked) {
      this.showAvailableOnly = isChecked;
    }
  
    @action
    updateSearchText(newSearchText) {
      this.searchText = newSearchText; 
    }
}
