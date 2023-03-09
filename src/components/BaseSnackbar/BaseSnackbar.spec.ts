import { mount } from '@vue/test-utils';
import BaseSnackbar from './BaseSnackbar.vue';
import { describe, it, expect } from 'vitest';

import { createTestingPinia } from '@pinia/testing';

const getWrapper = () =>
	mount(BaseSnackbar, {
		global: {
			plugins: [createTestingPinia()],
		},
	});

describe('Component: View', () => {
	const wrapper = getWrapper();

	it('Renders the component', () => {
		expect(wrapper.find('[data-testid="base-snackbar"]').exists()).toBeTruthy();
	});
});
