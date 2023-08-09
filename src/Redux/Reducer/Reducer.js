export const reducer = (state = { count: false }, action) => {
  switch (action.type) {
    case "StateTrue":
      return { count: (state.count = true) };
    case "StateFalse":
      return { count: (state.count = false) };
    case "INIT":
      return { count: false };
    default:
      return state;
  }
};
export const reducer2 = (state = { webg: "1" }, action) => {
  switch (action.type) {
    case "appear":
      return { webg: "1" };
    default:
      return state;
  }
};
