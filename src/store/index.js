import model from 'parket'

const Magnet = model('Magnet', {
    initial: () => ({
        word: null
    }),
    actions: state => ({
        setWord (word) {
            state.word = word;
        },
    }),
    views: state => ({
        showWord: () => `${state.word}`
    })
})

const Sequence = model('Sequence',  {
    initial: () => ({
        message: null
    }),
    actions: state => ({
        addWordToSequence(word) {
            state.message.push(word)
        }
    })
})

export default Magnet