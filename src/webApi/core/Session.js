const Session = (() => {
  const key = 'my-session';

  const get = () => {
    const data = localStorage.getItem(key);
    return JSON.parse(data) || {};
  };

  const set = newData => {
    const data = JSON.stringify(newData);
    localStorage.setItem(key, data);
  };

  const remove = () => {
    localStorage.removeItem(key);
  };

  return { get, set, remove };
})();

export default Session;