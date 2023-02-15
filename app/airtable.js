// Connection with AirTable API

const AirTable = require('airtable');
const Schema = require('./airtable_schema');
const { extendArray } = require('./utils');

class AirTableConnector {
    apiKey = null;
    baseID = null;
    base = null;
    cache = {};

    configure = (apiKey, baseID) => {
        this.apiKey = apiKey;
        this.baseID = baseID;
        AirTable.configure({
            endpointUrl: 'https://api.airtable.com',
            apiKey: this.apiKey
        });
        this.base = AirTable.base(this.baseID);
    };

    connected = () => {
        return (this.base != null);
    };

    getTableNames = () => {
        return Object.keys(Schema);
    };

    getTable = (tableName) => {
        if (this.base == null) {
            return Promise.reject('Not connected.');
        }
        return new Promise((resolve, reject) => {
            let table = this.cache[tableName];
            if (table) {
                table.length = 0;
            } else {
                this.cache[tableName] = [];
                table = this.cache[tableName];
            }
            this.base(tableName).select()
                .eachPage((recs, next) => {
                    recs.forEach(rec => table.push(rec._rawJson));
                    next();
                }, err => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(table);
                });
        }) 
    };

    getAllTables = () => {
        const tableNames = this.getTableNames();
        for (let name in Schema) {
            extendArray(tableNames, Schema[name].relations.map(r => r.name));
        }
        return Promise.all(tableNames.map(name => this.getTable(name)));
    };

    getTableRender = (tableName, active) => {
        return `<div class="list-group-item btn-sm list-group-item-action 
            flex-column p-0 align-items-start${active}">
            <div class="d-flex w-100 justify-content-between px-2 py-1 mb-0">
                <div>${tableName}</div>
            </div>
        </div>`;
    };

    getRecord = (tableName, recName) => {
        const name = Schema[tableName].name;
        return this.cache[tableName].find(r => r.fields[name] === recName);
    };

    getRecordsNames = (tableName) => {
        const name = Schema[tableName].name;
        return this.cache[tableName]
            .sort((a,b) => {
                if (a.fields[name] > b.fields[name]) return 1;
                if (a.fields[name] < b.fields[name]) return -1;
                return 0;
                
            })
            .map(rec => this.getRecordRender(tableName, rec))
            .join('');
    };

    getRecordRender = (tableName, rec) => {
        const fieldName = Schema[tableName].name;
        const recName = rec.fields[fieldName];

        const render = 
            `<div class="list-group-item btn-sm list-group-item-action 
                flex-column p-0 align-items-start">
                <div class="d-flex w-100 justify-content-between px-2 py-1 mb-0">
                    <div>
                        <i class="bi-chevron-right"></i>
                        <span class="px-1">${recName}</span>
                    </div>
                </div>
            </div>`;
        return render;
    };

    getRecordForm = (tableName, rec) => {
        const fields = Schema[tableName].fields.map((field, i) => {
            let input = '', id = `airTable-${tableName}-${i}`;
            let value = rec.fields[field.name];
            value = (value != undefined ? value : '');
            if (field.type === 'Single line text') {
                input = `<input id="${id}" type="text" class="form-control" value="${value}">`
            } else if (field.type === 'Long text') {
                input = `<textarea id="${id}" type="text" class="form-control" rows="3" value="${value}"></textarea>`;
            } else if (field.type === 'Single select') {
                input = 
                    `<select id="${id}" class="custom-select">` +
                        field.values.map(v => {
                            const selected = (v === value ? ' selected' : '');
                            return `<option value="${v}"${selected}>${v}</option>`;
                        }).join('') +
                    `</select>`;
            }
            const r =
                `<div class="p-0 mb-2 flex-grow-0">
                    <div class="input-group input-group-sm">
                        <div class="input-group-prepend">
                            <span class="input-group-text">${field.name}</span>
                        </div>
                        ${input}
                    </div>
                </div>`;
            return r;
        }).join('');
        const form =
            `<div class="d-flex flex-column flex-shrink-0 ml-4">
                ${fields}
            </div>`;
        return form;
    };
}

module.exports = AirTableConnector;