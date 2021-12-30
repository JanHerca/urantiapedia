// Dialog for editing see alsos

const Dialog = require('./dialog');

class DialogEditSeeAlsos extends Dialog {
	// 0 - See Alsos label
	// 1 - See Also label
	// 2 - Add see also button label
	// 3 - Remove see also button label
	// 4 - Update see also button label
	contentTemplate =
		`<div>
			<div class="form-group row mb-1">
				<label class="col-sm-12 col-form-label" id="lblTIEditSeeAlsosDlg">{0}</label>
			</div>
			<div class="form-group row mb-1">
				<div class="col-sm-12">
					<div class="btn-sm alert px-2 py-1" id="lblTISeeAlsosErrs"></div>
				</div>
			</div>
			<div class="form-group row mb-1">
				<label class="col-sm-2 col-form-label-sm">{1}</label>
				<div class="col-sm-10">
					<input class="form-control form-control-sm" type="text" id="txtTISeeAlso"/>
					<div class="invalid-feedback">See also</div>
				</div>
			</div>
			<div class="form-group row mb-1">
				<div class="col-sm-12 d-flex flex-row align-items-start flex-grow-1">
					<div class="input-group">
						<button type="button" class="btn btn-sm btn-secondary px-1" id="btnTIAddSeeAlso">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
							<span>{2}</span>
						</button>
					</div>
					<div class="input-group">
						<button type="button" class="btn btn-sm btn-secondary px-1" id="btnTIRemoveSeeAlso">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
							<span>{3}</span>
						</button>
					</div>
					<div class="input-group">
						<button type="button" class="btn btn-sm btn-secondary px-1" id="btnTIUpdateSeeAlso">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M16.17,14.76l-1.1-1.1c0.71-1.33,0.53-3.01-0.59-4.13C13.79,8.84,12.9,8.5,12,8.5c-0.03,0-0.06,0.01-0.09,0.01 L13,9.6l-1.06,1.06L9.11,7.83L11.94,5L13,6.06l-0.96,0.96c1.27,0.01,2.53,0.48,3.5,1.44C17.24,10.17,17.45,12.82,16.17,14.76z M14.89,16.17L12.06,19L11,17.94l0.95-0.95c-1.26-0.01-2.52-0.5-3.48-1.46c-1.71-1.71-1.92-4.35-0.64-6.29l1.1,1.1 c-0.71,1.33-0.53,3.01,0.59,4.13c0.7,0.7,1.63,1.04,2.56,1.01L11,14.4l1.06-1.06L14.89,16.17z"/></svg>
							<span>{4}</span>
						</button>
					</div>
				</div>
			</div>
			<div class="form-group row mb-1">
				<div class="col-sm-12">
					<div id="lbxTISeeAlsos" class="list-group" style="height:100px; overflow:auto;"></div>
				</div>
			</div>
		</div>`;

		
	constructor() {
		super();
		this.options.seeAlsosLabel = 'See Alsos';
		this.options.seeAlsoLabel = 'See Also';
		this.options.addLabel = 'Add see also';
		this.options.removeLabel = 'Remove see also';
		this.options.updateLabel = 'Update see also';
	}

	updateContent = () => {
		this.content = strformat(this.contentTemplate, this.options.seeAlsosLabel,
			this.options.seeAlsoLabel, this.options.addLabel, this.options.removeLabel, 
			this.options.updateLabel);
	};

	updateHandlers = () => {

	}

	/**
	 * Updates the changing content in the dialog.
	 * @param {Object} topic Object with topic data or line data.
	 * @param {Book} book An instance of Urantia Book.
	 */
	updateLists = (topicOrLine, book) => {
		//Update top label
		const text = (topicOrLine.name ? ` for: ${topicOrLine.name}`: '');
		$('#lblTIEditSeeAlsosDlg').text(this.options.seeAlsosLabel + text);

		//Update input
		$('#txtTISeeAlso').val('');

		//Update aliases
		this.data.seeAlso = topicOrLine.seeAlso.slice();
		this.updateSeeAlsoList();
	};

	updateSeeAlsoList = () => {
		const html = this.data.seeAlso.map(sa => {
			return `<div class="list-group-item btn-sm list-group-item-action p-1">
						${sa}
					</div>`;
		}).join('');
		//Unhandle
		$('#lbxTISeeAlsos .list-group-item').off('click');
		//Fill
		$('#lbxTISeeAlsos').html(html);
		//Handle
		const self = this;
		$('#lbxTISeeAlsos .list-group-item').on('click', function() {
			const i = $('#lbxTISeeAlsos .list-group-item.active').index();
			const ii = $('#lbxTISeeAlsos .list-group-item').index(this);
			if (i === ii) {
				self.setSeeAlsoAsSelected(this, false);
			} else {
				self.setSeeAlsoAsSelected(this);
				$('#txtTISeeAlso').val(self.data.altnames[ii]);
				$('#txtTISeeAlso').toggleClass('is-invalid', false);
			}
		});
	};

	/**
	 * Sets an alias as selected
	 * @param {(HTMLElement|number)} item Element or index.
	 * @param {boolean=} selected By default is true.
	 */
	setAliasAsSelected = (item, selected) => {
		const element = (typeof item === 'number' ? 
			$(`#lbxTISeeAlsos .list-group-item:nth-child(${item + 1})`).get(0) :
			item);
		$('#lbxTISeeAlsos .list-group-item').toggleClass('active', false);
		if (selected != false) {
			$(element).toggleClass('active', true);
		}
	};
}

module.exports = DialogEditSeeAlsos;