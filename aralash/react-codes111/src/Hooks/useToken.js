import React from 'react';
import { Context } from '../Context/Authentication';

const useToken = (setterOnly) => {
	const { state, setState } = React.useContext(Context);

	return setterOnly ? [setState] : [state, setState];
};

export default useToken;

// Usage
// const [token, setToken ] = useToken();
