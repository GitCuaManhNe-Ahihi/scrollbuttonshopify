import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    background: "black",
    color: "#ffffff",
    icon: 0,
    positioni: { bottom: "50px", right: "20px" },
    valuepositioni: 0,
    borderR: 30,
    height: 30,
    width: 30,
    top:30,
    right: 30,
    left: 30,
    bottom:30,
  },
];
export const AppSlice = createSlice({
  name: "appslice",
  initialState,
  reducers: {
    changecolorbg: (state, actions) => {
      state[0].background = actions.payload;
    },
    changecolor: (state, actions) => {
      state[0].color = actions.payload;
    },
    changeicon: (state, actions) => {
      state[0].icon = actions.payload;
    },
    changepositon: (state, actions) => {
      switch (+actions.payload) {
        case 0:
          state[0].positioni = { bottom: "50px", right: "20px" };
          state[0].valuepositioni = 0;
          break;
        case 1:
          state[0].positioni = { bottom: "50px", left: "20px" };
          state[0].valuepositioni = 1;
          break;
        case 2:
          state[0].positioni = { top: "50px", right: "20px" };
          state[0].valuepositioni = 2;
          break;
        case 3:
          state[0].positioni = { top: "50px", left: "20px" };
          state[0].valuepositioni = 3;
          break;
      }
    },
    changerange: (state, actions) => {
      const name = actions.payload.name;
      const value = actions.payload.value;
      state[0][name] = value;
      if(["top","left","right","bottom"].includes(name))
      { 
        state[0].positioni[name] = value+"px"
      }
    },
    setstate:(state,actions)=>{
      state[0] = actions.payload[0]
    }
  },
});
export const {
  changecolorbg,
  changecolor,
  changeicon,
  changepositon,
  changerange,
  setstate
} = AppSlice.actions;
export default AppSlice.reducer;
