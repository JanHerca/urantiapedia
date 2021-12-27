// Dialog for editing aliases

const Dialog = require('./dialog');
const strformat = require('./utils').strformat;

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
				<label class="col-sm-12 col-form-label">{0}</label>
			</div>
			<div class="form-group row mb-1">
				<label class="col-sm-2 col-form-label-sm">{1}</label>
				<div class="col-sm-10">
					<input class="form-control form-control-sm" type="text"/>
				</div>
			</div>
			<div class="form-group row mb-1">
				<div class="col-sm-12">
					<button type="button" class="btn btn-sm btn-secondary px-1 mr-1">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
						<span>{2}</span>
					</button>
					<button type="button" class="btn btn-sm btn-secondary px-1 mr-1">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
						<span>{3}</span>
					</button>
					<button type="button" class="btn btn-sm btn-secondary px-1 mr-1">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M16.17,14.76l-1.1-1.1c0.71-1.33,0.53-3.01-0.59-4.13C13.79,8.84,12.9,8.5,12,8.5c-0.03,0-0.06,0.01-0.09,0.01 L13,9.6l-1.06,1.06L9.11,7.83L11.94,5L13,6.06l-0.96,0.96c1.27,0.01,2.53,0.48,3.5,1.44C17.24,10.17,17.45,12.82,16.17,14.76z M14.89,16.17L12.06,19L11,17.94l0.95-0.95c-1.26-0.01-2.52-0.5-3.48-1.46c-1.71-1.71-1.92-4.35-0.64-6.29l1.1,1.1 c-0.71,1.33-0.53,3.01,0.59,4.13c0.7,0.7,1.63,1.04,2.56,1.01L11,14.4l1.06-1.06L14.89,16.17z"/></svg>
						<span>{4}</span>
					</button>
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
	aliases = [];

	updateContent = (aliasesLabel, aliasLabel, addLabel, removeLabel, updateLabel,
		ubLabel) => {
		aliasesLabel = aliasesLabel || 'Aliases';
		aliasLabel = aliasLabel || 'Alias';
		addLabel = addLabel || 'Add alias';
		removeLabel = removeLabel || 'Remove alias';
		updateLabel = updateLabel || 'Update alias';
		ubLabel = ubLabel || 'The Urantia Book';
		this.content = strformat(this.contentTemplate, aliasesLabel,
			aliasLabel, addLabel, removeLabel, updateLabel, ubLabel);
	};

	updateAliases = () => {
		const html = this.aliases.map(alias => {
			return `<div class="list-group-item btn-sm list-group-item-action p-1">
						${alias}
					</div>`;
		}).join('');
		$(this.element).find('#lbxTIAliases').html(html);
	};

	setAliases = (aliases) => {
		this.aliases = aliases;
		this.updateAliases();
	}

	setUBRefs = (refs, book) => {
		const arRefs = book.getArrayOfRefs(refs);
		const html = arRefs.map(r => {
			const errs = [];
			const par = book.toParInHTML(r, errs);
			const ref = (r ? ` [${r[0]}:${r[1]}.${r[2]}]` : '');
			const ercls = (r == null  ? ' alert alert-danger' : '');
			return `<div class="list-group-item btn-sm list-group-item-action 
						py-0 px-2 flex-column align-items-start${ercls}">
						<div>${par}</div>
						<div class="text-right">${ref}</div>
					</div>`;
		}).join('');
		$(this.element).find('#lbxTIAliasesUB').html(html);
	};
}

module.exports = DialogEditAliases;