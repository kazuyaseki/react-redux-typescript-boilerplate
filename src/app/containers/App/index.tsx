import * as React from 'react';
import { connect } from 'react-redux';

import { Form } from 'app/components/Form';
import { bindActionCreators, Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { TodoActions } from 'app/actions';
import { helloWorld } from '../../actions/helloWorld';
import { omit } from 'app/utils';

interface AppProps {
  text: string;
  helloWorld: (hello: string) => void;
  actions: TodoActions;
}

const AppContainer = (props: AppProps) => (
  <div>
    <input type="text" onChange={(e) => props.actions.addTodo({ text: e.target.value })} />
    <button onClick={() => props.helloWorld('hello')}>Hello World</button>
    <Form onSubmit={() => props.helloWorld('hello')} />
  </div>
);

const mapStateToProps = (state: { helloWorld: string }) => {
  return {
    text: state.helloWorld
  };
};

interface MyState {
  hoge: string;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<MyState, void, Action>) => ({
  actions: bindActionCreators(omit(TodoActions, 'Type'), dispatch),
  helloWorld: (hello: string) => dispatch(helloWorld(hello))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
