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
	options = {};
	data = {};

	constructor() {
		this.options.id = 'urantipedia-dialog';
		this.options.title = 'Dialog';
		this.options.closeLabel = 'Close';
		this.options.cancelLabel = 'Cancel';
		this.options.okLabel = 'OK';
	}

	/**
	 * Removes dialogs from previous target if any and appends it in DOM.
	 * @param {HTMLElement} target Target.
	 */
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
	 * Updates the html with initial content. This function should be called
	 * only once on load. Use other update functions to update parts of the
	 * dialog previous open it.
	 * @param {HTMLElement} target Target.
	 * @param {?Object} options Options.
	 * @param {?string} options.id ID of dialog
	 * @param {?string} options.title Title
	 * @param {?string} options.closeLabel Close label
	 * @param {?string} options.cancelLabel Cancel button label
	 * @param {?string} options.okLabel OK button label
	 * @param {?Function} options.okHandler OK button handler
	 */
	update = (target, options) => {
		options = options || {};
		for (const key in options) {
			if (options[key] != null) {
				this.options[key] = options[key];
			}
		}
		this.updateContent();
		this.html = strformat(this.template, this.options.id, this.options.title, 
			this.options.closeLabel, this.content, this.options.cancelLabel, 
			this.options.okLabel);
		this.setTarget(target);
		this.updateHandlers();
		const self = this;
		$(this.element).find('.modal-footer button:nth-child(2)').on('click', function() {
			if (self.options.okHandler) {
				self.options.okHandler(self.data);
				self.hideModal();
			}
		});
	};

	/**
	 * Function to implement in derived classes to update the constant body content 
	 * of the dialog. This function is called by update function. Use other update
	 * functions to update parts of the dialog previous open it.
	 */
	updateContent = () => {
	};

	/**
	 * Function to implement in derived classes to update any constant handler.
	 * This function is called by update function.
	 */
	updateHandlers = () => {
	};

	showModal = () => {
		$(this.element).modal();
	};

	hideModal = () => {
		$(this.element).modal('hide');
	};
}

module.exports = Dialog;