export const ALL = 'ALL';
export const RECONCILLED = 'RECONCILLED';
export const UNRECONCILLED = 'UNRECONCILLED';
export const PENDING = 'PENDING';
export const DISPLAY = 'DISPLAY';
export const REMOVE = 'REMOVE';
export const SETTLED = 'SETTLED';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const NEXT = 'NEXT';
export const PREVIOUS = 'PREVIOUS';
export const GOTO = 'GOTO';
export const LOAD = 'LOAD';
export const STOPLOAD = 'STOPLOAD';
export const allData = () => {
	return {type: ALL}
}
export const recData = () => {
	return {type: RECONCILLED}
}
export const unrecData = () => {
	return {type: UNRECONCILLED}
}
export const pendData = () => {
	return {type: PENDING}
}
export const setData = () => {
	return {type: SETTLED}
}
export const displaySideBar = () => {
	return {type: DISPLAY}
}
export const removeSideBar = () => {
	return {type: REMOVE}
}
export const increase = () => {
	return {type: INCREASE}
}
export const decrease = () => {
	return {type: DECREASE}
}
export const next = () => {
	return {type: NEXT}
}
export const prev = () => {
	return {type: PREVIOUS}
}
export const goto = (num) => {
	return {type: GOTO, payload: num}
}
export const loading = (payload) => {
	return {type: LOAD, payload: payload}
}
export const stop = () => {
	return {type: STOPLOAD}
}
