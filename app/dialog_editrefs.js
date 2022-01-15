// Dialog for editing references

const Dialog = require('./dialog');

class DialogEditRefs extends Dialog {
	// 0 - Refs label
	// 1 - Ref label
	// 2 - Add ref button label
	// 3- Remove ref button label
	// 4 - Update ref button label
	// 5 - Urantia Book label
	contentTemplate =
		`<div>
			<div class="form-group row mb-1">
				<label class="col-sm-12 col-form-label" id="lblTIEditRefsDlg">{0}</label>
			</div>
			<div class="form-group row mb-1">
				<div class="col-sm-12">
					<div class="btn-sm alert px-2 py-1" id="lblTIRefsErrs"></div>
				</div>
			</div>
			<div class="form-group row mb-1">
				<label class="col-sm-2 col-form-label-sm">{1}</label>
				<div class="col-sm-10">
					<input class="form-control form-control-sm" type="text" id="txtTIRef"/>
					<div class="invalid-feedback">Reference cannot be empyt text or be repeated and must point to a set of existing parragraphs</div>
				</div>
			</div>
			<div class="form-group row mb-1">
				<div class="col-sm-12 d-flex flex-row align-items-start flex-grow-1">
					<div class="input-group">
						<button type="button" class="btn btn-sm btn-secondary px-1" id="btnTIAddRef">
							<i class="bi-plus-circle px-1"></i>
							<span>{2}</span>
						</button>
					</div>
					<div class="input-group">
						<button type="button" class="btn btn-sm btn-secondary px-1" id="btnTIRemoveRef">
							<i class="bi-dash-circle px-1"></i>
							<span>{3}</span>
						</button>
					</div>
					<div class="input-group">
						<button type="button" class="btn btn-sm btn-secondary px-1" id="btnTIUpdateRef">
							<i class="bi-check-circle px-1"></i>
							<span>{4}</span>
						</button>
					</div>
				</div>
			</div>
			<div class="form-group row mb-1">
				<div class="col-sm-12">
					<div id="lbxTIRefs" class="list-group" style="height:100px; overflow:auto;"></div>
				</div>
			</div>
			<div class="form-group row mb-1">
				<label class="col-sm-12 col-form-label">{5}</label>
			</div>
			<div class="form-group row mb-1">
				<div class="col-sm-12">
					<div id="lbxTIRefsUB" class="list-group" style="height:250px; overflow:auto;"></div>
				</div>
			</div>
		</div>`;
	book = null;

	constructor() {
		super();
		this.options.refsLabel = 'References';
		this.options.refLabel = 'Reference';
		this.options.addLabel = 'Add ref';
		this.options.removeLabel = 'Remove ref';
		this.options.updateLabel = 'Update ref';
		this.options.ubLabel = 'The Urantia Book';
	}

	updateContent = () => {
		this.content = strformat(this.contentTemplate, this.options.refsLabel,
			this.options.refLabel, this.options.addLabel, this.options.removeLabel, 
			this.options.updateLabel, this.options.ubLabel);
	};

	updateHandlers = () => {
		const self = this;
		$('#btnTIAddRef').on('click', function() {
			if (!self.book) return;
			const ref = $('#txtTIRef').val().trim();
			const arRefs = self.book.getArrayOfRefs([ref]);
			if (ref === '' || self.data.refs.indexOf(ref) != -1 ||
				arRefs.length === 0 || arRefs[0] == null) {
				$('#txtTIRef').toggleClass('is-invalid', true);
			} else {
				let i = $('#lbxTIRefs .list-group-item.active').index();
				if (i === -1) {
					self.data.refs.push(ref);
				} else {
					self.data.refs.splice(i, 0, ref);
				}
				self.updateRefsList();
				self.updateUBRefsList();
				$('#txtTIRef').toggleClass('is-invalid', false);
			}
		});
		$('#btnTIRemoveRef').on('click', function() {
			let i = $('#lbxTIRefs .list-group-item.active').index();
			if (i === -1) {
				return;
			}
			const newlen = self.data.refs.length - 1;
			self.data.refs.splice(i, 1);
			i = (i < newlen ? i : newlen - 1);
			self.updateRefsList();
			self.updateUBRefsList();
			if (i >= 0) {
				self.setRefAsSelected(i);
			}
			$('#txtTIRef').toggleClass('is-invalid', false);
		});
		$('#btnTIUpdateRef').on('click', function() {
			if (!self.book) return;
			const i = $('#lbxTIRefs .list-group-item.active').index();
			if (i === -1) {
				return;
			}
			const ref = $('#txtTIRef').val().trim();
			const arRefs = self.book.getArrayOfRefs([ref]);
			if (self.data.refs[i] === ref) {
				return;
			}
			if (ref === '' || self.data.refs.indexOf(ref) != -1 ||
				arRefs.length === 0 || arRefs[0] == null) {
				$('#txtTIRef').toggleClass('is-invalid', true);
			} else {
				self.data.refs.splice(i, 1, ref);
				self.updateRefsList();
				self.updateUBRefsList();
				self.setRefAsSelected(i);
				$('#txtTIRef').toggleClass('is-invalid', false);
			}
		});
	};

	/**
	 * Updates the changing content in the dialog.
	 * @param {Object} topicOrLine Object with topic data or line data.
	 * @param {Book} book An instance of Urantia Book.
	 */
	updateLists = (topicOrLine, book) => {
		this.book = book;
		//Update top label
		const text = (topicOrLine.name ? ` for: ${topicOrLine.name}`: '');
		$('#lblTIEditRefsDlg').text(this.options.refsLabel + text);
	
		//Update input
		$('#txtTIRef').val('');

		//Update refs
		this.data.refs = (topicOrLine.refs ? topicOrLine.refs.slice() : []);
		this.updateRefsList();

		//Update book refs
		this.updateUBRefsList();
	};

	updateRefsList = () => {
		const html = this.data.refs.map(ref => {
			return `<div class="list-group-item btn-sm list-group-item-action p-1">
						${ref}
					</div>`;
		}).join('');
		//Unhandle
		$('#lbxTIRefs .list-group-item').off('click');
		//Fill
		$('#lbxTIRefs').html(html);
		//Handle
		const self = this;
		$('#lbxTIRefs .list-group-item').on('click', function() {
			const i = $('#lbxTIRefs .list-group-item.active').index();
			const ii = $('#lbxTIRefs .list-group-item').index(this);
			if (i === ii) {
				self.setRefAsSelected(this, false);
			} else {
				self.setRefAsSelected(this);
				$('#txtTIRef').val(self.data.refs[ii]);
				$('#txtTIRef').toggleClass('is-invalid', false);
			}
		});
	};

	updateUBRefsList = () => {
		if (!this.book) return;
		const len = this.data.refs.length;
		const badRefs = [];
		const ubrefs = [];
		this.data.refs.forEach(ref => {
			const arRefs = this.book.getArrayOfRefs([ref]);
			if (arRefs.length === 0 || arRefs[0] == null) {
				badRefs.push(ref);
				ubrefs.push({ref: ref, par: '', errors: ['Invalid ref']});
			} else {
				arRefs.forEach(r => {
					const errs = [];
					const par = this.book.toParInHTML(r, errs);
					const rr = (r ? `[${r[0]}:${r[1]}.${r[2]}]` : null);
					ubrefs.push({ref: rr ? rr : r, par: par, errors: errs});
				});
			}
		});
		const html = ubrefs.map(ref => {
			if (!ref.ref || ref.errors.length > 0) {
				return `<div class="list-group-item btn-sm list-group-item-action 
						flex-column align-items-start p-0">
						<div class="alert alert-danger py-0 px-2 mb-0">
							<div>${ref.errors.join(' ')}</div>
							<div class="text-right">[${ref.ref || ''}]</div>
						</div>
					</div>`;
			}
			return `<div class="list-group-item btn-sm list-group-item-action 
					py-0 px-2 flex-column align-items-start">
					<div>${ref.par}</div>
					<div class="text-right">${ref.ref}</div>
				</div>`;
		}).join('');
		$('#lbxTIRefsUB').html(html);
		const type = (badRefs.length === 0 ? 'success' : 'danger');
		$('#lblTIRefsErrs').html(`Valid references: ` +
			`<span class="badge badge-${type}">${len - badRefs.length}/${len}</span>`);
		$('#lblTIRefsErrs').toggleClass('alert-success alert-danger', false);
		$('#lblTIRefsErrs').toggleClass(`alert-${type}`, true);
	};

	/**
	 * Sets a reference as selected
	 * @param {(HTMLElement|number)} item Element or index.
	 * @param {boolean=} selected By default is true.
	 */
	setRefAsSelected = (item, selected) => {
		const element = (typeof item === 'number' ? 
			$(`#lbxTIRefs .list-group-item:nth-child(${item + 1})`).get(0) :
			item);
		$('#lbxTIRefs .list-group-item').toggleClass('active', false);
		if (selected != false) {
			$(element).toggleClass('active', true);
		}
	};
}

module.exports = DialogEditRefs;