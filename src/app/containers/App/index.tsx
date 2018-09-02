import * as React from 'react';
import { connect } from 'react-redux';

import { Form } from 'app/components/Form';
import { helloWorld } from 'app/actions/helloWorld';

const AppContainer = (props: { text: string; dispatchHelloWorld: (hello: string) => void }) => (
  <div>
    <Form onSubmit={() => props.dispatchHelloWorld('hello')} />
  </div>
);

const mapStateToProps = (state: { helloWorld: string }) => {
  return {
    text: state.helloWorld
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchHelloWorld: (hello: string) => dispatch(helloWorld(hello))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
