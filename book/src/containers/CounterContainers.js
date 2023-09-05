import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { bindActionCreators } from 'redux';

function CounterContainers({ number, increase, decrease }) {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
}

// case 1

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//     console.log('increase');
//   },
//   decrease: () => {
//     dispatch(decrease());
//     console.log('decrease');
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainers);

// case 2

// export default connect(
//   (state) => ({
// number: state.counter.number,
//   }),
//   (dispatch) => ({
// increase: () => dispatch(increase()),
// decrease: () => dispatch(decrease()),
//   })
// )(CounterContainers);

// case 3

// export default connect(
//   (state) => ({
// number: state.counter.number,
//   }),
//   (dispatch) =>
// bindActionCreators(
//   {
// increase,
// decrease,
//   },
//   dispatch
// )
// )(CounterContainers);

// case 4

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainers);
