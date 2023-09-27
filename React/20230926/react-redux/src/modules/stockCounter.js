// stockCounter : 상품의 품절 여부 관리

export const sale = () => {
  return { type: "SALE" };
};

export const soldOut = () => {
  return { type: "SOLDOUT" };
};

const initState = {
  message: "판매중!",
};

const stockReducer = (state = initState, action) => {
  switch (action.type) {
    case "SALE":
      return {
        ...state,
        message: "판매중!",
      };
    case "SOLDOUT":
      return {
        ...state,
        message: "완판!",
      };
    default: {
      return state;
    }
  }
};

export default stockReducer;
