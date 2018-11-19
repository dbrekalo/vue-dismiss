import {assert} from 'chai';
import {mount} from '@vue/test-utils';
import Dropdown from './Dropdown.vue';
import Modal from './Modal.vue';

describe('Vue dismiss', () => {

    it('Executes on click outside component', done => {

        const wrapper = mount(Dropdown);

        wrapper.vm.open();

        assert.isTrue(wrapper.vm.opened);

        setTimeout(() => {

            document.querySelector('body').click();
            assert.isFalse(wrapper.vm.opened);
            done();

        }, 50);

    });

    it('Executes on escape press', done => {

        const wrapper = mount(Dropdown);

        wrapper.vm.open();

        assert.isTrue(wrapper.vm.opened);

        setTimeout(() => {

            var event = new Event('keyup');
            event.which = event.keyCode = 27;
            document.dispatchEvent(event);

            assert.isFalse(wrapper.vm.opened);
            done();

        }, 50);

    });

    it('Works without watcher', done => {

        const wrapper = mount(Modal);

        wrapper.vm.open();

        assert.isTrue(wrapper.vm.opened);

        setTimeout(() => {

            document.querySelector('body').click();
            assert.isFalse(wrapper.vm.opened);
            done();

        }, 50);

    });

});
