import {useDispatch as useDispatchActual} from 'react-redux';
import type {AppDispatch} from '../_examples/store';

const useDispatch = () => useDispatchActual<AppDispatch>();

export default useDispatch;
