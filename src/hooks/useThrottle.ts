import { useEffect, useRef, useState } from 'react';

export function useThrottle<T>(value: T, delay?: number): T {
	const [throttledValue, setThrottledValue] = useState<T>(value);
	const ref = useRef({ value, inProgress: false });
	useEffect(() => {
		ref.current.value = value;

		if (ref.current.inProgress) return;

		ref.current.inProgress = true;

		setTimeout(() => {
			setThrottledValue(ref.current.value);
			ref.current.inProgress = false;
		}, delay);
	}, [value, delay]);

	return throttledValue;
}
