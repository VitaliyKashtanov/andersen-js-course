export class Controller {
  constructor(model, view) {
    this._model = model;
    this._view = view;

    view.on('listModified', idx => this.updateSelected(idx));
    view.on('addButtonClicked', () => this.addItem());
    view.on('delButtonClicked', () => this.delItem());

    view.on('listRecipeModified', idx => this.updateSelectedRecipe(idx));
    view.on('addButtonRecipeClicked', () => this.addRecipe());
    view.on('delButtonRecipeClicked', () => this.delRecipe());
  }

  addItem() {
    const item = {};
    item.name = document.getElementById('inputText').value;
    if (item) {
      this._model.addItem(item);
      document.getElementById('inputText').value = '';
    }
  }

  addRecipe() {
    const itemRecipe = {};
    itemRecipe.elem1 = document.getElementById('inputTextRecipe').value;
    itemRecipe.elem2 = document.getElementById('inputTextRecipe2').value;
    itemRecipe.result = document.getElementById('inputTextRecipe3').value;
    const itemRes = `Первый элемент: ${itemRecipe.elem1}, второй элемент: ${
      itemRecipe.elem2
    }, резуультат: ${itemRecipe.result}`;

    if (itemRes) {
      this._model.addRecipe(itemRecipe);
      document.getElementById('inputTextRecipe').value = '';
      document.getElementById('inputTextRecipe2').value = '';
      document.getElementById('inputTextRecipe3').value = '';
    }
  }

  delItem() {
    const index = this._model.selectedIndex;
    if (index !== -1) {
      this._model.removeItemAt(index);
    }
  }

  delRecipe() {
    const indexRecipe = this._model.recipesIndex;
    if (indexRecipe !== -1) {
      this._model.removeRecipeAt(indexRecipe);
    }
  }

  updateSelected(index) {
    this._model.selectedIndex = index;
  }

  updateSelectedRecipe(index) {
    this._model.recipesIndex = index;
  }
}
