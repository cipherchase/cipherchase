import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions/actionCreators';

//retrieve state from store 
const mapStatetoProps = store => ({
  count: store.games.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => { dispatch(increment()) }
})

const MainContainer = ({ count, increment }) => (
  < div >
    <h1>Count : {count}</h1>
    < button onClick={increment}>
      Plus One
    </button >
  </div >
);

export default connect(mapStatetoProps, mapDispatchToProps)(MainContainer);