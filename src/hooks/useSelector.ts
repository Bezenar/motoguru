import { TypedUseSelectorHook, useSelector as useSelectorActual } from 'react-redux';
import type {RootState} from '../_examples/store';

const useSelector: TypedUseSelectorHook<RootState> = useSelectorActual;

export default useSelector;
