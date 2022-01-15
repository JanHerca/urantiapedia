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
							<i class="bi-plus-circle px-1"></i>
							<span>{2}</span>
						</button>
					</div>
					<div class="input-group">
						<button type="button" class="btn btn-sm btn-secondary px-1" id="btnTIRemoveSeeAlso">
							<i class="bi-dash-circle px-1"></i>
							<span>{3}</span>
						</button>
					</div>
					<div class="input-group">
						<button type="button" class="btn btn-sm btn-secondary px-1" id="btnTIUpdateSeeAlso">
							<i class="bi-check-circle px-1"></i>
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