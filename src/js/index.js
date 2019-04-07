import '../css/app.css';
// eslint-disable-next-line 
import { h, app } from './hyperapp';

app({
  init: 0,
  view: state => (
    <main>
      <h1 class='text-center text-2xl'>{state}</h1>
      <button class="btn bg-gray-200" onclick={state => state - 1}>-</button>
      <button class="btn ml-2 bg-blue-200" onclick={state => state + 1}>+</button>
    </main>
  ),
  container: document.body
})
