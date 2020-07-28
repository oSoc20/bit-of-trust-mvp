const store = window.localStorage;

const checkSignedUp = () => {

  // todo: simple oneliner
  if(store.getItem("signup") && store.getItem("signup").length > 0){
    return true;
  }
  else{
    return false;
  }
}

const setOwnAlias = (alias) => {

  store.setItem("user", alias);

}

const clearOwnAlias = () => {
  store.setItem("user", "");
}

const getOwnAlias = () => {

  const alias = store.getItem("user");

  if(alias && alias.length > 0)
    return alias;
  else {
    console.error("User data not found");
  }
}