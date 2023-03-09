import { mount } from '@vue/test-utils';
import StatusChip from './StatusChip.vue';
import { describe, it, expect } from 'vitest';

const getWrapper = () => mount(StatusChip);

describe('Component: View', () => {
	const wrapper = getWrapper();

	it('Renders the component', () => {
		expect(wrapper.find('[data-testid="status-chip"]').exists()).toBeTruthy();
	});
});
