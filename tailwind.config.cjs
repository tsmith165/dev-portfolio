import typography from '@tailwindcss/typography';

const colors = {
        primary: '#516760',
        primary_dark: '#252d29',
        secondary_light: '#c5fbdc',
        secondary: '#69c9ab',
        secondary_dark: '#1b4b3c',
        accent_color: '#44403c',
        grey: '#D3D3D3',
};

export default {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors,
        },
        project_name: 'Dev-Portfolio',
    },
    plugins: [typography],
    mode: 'jit',
};
