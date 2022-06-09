module.exports = {
    content: ["./index.html", "./assets/js/functions.js"],
    theme: {
        extend: { 
            backgroundColor: theme => ({
                ...theme('colors'),
                'light'  : '#FFF',
                'primary': '#167ee6',
                'secondary': '#e8edf2',
                'terciary': '#3d793f',
            }),
            borderWidth: {
                DEFAULT: '1px',
                '0': '0',
            },
            fontFamily: {
                'rubik': [ 'Rubik', 'sans-serif']
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}