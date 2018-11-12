const elementClickKey = '_vueDismissClick';
const elementKeyupKey = '_vueDismissKeyup';

function setup(el, binding) {

    const {callback, watch} = binding.value;

    if (watch && typeof document !== 'undefined') {

        if (!el[elementClickKey]) {

            const handler = function(event) {

                if (event.keyCode) {
                    event.keyCode === 27 && callback();
                } else if (!(event.target === el) && !el.contains(event.target)) {
                    callback();
                }

            };

            setTimeout(function() {
                document.addEventListener('click', handler);
                document.addEventListener('keyup', handler);
            }, 10);

            el[elementClickKey] = el[elementKeyupKey] = handler;

        }

    } else {

        unbind(el);

    }

}

function unbind(el) {

    if (el[elementClickKey] && typeof document !== 'undefined') {
        document.removeEventListener('click', el[elementClickKey]);
        document.removeEventListener('keyup', el[elementKeyupKey]);
        delete el[elementClickKey];
        delete el[elementKeyupKey];
    }

}

export default {
    directives: {
        onDismiss: {
            bind: setup,
            update: setup,
            unbind: unbind
        }
    }
};
