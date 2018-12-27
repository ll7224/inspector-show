import ajax from "./ajax";
import { baseUrl } from "./baseUrl";
// eslint-disable-next-line
export const getDatapush= () => ajax.get(baseUrl+`/getdatapushforg`);
