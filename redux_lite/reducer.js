
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
  if ( action.type === "change role") {
    return action.newRole;
  } else {
    return state
  }
}

const valueReducer = (state = null, action) => {
  if (action.type === "drink tea") { 
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