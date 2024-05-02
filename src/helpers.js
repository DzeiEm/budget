const userNameValue = 'Gabrielius' // pasikeist i savo varda
localStorage.setItem('userName', userNameValue)

export const fetchData = (key) => {
    return localStorage.getItem(key)
  }