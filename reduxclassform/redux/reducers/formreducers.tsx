const initState = {
  employeedata: {},
};

const formreducer = (state = initState, action: any) => {
  // console.log('action', action);
  switch (action.type) {
    case 'STEP_ONE':
      return {
        ...state,
        employeedata: {...state.employeedata, ...action.payload},
      };
    default:
      return state;
  }
};

export default formreducer;
