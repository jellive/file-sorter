import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Select from '../components/Select';
import { RootState } from '../reducers';
import { FileAction, setFolder } from '../actions/fileActions';

const mapStateToProps = (state: RootState) => ({
    value: state.counter.value
});

const mapDispatchToProps = (dispatch: Dispatch<FileAction>) => ({
    setFolder: () => dispatch(setFolder())
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);
