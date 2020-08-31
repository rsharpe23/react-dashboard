class Route {
  constructor(name) {
    this.name = name;
    this.origin = `${Route.PROTOCOL}//${Route.HOST}`;
  }

  createURL(arg) {
    // Маршрут не должен быть со слешем на конце. 
    // Это приведет к некорректному ответу сервера.
    // Так например POST-запрос http://site/users/ 
    // вернет ответ как для GET-запроса
    const name = arg ? `${this.name}/${arg}` : this.name;
    return new URL(name, this.origin);
  }
}

Route.PROTOCOL = 'http:';
Route.HOST = 'laravel-example.loc';

export default Route;