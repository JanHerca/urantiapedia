//Generic dialog

const strformat = require('./utils').strformat;

class Dialog {
    // 0 - ID of dialog
    // 1 - Title
    // 2 - Close label
    // 3 - Body content
    // 4 - Cancel button label
    // 5 - OK button label
    template = 
        `<div class="modal fade" id="{0}" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title">{1}</h6>
                        <button class="close" type="button" 
                            data-dismiss="modal" aria-label="{2}">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="needs-validation" novalidate="true">
                            {3}
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-sm btn-secondary" 
                            type="button" data-dismiss="modal">{4}</button>
                        <button class="btn btn-sm btn-dark" 
                            type="button">{5}</button>
                    </div>
                </div>
            </div>
        </div>`;
    html = '<div></div>';
    target = null;
    element = null;
    content = '<div>Content</div>';

    setTarget = (target) => {
        if (this.element) {
            $(this.element).remove();
        }
        this.target = target;
        const $html = $(this.html);
        $(target).append($html);
        this.element = $html.get(0);
    };

    /**
     * Updates the html content.
     * @param {?string} id ID of dialog
     * @param {?string} title Title
     * @param {?string} closeLabel Close label
     * @param {?string} cancelLabel Cancel button label
     * @param {?string} okLabel OK button label
     */
    update = (id, title, closeLabel, cancelLabel, okLabel) => {
        id = id || 'urantipedia-dialog';
        title = title || 'Dialog';
        closeLabel = closeLabel || 'Close';
        cancelLabel = cancelLabel || 'Cancel';
        okLabel = okLabel || 'OK';
        this.html = strformat(this.template, id, title, closeLabel,
            this.content, cancelLabel, okLabel);
        if (this.target) {
            this.setTarget(this.target);
        }
    };

    updateContent = () => {
    };

    showModal = () => {
        $(this.element).modal();
    };

    hideModal = () => {
        $(this.element).modal('hide');
    };
}

module.exports = Dialog;