import { mount } from '@vue/test-utils';
import HomeCard from './HomeCard.vue';
import { describe, it, expect } from 'vitest';

const getWrapper = () => mount(HomeCard);

describe('Component: HomeCard', () => {
	const wrapper = getWrapper();

	it('renders correctly', () => {
		expect(wrapper.find('[data-testid="home-card"]').exists()).toBeTruthy();
	});
});
