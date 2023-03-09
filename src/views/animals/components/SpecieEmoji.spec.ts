import { mount } from '@vue/test-utils';
import SpecieEmoji from './SpecieEmoji.vue';
import { describe, it, expect } from 'vitest';

const getWrapper = () =>
	mount(SpecieEmoji, {
		props: {
			specie: 'dog',
		},
	});

describe('Component: View', () => {
	const wrapper = getWrapper();

	it('displays the 🐶 emoji if the specie is dog', () => {
		expect(wrapper.text()).toContain('🐶');
	});
});
