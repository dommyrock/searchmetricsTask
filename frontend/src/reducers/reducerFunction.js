//Actions
export const ADD_CATEGORY = "ADD_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";
export const ADD_KEYWORD = "ADD_KEYWORD";
export const REMOVE_KEYWORD = "REMOVE_KEYWORD";

const testObj = {
  name: "category_3",
  keywords: ["xml", "xss", "xla"],
};

//category
export function categoryReducer(state, action) {
  switch (action.type) {
    case ADD_CATEGORY: {
      const { category, keywords } = action.payload;
      const data = keywords.data.map((i) => i.word);
      debugger;
      return [...state, { name: category, keywords: data, id: state.length }];
    }

    case REMOVE_CATEGORY:
      return state.filter((item) => item.id !== action.payload);

    case ADD_KEYWORD:
      //TODO: extract thsi into common function and extract common variables out
      debugger;
      let newObject = state.find((item) => item.id === action.id);
      const objIndex = state.indexOf(newObject);
      if (!state[objIndex].keywords.includes(action.payload)) {
        debugger;
        newObject.keywords.push(action.payload);
        Object.assign(state[objIndex], newObject);
        return [...state];
      }
      return state;

    case REMOVE_KEYWORD:
      debugger;
      let updatedObj = state.find((item) => item.id === action.id);
      const index = state.indexOf(updatedObj);
      const updated = updatedObj.keywords.filter((kw) => kw !== action.payload);
      updatedObj.keywords = updated;
      Object.assign(state[index], updatedObj);
      return [...state];

    default: {
      return state;
    }
  }
}
