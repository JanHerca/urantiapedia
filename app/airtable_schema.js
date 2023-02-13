const AirTableSchema = {
    Person: {
        name: 'Person',
        fields: [
            {
                name: 'alternate name', 
                type: 'Single line text'
            },
            {
                name: 'short description',
                type: 'Single line text'
            },
            {
                name: 'long description',
                type: 'Long text'
            },
            {
                name: 'Type',
                type: 'Single select',
                values: ['Superhuman', 'Human']
            }
        ],
        relations : [
            {
                name: 'RESIDES_IN',
                description: 'resides or resided in',
                target: 'Location'
            },
            {
                name: 'IS_ALLOWED_TO_VISIT',
                description: 'can visit or visited',
                target: 'Location'
            }
        ]
    },
    Location: {
        name: 'Location',
        fields: [
            {
                name: 'alternate name', 
                type: 'Single line text'
            },
            {
                name: 'short description',
                type: 'Single line text'
            },
            {
                name: 'long description',
                type: 'Long text'
            },
            {
                name: 'Type',
                type: 'Single select',
                values: ['On Earth', 'On Heavens']
            }
        ],
        relations: [

        ]
    }
};

module.exports = AirTableSchema;