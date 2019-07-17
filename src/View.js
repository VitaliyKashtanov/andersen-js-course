import { EventEmitter } from './EventEmitter';

export class View extends EventEmitter {
  constructor(model, elements) {
    super();
    this._model = model;
    this._elements = elements;

    model
      .on('itemAdded', () => this.rebuildList())
      .on('itemRemoved', () => this.rebuildList())
      .on('recipeAdded', () => this.rebuildListRecipe())
      .on('recipeRemoved', () => this.rebuildListRecipe());

    elements.list.addEventListener('change', e =>
      this.emit('listModified', e.target.selectedIndex)
    );
    elements.addButton.addEventListener('click', () => this.emit('addButtonClicked'));
    elements.delButton.addEventListener('click', () => this.emit('delButtonClicked'));

    elements.listRecipe.addEventListener('change', e =>
      this.emit('listRecipeModified', e.target.recipesIndex)
    );
    elements.addButtonRecipe.addEventListener('click', () => this.emit('addButtonRecipeClicked'));
    elements.delButtonRecipe.addEventListener('click', () => this.emit('delButtonRecipeClicked'));
  }

  check(arrRecipe, obj1, obj2) {
    arrRecipe.forEach(element => {
      console.log(element.elem1, element.elem2, element.result);
    });
    arrRecipe.every(element => {
      if (
        (element.elem1 == obj1.name && element.elem2 == obj2.name) ||
        (element.elem2 == obj1.name && element.elem1 == obj2.name)
      ) {
        return element.result;
      }
    });
  }

  show() {
    this.rebuildList();
    this.rebuildListRecipe();
  }

  rebuildList(arrObj) {
    const list = this._elements.list;
    list.innerHTML = '';
    this._model.getItems().forEach(item => {
      var div = document.getElementById('list');
      // list.innerHTML = "";
      var span = document.createElement('span');
      var br = document.createElement('br');
      div.appendChild(span);
      div.appendChild(br);
      span.innerText = item.name;
      span.onclick = function() {
        arrObj = item.name;
      };
    });
    this._model.selectedIndex = -1;
  }

  rebuildListRecipe() {
    const listRecipe = this._elements.listRecipe;
    listRecipe.innerHTML = '';
    this._model.getRecipes().forEach(item => {
      var div = document.getElementById('listRecipe');
      var spanElem1 = document.createElement('span');
      var spanElem2 = document.createElement('span');
      var spanResult = document.createElement('span');
      var br = document.createElement('br');
      div.appendChild(spanElem1);
      spanElem1.innerText = `${item.elem1} `;
      div.appendChild(spanElem2);
      spanElem2.innerText = `${item.elem2} `;
      div.appendChild(spanResult);
      div.appendChild(br);
      spanResult.innerText = item.result;
    });
    this._model.recipesIndex = -1;
  }
}
