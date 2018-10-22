import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM,} from '../constants/index';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {

  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      alert("ops increasing");
      console.log("ops increasing",action);

      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      alert("ops decrasing");
      console.log("ops decreasing",action);
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}
