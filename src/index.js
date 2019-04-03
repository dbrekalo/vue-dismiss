const elementClickKey = '_vueDismissClick';
const elementKeyupKey = '_vueDismissKeyup';

function setup(el, binding) {

    let callback, shouldBind;

    if (typeof binding.value === 'function') {
        callback = binding.value;
        shouldBind = true;
    } else {
        callback = binding.value.callback;
        shouldBind = binding.value.hasOwnProperty('watch')
            ? Boolean(binding.value.watch)
            : true
        ;
    }

    if (shouldBind) {

        if (typeof document !== 'undefined' && !el[elementClickKey]) {

            const handler = function(event) {

                if (event.keyCode) {
                    event.keyCode === 27 && callback();
                } else if (!(event.target === el) && !el.contains(event.target) && isMounted(event.target)) {
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

function isMounted(node) {
    if (node.nodeType === Node.DOCUMENT_NODE) return true;
    if (node.parentNode == undefined) return false;
    return isMounted(node.parentNode);
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
