// export const STEP_ONE = 'STEP_ONE';
// export const STEP_TWO = 'STEP_TWO';
// export const STEP_THREE = 'STEP_THREE';
// export const BACK = 'BACK';

export const formdata1 = (payload: any) => {
  //   console.log(payload, 'payload');
  return {
    type: 'STEP_ONE',
    payload: payload,
  };
};
