/* eslint-disable no-param-reassign */
import produce from 'immer';
import { SET_SECTOR } from 'src/actions/analysisActions';

const initialState = {
  sector: {
    
  }
};

const analysisReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SECTOR: {
      const { sector } = action.payload;
      return produce(state, (draft) => {
        draft.sector = sector
      });
    }
    default: {
      return state;
    }
  }
};

export default analysisReducer;
