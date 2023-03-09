import { mount } from '@vue/test-utils';
import ListCard from '@/views/animals/components/ListCard.vue';
import { describe, it, expect } from 'vitest';

const getWrapper = () => mount(ListCard);

describe('Component: View', () => {
	const wrapper = getWrapper();

	it('Renders the component', () => {
		expect(wrapper.find('[data-testid="list-card"]').exists()).toBeTruthy();
	});
});
