import axios from 'src/utils/axiosMock';

export const SECTOR = '@analysis/sector';
export const SET_SECTOR = '@analysis/set-sector';

export const setSector = (sector) => {
    return (dispatch) => dispatch({
      type: SET_SECTOR,
      payload: {
        sector
      }
    });
  }
