export const getCookie = (name) => {
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookieValue ? cookieValue.pop() : "";
};

export const saveToCookie = (key, value, expirationDays) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expirationDays);
  const cookieValue =
    encodeURIComponent(value) + "; expires=" + expirationDate.toUTCString();

  document.cookie = key + "=" + cookieValue;
};

export const removeCookie = (key) => {
  const expirationDate = new Date(0);
  let cookieValue =
    key + "=; expires=" + expirationDate.toUTCString() + "; path=/";
  if (window.location.protocol === "https:") {
    cookieValue += "; Secure";
  }
  document.cookie = cookieValue;
};

