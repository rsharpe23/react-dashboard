class Model {
  constructor(route) {
    this.route = route;
  }

  createURL(arg) {
    return this.route.createURL(arg);
  }
}

export default Model;