import model from 'parket'

const Person = model('Person', {
    initial: () => ({
        firstname: null,
        lastname: null,
        nested: null,
    }),
    actions: state => ({
        setFirstName (first) {
            state.firstname = first;
        },
        setLastName (last) {
            state.lastname = last;
        },
        setNested (nested) {
            state.nested = nested;
        },
    }),
    views: state => ({
        fullname: () => `${state.firstname} ${state.lastname}`,
    }),
});