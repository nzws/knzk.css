// import jQuery from 'jquery';
// import 'popper.js';
// import 'bootstrap';
//
// window.$ = jQuery;

import { app, h } from 'hyperapp';
import { Navbar } from './components/navbar';
import { Editor, editorActions } from './components/editor';
import { Preview } from './components/preview';

window.onload = () => {
  const state = {};

  const actions = {
    editorActions
  };

  const view = (state, actions) => (
    <div className="bg-light">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Editor state={state} actions={actions.editorActions} />
          </div>
          <div className="col-md-6">
            <Preview state={state} />
          </div>
        </div>
      </div>
    </div>
  );

  app(state, actions, view, document.body);
};
