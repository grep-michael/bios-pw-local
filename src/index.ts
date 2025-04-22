import { keygen, KeygenResult, solvers } from "./keygen";

export function get_keys(model: string) {
    //const urlParams = new URLSearchParams(window.location.search);
    //const myParam = urlParams.get('model');
    return keygen(model)
}
