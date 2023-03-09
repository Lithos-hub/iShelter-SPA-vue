import { AxiosError } from 'axios';

interface validationError {
	location: string;
	msg: string;
	param: string;
	value: string;
}

export const useErrorHandle = (err: AxiosError | Record<string, any>) => {
	const {
		response: {
			data: { errors, error },
		},
	} = err;
	if (errors && errors.length) {
		return errors
			.map(({ msg, param }: validationError) => `${msg} on ${param} field. `)
			.join('');
	} else {
		return error;
	}
};
