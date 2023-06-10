/*
- localStorage permaneça no navegador até o usuario apagar
- localStorage so pode passar strings
- exemplo
  localStorage.setItem('usuario','123') = para enviar ao storage
  localStorage.getItem('usuario','123') = para receber do storage
  localStorage.removeItem('usuario','123') = para remover do storage
  localStorage.clear() = para zerar tudo storage

- sessionStorage apaga apartir do fechamento da página
*/

const BaseStorage = {
  get<T>(storage:Storage, key:string, defaultValue:T):T | string {
    const value = storage.getItem(key)
      if(value === null){
        return defaultValue;
      }
        try {
          //transformando um objeto que esta dentro de uma string, para de fato um objeto, e o parse() ele recebe esse tipo de '{''}'
          JSON.parse(value)
        } catch (error) {
          return value;
        }

    return value
  },
  set<T>(storage:Storage, key:string, value:T) {
    //vamos verificar se é um objeto dentro de string
    if(typeof value === 'string'){
      storage.setItem(key, value)
    } else {
      //JSON.stringify() é usado para transformar um objeto em string
      storage.setItem(key, JSON.stringify(value))
    }
  },
  clear(storage:Storage, key:string) {
    storage.removeItem(key);
  },
  clearAll(storage:Storage){
    storage.Clear();
  },
};

//funcções de acesso ao LocalStorage
export const LocalStorage = {
  get<T>(key: string, defaultValue: T): T | string {
    return BaseStorage.get(localStorage, key, defaultValue);
  },
  set<T>(key: string, value: T):void {
    BaseStorage.set(localStorage, key, value)
  },
  clear(key: string):void {
    BaseStorage.clear(localStorage, key)
  },
  clearAll():void {
    BaseStorage.clearAll(localStorage)
  },
};

export const SessionStorage = {
  get<T>(key: string, defaultValue: T): T | string {
    return BaseStorage.get(sessionStorage, key, defaultValue);
  },
  set<T>(key: string, value: T):void {
    BaseStorage.set(sessionStorage, key, value);
  },
  clear(key: string):void {
    BaseStorage.clear(sessionStorage, key);
  },
  clearAll():void {
    BaseStorage.clearAll(sessionStorage);
  },
};
  