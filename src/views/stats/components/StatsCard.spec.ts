import { mount } from '@vue/test-utils';
import StatsCard from './StatsCard.vue';
import { describe, it, expect } from 'vitest';

const getWrapper = () => mount(StatsCard);

describe('Component: StatsCard', () => {
	const wrapper = getWrapper();

	it('renders correctly', () => {
		expect(wrapper.find('[data-testid="stats-card"]').exists()).toBeTruthy();
	});
});
