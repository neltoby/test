import {seed} from './Seed'
import {allData} from './GraphData'
import produce from 'immer';
import {
	ALL, RECONCILLED, UNRECONCILLED, PENDING, SETTLED,DISPLAY,
	REMOVE,INCREASE, DECREASE,GOTO, PREVIOUS, NEXT, LOAD, STOPLOAD,
} from './actions'
import isJson  from './isJson'

const initialState = {
	all: seed,
	allData: allData,
	defaultNum: 0,
	currentData: isJson(allData[0]),
	total: Math.ceil(seed.length /10),
	current: 'ALL',
	count: 1,
	category: seed.slice(0,10),
	catCount: seed.length,
	side: false,
	loading: false,
	component: '',
}
export default function reducer ( state = initialState, action) {
	switch (action.type){
		case ALL:{
			return produce(state, draft => {
				if(state.all.length > 10){
				    draft.category = state.all.slice(0,10);
				    draft.current = action.type;
				    draft.catCount = state.all.length;
				    draft.total = Math.ceil(state.all.length / 10);
					draft.count = 1;
				}else{
					draft.category = state.all
					draft.current = action.type;
					draft.catCount = state.all.length;
					draft.total = Math.ceil(state.all.length / 10);
					draft.count = 1;
				}
			})
		}
		case RECONCILLED:{
			return produce(state, draft => {
				let recon = state.all.filter((item) => {
					if(item.status === 'Reconcilled'){
						return item
					}
				});
				draft.catCount = recon.length;
			    draft.category = recon.length > 10 ? recon.slice(0,10) : recon ;
			    draft.total = Math.ceil(draft.category.length/10);
			    draft.current = action.type;
				draft.total = Math.ceil(recon.length / 10);
				draft.count = 1;
			})
		}
		case UNRECONCILLED:{
			return produce(state, draft => {
				let unrec = state.all.filter((item) => {
					if(item.status === 'Un-reconcilled'){
						return item
					}
				});
			    draft.category = unrec.length > 10 ? unrec.slice(0,10) : unrec ;
			    draft.current = action.type;
				draft.catCount = unrec.length;
				draft.total = Math.ceil(unrec.length / 10);
				draft.count = 1;
			})
			
		}
		case PENDING:{
			return produce(state, draft => {
				let pend = state.all.filter((item) => {
					if(item.status === 'Pending'){
						return item
					}
				});
			    draft.category = pend.length > 10 ? pend.slice(0,10) : pend ;
				draft.current = action.type;
				draft.catCount = pend.length;
				draft.total = Math.ceil(pend.length / 10);
				draft.count = 1;
			})
			
		}
		case SETTLED:{
			return produce(state, draft => {
				let set = state.all.filter((item) => {
					if(item.status === 'Settled'){
						return item
					}
				});
			    draft.category = set.length > 10 ? set.slice(0,10) : set ;
			    draft.current = action.type;
				draft.catCount = set.length;
				draft.total = Math.ceil(set.length / 10);
				draft.count = 1;
			})

		}
		case DISPLAY:{
			return produce(state, draft => {
				draft.side = true
			})
		}
		case REMOVE:{
			return produce(state, draft => {
				draft.side = false
			})
		}
		case DECREASE:{
			return produce(state, draft => {
				// let len = state.allData.length;
				let newNum = state.defaultNum - 1;
				let finNum = newNum < 0 ? 3 : newNum ;
				draft.defaultNum = finNum;
				draft.currentData = isJson(allData[finNum])
			})
		}
		case INCREASE:{
			return produce(state, draft => {
				// let len = state.allData.length;
				let newNum = state.defaultNum + 1;
				let finNum = newNum > 3 ? 0 : newNum ;
				draft.defaultNum = finNum;
				draft.currentData = isJson(allData[finNum])
			})
		}
		case NEXT:{
			return produce(state, draft => {
				let status = state.current === RECONCILLED ? 'Reconcilled' : state.current === UNRECONCILLED ? 'Un-reconcilled' :
					state.current === PENDING ? 'Pending' : state.current === SETTLED ? 'Settled' : 'All'
				let allCat = state.current === ALL ? state.all : state.all.filter((item) => {
					if(item.status === status){
						return item
					}
				});
				let newNum = state.count + 1;
				let finNum = newNum > state.total ? state.total : newNum ;
				let start = (finNum - 1) * 10;
				let end = start + 10 ;
				draft.count = finNum;
				draft.category = allCat.slice(start,end);
			})
		}
		case PREVIOUS:{
			return produce(state, draft => {
				let status = state.current === RECONCILLED ? 'Reconcilled' : state.current == UNRECONCILLED ? 'Un-reconcilled' :
					state.current === PENDING ? 'Pending' : state.current === SETTLED ? 'Settled' : 'All'
				let allCat = state.current === ALL ? state.all : state.all.filter((item) => {
					if(item.status === status){
						return item
					}
				});
				let newNum = state.count - 1;
				let finNum = newNum < 0 ? 1 : newNum ;
				let start = (finNum - 1) * 10;
				let end = start + 10 ;
				draft.count = finNum;
				draft.category = allCat.slice(start,end);
			})
		}
		case GOTO:{
			return produce(state, draft => {
				let status = state.current === RECONCILLED ? 'Reconcilled' : state.current === UNRECONCILLED ? 'Un-reconcilled' :
					state.current === PENDING ? 'Pending' : state.current === SETTLED ? 'Settled' : 'All'
				let allCat = state.current === ALL ? state.all : state.all.filter((item) => {
					if(item.status === status){
						return item
					}
				});
				let newNum = action.payload;
				let finNum = newNum < 0 ? 1 : newNum ;
				let start = (finNum - 1) * 10;
				let end = start + 10 ;
				draft.count = finNum;
				draft.category = allCat.slice(start,end);
			})
		}
		case LOAD:{
			return produce(state, draft => {			
				draft.loading = true;
				draft.component = action.payload
			})
		}
		case STOPLOAD:{
			return produce(state, draft => {			
				draft.loading = false;
				draft.component = '';
			})
		}
			default: 
				{return state;}
	}
}