

class Store {
  constructor(rootReducer) {
    this.rootReducer = rootReducer
    this.state = {}
  }

  getState() {
    return Object.assign(this.state)
  }

  combineReducers(reducers) {
    return (action) => {
      if (reducers[action.type]) {
      return reducers[action.type](null, action);
      } else {
        return this.state
      }
    }
  }


}

let state = {
  role: "Teacher",
  value: "cold",
  notice: "none"
}
let action1 = {
  type: "changeRole", 
  newRole: "minesweeper"
};

let action2 = {
  type: "drinkTea", 
  value: "hot"
};

let action3 = {
  type: "code",
  notice: "remember ;"
}


const roleReducer = (state = null, action) => {
  if ( action.type === "changeRole") {
    return action.newRole;
  } else {
    return state
  }
}

const valueReducer = (state = null, action) => {
  if (action.type === "drinkTea") { 
    return action.value
  } else {
    return state
  }
}

const noticeReducer = (state = null, action) => {
  if (action.type === "code") { 
    return action.notice
  } else {
    return state
  }
}

let reducers = {
  changeRole: roleReducer,
  drinkTea: valueReducer,
  code: noticeReducer 
}

function combineReducers(reducers) {
  return (action) => {
    if (reducers[action.type]) {
      return reducers[action.type](null, action);
      } else {
        return state
      }
  }
}