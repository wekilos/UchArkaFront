

export const logout = () => {
  
  localStorage.removeItem("userData");
};

export const isLogin = () => {
  if (localStorage.getItem("userData")) {
    var data = JSON.parse(localStorage.getItem("userData"));
    if (data.token) {
      return true;
    } else {
      // localStorage.removeItem("sebetProfile");
    }
  }
  return false;
};

export const isLoginAdmin = () => {
  if (localStorage.getItem("userData")) {
    var data = JSON.parse(localStorage.getItem("userData"));
    if (data.permission && data.token) {
      return true;
    } else {
      // localStorage.removeItem("sebetProfile");
    }
  } else {
    return false;
  }
};
