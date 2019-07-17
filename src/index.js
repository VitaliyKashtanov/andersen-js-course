import { Model } from './Model';
import { Controller } from './Controller';
import { View } from './View';

window.addEventListener('load', () => {
  const model = new Model(
      [{ name: 'палка' }, { name: 'огонь' }],
      [
        { elem1: 'палка', elem2: 'огонь', result: 'факел' },
        { elem1: 'вода', elem2: 'земля', result: 'болото' },
      ]
    ),
    view = new View(model, {
      list: document.getElementById('list'),
      addButton: document.getElementById('plusBtn'),
      delButton: document.getElementById('minusBtn'),

      listRecipe: document.getElementById('listRecipe'),
      addButtonRecipe: document.getElementById('plusBtnRecipe'),
      delButtonRecipe: document.getElementById('minusBtnRecipe'),
    }),
    controller = new Controller(model, view);

  view.show();
  // view.check(model._recipes, model._items[0], model._items[1]);
});