import { h, app } from './hyperapp.js'

const state = {
  count: 0,
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value }),
}

const view = (state, actions) =>
  h("div", {}, [
    h("h1", {}, state.count),
    h("button", { onclick: () => actions.down(1) }, "-"),
    h("button", { onclick: () => actions.up(1) }, "+"),
  ])

document.body.innerHTML = '' // vote for https://github.com/hyperapp/hyperapp/pull/591

app(state, actions, view, document.body)
