import { useState, useCallback, useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Auth from './webApi/Auth';

import {
  AttachmentModel,
  LinkTargetModel,
  ProfileModel,
  WorkModel,
  WorkTypeModel,
} from './webApi/models';

export function useAuth() {
  return Auth;
}

export function useAttachmentApi() {
  return useApi(AttachmentModel);
}

export function useLinkTargetApi() {
  return useMemo(() => ({
    getAll: () => LinkTargetModel.getAll(),
  }), []);
}

export function useProfileApi() {
  return useMemo(() => ({
    get: () => ProfileModel.get(null),
    update: newData => ProfileModel.update(null, newData),
  }), []);
}

export function useWorkApi() {
  return useApi(WorkModel);
}

export function useWorkTypeApi() {
  return useApi(WorkTypeModel);
}

// BUG: Просто передавать ссылку на метод не получится.
// Метод потеряет контекст -> { const { getAll } = model; return { getAll } }
// export function useApi({ getAll, get, create, update, ...rest }) {
//   return useMemo(() => ({
//     getAll: () => getAll(),
//     get: id => get(id),
//     create: data => create(data),
//     update: (id, newData) => update(id, newData),
//     delete: id => rest.delete(id),
//     // ====================
//   }), [getAll, get, create, update, rest]);
// }

export function useApi(model) {
  return useMemo(() => ({
    getAll: () => model.getAll(),
    get: id => model.get(id),
    create: data => model.create(data),
    update: (id, newData) => model.update(id, newData),
    delete: id => model.delete(id),
  }), [model]);
}

export function useRequest() {
  const [canRequest, setCanRequest] = useState(true);

  const request = useMemo(() => ({
    bind(rawRequest) {
      return {
        then(onResult, onError) {
          setCanRequest(false);
          // XXX: Метод finally не должен вызываться в самом начала, 
          // т.к. rawRequest может быть объектом ThenableRequest, 
          // который имеет только один метод then. Также finally не должен 
          // вызываться в конце, т.к. это приведет к утечкам памяти 
          // при редиректах и в ситуациях когда компонент, уничтожается прежде 
          // чем выполнится finally. (Например DashboardMediaModal)
          return rawRequest
            .then(result => result, onError)
            .finally(() => setCanRequest(true))
            .then(onResult);
        },
      };
    },
  }), []);

  return [request, canRequest];
}

// Слэш в начале пути означает что путь будет абсолютным.
export function useRedirect(initialPath = '') {
  const history = useHistory();

  const invoke = useCallback(opts => {
    let path = initialPath;

    const _opts = typeof opts === 'object'
      ? opts : { relativePath: opts };

    const { relativePath, state, method = 'push' } = _opts;
    relativePath && (path += relativePath);

    history[method](path, state);
    // ==========
  }, [history, initialPath]);

  return invoke;
}

export function useDepState(initialState) {
  const [state, setState] = useState(initialState);
  useEffect(() => setState(initialState), [initialState]);
  return [state, setState];
}