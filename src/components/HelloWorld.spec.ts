import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';
import { describe, it, expect } from 'vitest';

const getWrapper = () => mount(HelloWorld);

describe('Component: View', () => {
	const wrapper = getWrapper();

	it('Renders the component', () => {
		expect(wrapper.find('[data-testid="hello-world"]').exists()).toBeTruthy();
	});
});
