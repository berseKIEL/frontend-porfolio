import { APIS } from './apis';

export async function loadPorfolio() {
  const res = await fetch(APIS.porfolio, {
    method: 'GET'
  });
  const data = await res;
  return data;
}
