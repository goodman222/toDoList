import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      taskList: [],
      currentPopUpIndex: -1,
    };
  },

  mutations: {
    saveToLocalStorage(state) {
      const taskListString = JSON.stringify(state.taskList);
      localStorage.setItem("taskList", taskListString);
    },

    swap(state, payload) {
      const taskList = state.taskList;
      const index = payload.index;
      const direct = payload.direct;
      if (index === 0 && direct === 1) {
        return;
      } else if (index === taskList.length - 1 && direct === -1) {
        return;
      }

      let swapValue = taskList[index];
      taskList[index] = taskList[index - direct];
      taskList[index - direct] = swapValue;

      store.commit("saveToLocalStorage");
    },

    openPopUp(state, index) {
      state.currentPopUpIndex = index;
    },
  },
});

export default store;
