import typography from '@tailwindcss/typography';

const colors = {
        primary: '#516760',
        primary_dark: '#252d29',
        secondary_light: '#95d9c3',
        secondary: '#a4f9c8',
        secondary_dark: '#141b41',
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
