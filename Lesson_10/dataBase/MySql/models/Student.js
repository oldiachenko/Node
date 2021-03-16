module.exports = (client, { INTEGER, STRING }) => {
    const Student = client.define(
        'Student',
        {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            age: {
                type: INTEGER
            },
            gender: {
                type: STRING
            },
            name: {
                type: STRING
            }
        },
        {
            tableName: 'students',
            timestamps: false
        }
    );

    return Student;
};
