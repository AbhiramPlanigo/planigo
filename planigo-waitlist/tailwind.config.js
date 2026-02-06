/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                planigo: {
                    indigo: '#6366f1',
                    blue: '#3b82f6',
                    pink: '#d946ef',
                    orange: '#ff4d00',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                aura: 'aura 12s ease-in-out infinite',
                'diamond-shine': 'diamond-shine 6s linear infinite',
                'fluid-motion': 'fluid-motion 10s ease-in-out infinite',
                sweep: 'sweep 5s cubic-bezier(0.23, 1, 0.32, 1) infinite',
                'rotate-border': 'rotate-border 2.5s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                aura: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
                    '33%': { transform: 'translate(40px, -60px) scale(1.2)', opacity: '0.5' },
                    '66%': { transform: 'translate(-30px, 30px) scale(0.9)', opacity: '0.3' },
                },
                'diamond-shine': {
                    '0%': { backgroundPosition: '-200% 0, 0% 0' },
                    '100%': { backgroundPosition: '200% 0, 0% 0' },
                },
                'fluid-motion': {
                    '0%, 100%': { backgroundPosition: '0% 0, 0% 50%' },
                    '50%': { backgroundPosition: '0% 0, 100% 50%' },
                },
                sweep: {
                    '0%': { transform: 'translateX(-150%) skewX(-25deg)', opacity: '0' },
                    '20%': { opacity: '0.7' },
                    '40%': { transform: 'translateX(200%) skewX(-25deg)', opacity: '0' },
                    '100%': { transform: 'translateX(200%) skewX(-25deg)', opacity: '0' },
                },
                'rotate-border': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
            },
        },
    },
    plugins: [],
}
