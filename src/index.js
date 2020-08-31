import React, { StrictMode } from 'react';
import { render } from 'react-dom';

// TODO: Сделать fakeServer который будет перехватывать адреса запросов 
// и выводить локальные json-данные

// TODO: Деделать функционал для ситуаций, когда возникает ошибка 
// "Can't perform a React state update on an unmounted component ..."
// Если компонент, при загрузке сетевых данных, был размонтирован. 
// Но запрос, по окончанию, пытается сохранить эти данные - появится такая ошибка.
// Исправить ее можно через доп. переменную, от состояния которой 
// будет зависеть возможность сохранения данных.
// Необходимое состояние можно задавать при размонтировании компонента.

// TODO: Добавить progressbar в виде тонкой линии вверху экрана

// NOTE: Не забывать размещать предохранители в компонентах, 
// которые используют сетевые данные или находятся в разработке.

// Импортируем bootstrap.css т.к. webpack автоматом добавляет 
// ко всем scss-файлам строку @import "~public/scss/global";
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

import App from '@/App';

// StrictMode заставляет компоненты с useState, useMemo, useReducer 
// рендериться 2 раза (cм. https://ru.reactjs.org/docs/strict-mode.html)
render(<App />, document.getElementById('root'));