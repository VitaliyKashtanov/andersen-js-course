import { EventEmitter } from './EventEmitter';

export class Model extends EventEmitter {
  constructor(items, recipes) {
    super();
    this._items = items || [];
    this._selectedIndex = -1;
    this._recipes = recipes || [
      { elem1: 'палка', elem2: 'огонь', result: 'факел' },
      { elem1: 'вода', elem2: 'огонь', result: 'пар' },
      { elem1: 'вода', elem2: 'земля', result: 'болото' },
    ];
    this._recipesIndex = -1;
  }

  getItems() {
    return this._items.slice();
  }

  getRecipes() {
    return this._recipes.slice();
  }

  addItem(item) {
    this._items.push(item);
    this.emit('itemAdded', item);
  }

  addRecipe(item) {
    this._recipes.push(item);
    this.emit('recipeAdded', item);
  }

  removeItemAt(index) {
    const item = this._items.splice(index, 1)[0];
    this.emit('itemRemoved', item);
    if (index === this._selectedIndex) {
      this.selectedIndex = -1;
    }
  }

  removeRecipeAt(index) {
    const itemRecipe = this._recipes.splice(index, 1)[0];
    this.emit('recipeRemoved', itemRecipe);
    if (index === this._recipesIndex) {
      this.recipesIndex = -1;
    }
  }

  get selectedIndex() {
    return this._selectedIndex;
  }

  get recipesIndex() {
    return this._recipesIndex;
  }

  set selectedIndex(index) {
    const previousIndex = this._selectedIndex;
    this._selectedIndex = index;
    this.emit('selectedIndexChanged', previousIndex);
  }

  set recipesIndex(index) {
    const previousIndexRecipe = this._recipesIndex;
    this._recipesIndex = index;
    this.emit('selectedRecipeChanged', previousIndexRecipe);
  }
}
