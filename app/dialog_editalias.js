// Dialog for editing aliases

const Dialog = require('./dialog');
const strformat = require('./utils').strformat;
const replaceWords = require('./utils').replaceWords;

class DialogEditAliases extends Dialog {
	// 0 - Aliases label
	// 1 - Alias label
	// 2 - Add alias button label
	// 3- Remove alias button label
	// 4 - Update alias button label
	// 5 - Urantia Book label
	contentTemplate =
		`<div>
			<div class="form-group row mb-1">
				<label class="col-sm-12 col-form-label" id="lblTIEditAliasesDlg">{0}</label>
			</div>
			<div class="form-group row mb-1">
				<div class="col-sm-12">
					<div class="btn-sm alert px-2 py-1" id="lblTIAliasesErrs"></div>
				</div>
			</div>
			<div class="form-group row mb-1">
				<label class="col-sm-2 col-form-label-sm">{1}</label>
				<div class="col-sm-10">
					<input class="form-control form-control-sm" type="text" id="txtTIAlias"/>
					<div class="invalid-feedback">Alias cannot be empyt text or repeated</div>
				</div>
			</div>
			<div class="form-group row mb-1">
				<div class="col-sm-12 d-flex flex-row align-items-start flex-grow-1">
					<div class="input-group">
						<div class="input-group-prepend">
							<button type="button" class="btn btn-sm btn-secondary px-1" id="btnTIAddAlias">
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
								<span>{2}</span>
							</button>
						</div>
						<div class="input-group-append">
							<button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<span class="sr-only">Toggle Dropdown</span>
							</button>
							<div class="dropdown-menu" id="drpTIAliasSuggestions">
								<a class="dropdown-item btn-sm" href="#">Action</a>
								<a class="dropdown-item btn-sm" href="#">Another action</a>
								<a class="dropdown-item btn-sm" href="#">Something else here</a>
							</div>
						</div>
					</div>
					<div class="input-group">
						<button type="button" class="btn btn-sm btn-secondary px-1" id="btnTIRemoveAlias">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
							<span>{3}</span>
						</button>
					</div>
					<div class="input-group">
						<button type="button" class="btn btn-sm btn-secondary px-1" id="btnTIUpdateAlias">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M16.17,14.76l-1.1-1.1c0.71-1.33,0.53-3.01-0.59-4.13C13.79,8.84,12.9,8.5,12,8.5c-0.03,0-0.06,0.01-0.09,0.01 L13,9.6l-1.06,1.06L9.11,7.83L11.94,5L13,6.06l-0.96,0.96c1.27,0.01,2.53,0.48,3.5,1.44C17.24,10.17,17.45,12.82,16.17,14.76z M14.89,16.17L12.06,19L11,17.94l0.95-0.95c-1.26-0.01-2.52-0.5-3.48-1.46c-1.71-1.71-1.92-4.35-0.64-6.29l1.1,1.1 c-0.71,1.33-0.53,3.01,0.59,4.13c0.7,0.7,1.63,1.04,2.56,1.01L11,14.4l1.06-1.06L14.89,16.17z"/></svg>
							<span>{4}</span>
						</button>
					</div>
				</div>
			</div>
			<div class="form-group row mb-1">
				<div class="col-sm-12">
					<div id="lbxTIAliases" class="list-group" style="height:100px; overflow:auto;"></div>
				</div>
			</div>
			<div class="form-group row mb-1">
				<label class="col-sm-12 col-form-label">{5}</label>
			</div>
			<div class="form-group row mb-1">
				<div class="col-sm-12">
					<div id="lbxTIAliasesUB" class="list-group" style="height:250px; overflow:auto;"></div>
				</div>
			</div>
		</div>`;
	topicname = '';
	ubrefs = [];

	constructor() {
		super();
		this.options.aliasesLabel = 'Aliases';
		this.options.aliasLabel = 'Alias';
		this.options.addLabel = 'Add alias';
		this.options.removeLabel = 'Remove alias';
		this.options.updateLabel = 'Update alias';
		this.options.ubLabel = 'The Urantia Book';
	}

	updateContent = () => {
		this.content = strformat(this.contentTemplate, this.options.aliasesLabel,
			this.options.aliasLabel, this.options.addLabel, this.options.removeLabel, 
			this.options.updateLabel, this.options.ubLabel);
	};

	updateHandlers = () => {
		const self = this;
		$('#btnTIAddAlias').on('click', function() {
			const alias = $('#txtTIAlias').val().trim();
			if (alias === '' || self.data.altnames.indexOf(alias) != -1) {
				$('#txtTIAlias').toggleClass('is-invalid', true);
			} else {
				let i = $('#lbxTIAliases .list-group-item.active').index();
				if (i === -1) {
					self.data.altnames.push(alias);
				} else {
					self.data.altnames.splice(i, 0, alias);
				}
				self.updateAliasList();
				self.updateUBRefsList();
				$('#txtTIAlias').toggleClass('is-invalid', false);
			}
		});
		$('#btnTIRemoveAlias').on('click', function() {
			let i = $('#lbxTIAliases .list-group-item.active').index();
			if (i === -1) {
				return;
			}
			const newlen = self.data.altnames.length - 1;
			self.data.altnames.splice(i, 1);
			i = (i < newlen ? i : newlen - 1);
			self.updateAliasList();
			self.updateUBRefsList();
			if (i >= 0) {
				self.setAliasAsSelected(i);
			}
			$('#txtTIAlias').toggleClass('is-invalid', false);
		});
		$('#btnTIUpdateAlias').on('click', function() {
			const i = $('#lbxTIAliases .list-group-item.active').index();
			if (i === -1) {
				return;
			}
			const alias = $('#txtTIAlias').val().trim();
			if (self.data.altnames[i] === alias) {
				return;
			}
			if (alias === '' || self.data.altnames.indexOf(alias) != -1) {
				$('#txtTIAlias').toggleClass('is-invalid', true);
			} else {
				self.data.altnames.splice(i, 1, alias);
				self.updateAliasList();
				self.updateUBRefsList();
				self.setAliasAsSelected(i);
				$('#txtTIAlias').toggleClass('is-invalid', false);
			}
		});
	};

	/**
	 * Updates the changing content in the dialog.
	 * @param {Object} topic Object with topic data.
	 * @param {Book} book An instance of Urantia Book.
	 */
	updateLists = (topic, book) => {
		//Update top label
		$('#lblTIEditAliasesDlg').text(this.options.aliasesLabel + 
			` for: ${topic.name}`);
	
		//Update input
		$('#txtTIAlias').val('');

		//Update aliases
		this.data.altnames = topic.altnames.slice();
		this.updateAliasList();

		//Update book refs
		const refs = topic.refs.slice();
		topic.lines.forEach(line => extendArray(refs, line.refs.slice()));
		const arRefs = book.getArrayOfRefs(refs);
		this.ubrefs = arRefs.map(r => {
			const errs = [];
			const par = book.toParInHTML(r, errs);
			const ref = (r ? `[${r[0]}:${r[1]}.${r[2]}]` : null);
			return {ref: ref ? ref : r, par: par, errors: errs};
		});
		this.topicname = topic.name;
		this.updateUBRefsList();

		//Update suggestions
		this.updateSuggestions(topic, book);
	};

	updateAliasList = () => {
		const html = this.data.altnames.map(alias => {
			return `<div class="list-group-item btn-sm list-group-item-action p-1">
						${alias}
					</div>`;
		}).join('');
		//Unhandle
		$('#lbxTIAliases .list-group-item').off('click');
		//Fill
		$('#lbxTIAliases').html(html);
		//Handle
		const self = this;
		$('#lbxTIAliases .list-group-item').on('click', function() {
			const i = $('#lbxTIAliases .list-group-item.active').index();
			const ii = $('#lbxTIAliases .list-group-item').index(this);
			if (i === ii) {
				self.setAliasAsSelected(this, false);
			} else {
				self.setAliasAsSelected(this);
				$('#txtTIAlias').val(self.data.altnames[ii]);
				$('#txtTIAlias').toggleClass('is-invalid', false);
			}
		});
	};

	updateUBRefsList = () => {
		const names = [this.topicname.split('(')[0].trim(), ...this.data.altnames];
		const spans = names.map(name => `<span class="text-primary">${name}</span>`);
		let found = 0;
		const len = this.ubrefs.length;
		const html = this.ubrefs.map(ref => {
			if (!ref.ref || ref.errors.length > 0) {
				return `<div class="list-group-item btn-sm list-group-item-action 
						flex-column align-items-start p-0">
						<div class="alert alert-danger py-0 px-2 mb-0">
							<div>${ref.errors.join(' ')}</div>
							<div class="text-right">[${ref.ref || ''}]</div>
						</div>
					</div>`;
			}
			const par = replaceWords(names, spans, ref.par);
			if (par != ref.par) {
				found++;
			}
			return `<div class="list-group-item btn-sm list-group-item-action 
					py-0 px-2 flex-column align-items-start">
					<div>${par}</div>
					<div class="text-right">${ref.ref}</div>
				</div>`;
		}).join('');
		$('#lbxTIAliasesUB').html(html);
		const type = (found === len ? 'success' : 
			(found === 0 ? 'danger' : 'warning'));
		$('#lblTIAliasesErrs').html(`Topic names/aliases founded: ` +
			`<span class="badge badge-${type}">${found}/${this.ubrefs.length}</span>`);
		$('#lblTIAliasesErrs').toggleClass('alert-success alert-warning alert-danger',
			false);
		$('#lblTIAliasesErrs').toggleClass(`alert-${type}`, true);
	};

	updateSuggestions = (topic, book) => {
		const names = [topic.name, ...this.data.altnames];
		const name2 = topic.name.split('(')[0].trim();
		const lower = name2.toLowerCase();
		const title = name2[0].toUpperCase() + name2.substr(1).toLowerCase();
		const suggs = [];
		let s = null;
		if (topic.name.split('(').length > 0) {
			s = topic.name.split('(')[0].trim();
			if (names.indexOf(s) === -1) suggs.push(s);
		}
		if (lower != topic.name && names.indexOf(lower) === -1) {
			suggs.push(lower);
		}
		if (title != topic.name && names.indexOf(title) === -1) {
			suggs.push(title);
		}
		if (suggs.length === 0) {
			suggs.push('[No suggestions]');
		}
		//Unhandle
		$('#drpTIAliasSuggestions a').off('click');
		//Fill
		const html = suggs.map(ss => {
			return `<a class="dropdown-item btn-sm" href="#">${ss}</a>`;
		}).join('');
		$('#drpTIAliasSuggestions').html(html);
		//Handle
		const self = this;
		$('#drpTIAliasSuggestions a').on('click', function() {
			const alias = $(this).text();
			if (alias === '[No suggestions]') return;
			if (self.data.altnames.indexOf(alias) === -1) {
				let i = $('#lbxTIAliases .list-group-item.active').index();
				if (i === -1) {
					self.data.altnames.push(alias);
				} else {
					self.data.altnames.splice(i, 0, alias);
				}
				self.updateAliasList();
				self.updateUBRefsList();
				$('#txtTIAlias').toggleClass('is-invalid', false);
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
			$(`#lbxTIAliases .list-group-item:nth-child(${item + 1})`).get(0) :
			item);
		$('#lbxTIAliases .list-group-item').toggleClass('active', false);
		if (selected != false) {
			$(element).toggleClass('active', true);
		}
	};
}

module.exports = DialogEditAliases;