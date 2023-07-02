/**
 * Modules
 */
import {memo, useMemo} from 'react';

interface I_LogoFrame {
    isDark: boolean;
}

const LogoFrame: React.NamedExoticComponent<Readonly<I_LogoFrame>> = memo<Readonly<I_LogoFrame>>(({isDark}) => {
    const {black, red} = useMemo(() => {
        return {
            black: isDark ? '#FFFFFF' : '#212121',
            red: '#E31F25'
        }
    }, [isDark]);

    return (
        <svg width="380" height="296" viewBox="0 0 380 296" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={red} d="M175.81 167.84C175.65 167.79 174.85 167.72 174.66 167.64C174.32 167.493 174.35 167.42 174.75 167.42H366.75C366.883 167.42 367.01 167.473 367.104 167.566C367.197 167.66 367.25 167.787 367.25 167.92V224.92C367.25 225.023 367.183 225.123 367.063 225.196C366.943 225.269 366.78 225.31 366.61 225.31C307.82 225.65 249.09 225.46 190.34 225.69C186.37 225.7 180.04 225.05 175 225.66C174.767 225.687 174.573 225.67 174.42 225.61C173.987 225.443 174.03 225.287 174.55 225.14C202.43 217.22 203.81 176.42 175.81 167.84Z" />
            <path fill={black} d="M371 228.55C371 228.738 370.925 228.919 370.792 229.052C370.659 229.185 370.478 229.26 370.29 229.26H9.71C9.5217 229.26 9.34111 229.185 9.20795 229.052C9.0748 228.919 9 228.738 9 228.55V164.21C9 164.022 9.0748 163.841 9.20795 163.708C9.34111 163.575 9.5217 163.5 9.71 163.5H370.29C370.478 163.5 370.659 163.575 370.792 163.708C370.925 163.841 371 164.022 371 164.21V228.55ZM175.81 167.92C203.81 176.5 202.43 217.3 174.55 225.22C174.03 225.367 173.987 225.523 174.42 225.69C174.573 225.75 174.767 225.767 175 225.74C180.04 225.13 186.37 225.78 190.34 225.77C249.09 225.54 307.82 225.73 366.61 225.39C366.78 225.39 366.943 225.349 367.063 225.276C367.183 225.203 367.25 225.103 367.25 225V168C367.25 167.867 367.197 167.74 367.104 167.646C367.01 167.553 366.883 167.5 366.75 167.5H174.75C174.35 167.5 174.32 167.573 174.66 167.72C174.85 167.8 175.65 167.87 175.81 167.92Z" />
            <path
                fill={black}
                d="M298.04 239.5L300.31 245.07C300.393 245.275 300.441 245.479 300.446 245.658C300.451 245.837 300.414 245.983 300.34 246.08L298.57 248.32C298.507 248.402 298.394 248.457 298.247 248.477C298.1 248.497 297.926 248.48 297.75 248.43C292.31 246.93 282.49 241.86 279.04 249.46C277.4 253.06 279.65 260.06 280.47 264.01C280.509 264.199 280.503 264.388 280.453 264.553C280.403 264.719 280.312 264.853 280.19 264.94L278 266.52C277.901 266.591 277.766 266.624 277.61 266.615C277.454 266.607 277.283 266.556 277.12 266.47C272.11 263.82 263.29 257.27 258.69 264.18C256.62 267.29 257.48 274.92 257.5 278.74C257.5 278.908 257.47 279.071 257.411 279.218C257.353 279.366 257.267 279.496 257.16 279.6C251.99 284.52 244.54 266.21 236.12 274.87C233.42 277.66 233.12 284.41 232.36 288.54C232.318 288.776 232.258 288.99 232.187 289.156C232.117 289.323 232.038 289.435 231.96 289.48C231.14 289.947 230.257 290.227 229.31 290.32C229.154 290.333 228.99 290.303 228.831 290.234C228.672 290.164 228.521 290.057 228.39 289.92C224.63 285.91 218.57 275.96 211.79 281.34C208.68 283.81 207.12 290.39 205.53 294.37C205.457 294.556 205.343 294.715 205.203 294.828C205.064 294.94 204.906 295 204.75 295L202.25 295.01C202.108 295.01 201.956 294.954 201.812 294.848C201.667 294.743 201.535 294.591 201.43 294.41C198.69 289.7 194.74 279.71 187.45 282.72C183.69 284.28 180.74 290.69 178.58 294.4C178.495 294.544 178.377 294.67 178.234 294.768C178.091 294.866 177.926 294.935 177.75 294.97C176.663 295.163 175.637 295.043 174.67 294.61C174.605 294.58 174.522 294.481 174.431 294.324C174.34 294.168 174.246 293.961 174.16 293.73C172.12 288.29 170.49 278.24 162.24 280.09C158.47 280.93 154.3 286.86 151.71 289.76C151.573 289.914 151.434 290.044 151.308 290.135C151.182 290.225 151.075 290.272 151 290.27C149.953 290.257 148.967 289.987 148.04 289.46C147.942 289.402 147.851 289.287 147.776 289.125C147.701 288.964 147.643 288.762 147.61 288.54C147.05 284.51 146.52 276.98 143.34 274.34C137.5 269.48 130.51 277.02 126.16 280.46C125.992 280.593 125.815 280.69 125.652 280.74C125.489 280.791 125.349 280.79 125.25 280.74L122.8 279.46C122.703 279.412 122.62 279.295 122.563 279.127C122.506 278.959 122.477 278.747 122.48 278.52C122.52 274.54 123.41 267.24 121.17 264.05C114.33 254.26 103.53 271.12 99.67 264.67C99.5098 264.407 99.4631 264.077 99.54 263.75C100.42 259.93 102.59 252.97 100.96 249.42C97.49 241.89 88 246.8 82.47 248.43C82.2589 248.491 82.0558 248.524 81.8916 248.526C81.7274 248.528 81.611 248.498 81.56 248.44L79.7 246.3C79.6195 246.205 79.5757 246.061 79.5739 245.885C79.5722 245.71 79.6125 245.51 79.69 245.31L82.05 239.35L104.12 239.46C153.39 284.31 226.53 285.01 275.8 239.49C283.14 239.143 290.553 239.147 298.04 239.5Z"
            />
            <path
                fill={black}
                d="M106.49 60.47L105.34 61.82C105.271 61.9018 105.161 61.9813 105.016 62.0536C104.872 62.126 104.696 62.1894 104.5 62.24C104.02 62.36 103.623 62.2633 103.31 61.95C103.226 61.8667 103.206 61.7266 103.252 61.5601C103.299 61.3936 103.41 61.214 103.56 61.06L109.44 55.19C109.602 55.0285 109.784 54.906 109.962 54.8383C110.14 54.7705 110.307 54.7607 110.44 54.81C110.8 54.9567 111.043 55.2067 111.17 55.56C111.215 55.6895 111.194 55.8473 111.111 56.0084C111.027 56.1695 110.886 56.3248 110.71 56.45C110.057 56.9233 109.553 57.5133 109.2 58.22C109.149 58.3245 109.158 58.4746 109.227 58.6476C109.295 58.8207 109.419 59.0074 109.58 59.18L114.15 64.09C114.308 64.2592 114.429 64.444 114.493 64.6121C114.557 64.7803 114.56 64.9211 114.5 65.01C114.18 65.51 113.763 65.93 113.25 66.27C113.175 66.3168 113.049 66.299 112.895 66.2199C112.74 66.1409 112.568 66.0059 112.41 65.84L107.46 60.55C107.39 60.4769 107.308 60.4163 107.219 60.3722C107.131 60.328 107.038 60.3013 106.946 60.2937C106.855 60.2862 106.767 60.298 106.688 60.3284C106.609 60.3587 106.542 60.407 106.49 60.47Z"
            />
            <path
                fill={black}
                d="M277.192 69.6755C276.646 70.1667 276 70.5353 275.29 70.7601C274.58 70.985 273.82 71.0618 273.053 70.9861C272.286 70.9104 271.528 70.6837 270.822 70.319C270.115 69.9543 269.474 69.4586 268.936 68.8604C267.848 67.6522 267.242 66.0994 267.252 64.5437C267.262 62.9879 267.886 61.5565 268.988 60.5645C269.534 60.0733 270.18 59.7047 270.89 59.4799C271.6 59.255 272.36 59.1782 273.127 59.2539C273.894 59.3296 274.652 59.5562 275.358 59.921C276.065 60.2857 276.706 60.7814 277.244 61.3796C278.332 62.5878 278.938 64.1406 278.928 65.6963C278.918 67.2521 278.294 68.6835 277.192 69.6755ZM275.777 62.5756C275.466 62.2429 275.088 61.9784 274.665 61.7974C274.242 61.6163 273.783 61.5222 273.313 61.5204C272.844 61.5186 272.373 61.6092 271.928 61.7869C271.483 61.9647 271.072 62.2261 270.719 62.5563C270.006 63.2232 269.573 64.1297 269.513 65.0764C269.454 66.0231 269.774 66.9324 270.403 67.6044C270.714 67.9371 271.092 68.2016 271.515 68.3826C271.938 68.5637 272.397 68.6578 272.867 68.6596C273.336 68.6614 273.807 68.5708 274.252 68.3931C274.697 68.2153 275.108 67.9539 275.461 67.6237C276.174 66.9568 276.607 66.0503 276.667 65.1036C276.726 64.1569 276.406 63.2476 275.777 62.5756Z"
            />
            <path
                fill={black}
                d="M81.8398 101.618C81.1923 101.267 80.6268 100.78 80.1754 100.185C79.7239 99.5896 79.3955 98.8983 79.2089 98.1503C79.0222 97.4023 78.981 96.6122 79.0875 95.8251C79.1941 95.038 79.4463 94.2694 79.8298 93.5631C80.2133 92.8568 80.7205 92.2267 81.3226 91.7087C81.9247 91.1906 82.6097 90.7949 83.3387 90.5441C84.0677 90.2932 84.8263 90.1921 85.5712 90.2466C86.3161 90.3011 87.0328 90.5101 87.6802 90.8616C88.3277 91.2131 88.8932 91.7003 89.3446 92.2954C89.7961 92.8905 90.1245 93.5817 90.3111 94.3297C90.4978 95.0777 90.539 95.8678 90.4324 96.6549C90.3259 97.442 90.0737 98.2106 89.6902 98.9169C89.3067 99.6232 88.7995 100.253 88.1974 100.771C87.5953 101.289 86.9103 101.685 86.1813 101.936C85.4523 102.187 84.6937 102.288 83.9488 102.233C83.2039 102.179 82.4872 101.97 81.8398 101.618ZM88.32 96.24C88.32 95.2905 87.9428 94.3799 87.2714 93.7086C86.6001 93.0372 85.6895 92.66 84.74 92.66C83.7905 92.66 82.8799 93.0372 82.2086 93.7086C81.5372 94.3799 81.16 95.2905 81.16 96.24C81.16 97.1895 81.5372 98.1001 82.2086 98.7714C82.8799 99.4428 83.7905 99.82 84.74 99.82C85.6895 99.82 86.6001 99.4428 87.2714 98.7714C87.9428 98.1001 88.32 97.1895 88.32 96.24Z"
            />
            <path
                fill={black}
                d="M293.72 101.45C294.04 102.08 296.7 107.03 294.79 106.82C294.616 106.802 294.451 106.739 294.311 106.639C294.17 106.539 294.06 106.405 293.99 106.25L291.06 99.69C290.996 99.5448 290.997 99.3781 291.062 99.2263C291.128 99.0745 291.253 98.95 291.41 98.88L299.74 95.22C299.894 95.1531 300.06 95.1297 300.214 95.153C300.369 95.1763 300.503 95.2452 300.6 95.35C302.77 97.63 295.47 99.68 293.91 100.72C293.796 100.795 293.713 100.91 293.678 101.044C293.643 101.179 293.658 101.323 293.72 101.45Z"
            />
            <path
                fill={black}
                d="M71.29 143.47C72.63 143.55 79.61 142.9 77.79 145.89C77.7148 146.016 77.6006 146.117 77.4608 146.183C77.321 146.248 77.1612 146.275 77 146.26L68.25 145.47C68.046 145.451 67.8552 145.393 67.716 145.305C67.5768 145.218 67.4996 145.109 67.5 145V142.25C67.5009 142.086 67.5757 141.922 67.712 141.786C67.8483 141.649 68.038 141.549 68.25 141.5L73.76 140.27C74.8667 140.023 74.8567 139.693 73.73 139.28L68.59 137.38C68.3786 137.302 68.1984 137.167 68.0868 137.003C67.9751 136.839 67.9405 136.659 67.99 136.5C68.2633 135.6 68.3433 134.683 68.23 133.75C68.2237 133.702 68.2413 133.655 68.2814 133.612C68.3215 133.569 68.3832 133.531 68.4622 133.502C68.5413 133.472 68.6357 133.451 68.7389 133.441C68.8422 133.43 68.9517 133.43 69.06 133.44L78 134.22C78.2072 134.237 78.401 134.3 78.5421 134.396C78.6832 134.493 78.7611 134.616 78.76 134.74L78.75 136C78.7494 136.068 78.7293 136.134 78.6908 136.196C78.6523 136.257 78.5963 136.312 78.5262 136.357C78.456 136.402 78.3732 136.436 78.2827 136.457C78.1923 136.478 78.0961 136.486 78 136.48L71.49 136.1C71.4561 136.098 71.4214 136.1 71.3888 136.107C71.3562 136.114 71.3268 136.125 71.3031 136.14C71.2794 136.155 71.2621 136.173 71.2529 136.192C71.2436 136.211 71.2426 136.231 71.25 136.25L71.31 136.44C71.3171 136.447 71.3396 136.46 71.374 136.477C71.4084 136.493 71.4527 136.512 71.5 136.53L78 139C78.1467 139.058 78.2751 139.16 78.3705 139.296C78.4659 139.432 78.5246 139.596 78.54 139.77C78.81 143.15 72.23 141.64 70.97 143C70.71 143.287 70.8167 143.443 71.29 143.47Z"
            />
            <path
                fill={black}
                d="M303.23 138.26C301.563 138.173 300.87 137.277 301.15 135.57C301.16 135.509 301.186 135.451 301.225 135.402C301.263 135.352 301.314 135.311 301.373 135.282C301.432 135.254 301.499 135.238 301.567 135.236C301.636 135.233 301.705 135.245 301.77 135.27C304.1 136.17 313.44 138.24 312.17 141.49C312.054 141.78 311.809 142.039 311.48 142.22L303 147C302.899 147.057 302.788 147.102 302.677 147.13C302.566 147.159 302.459 147.171 302.366 147.165C302.272 147.159 302.194 147.136 302.139 147.096C302.084 147.057 302.053 147.003 302.05 146.94L302 145C302.002 144.948 302.07 144.862 302.193 144.757C302.317 144.651 302.488 144.533 302.68 144.42L303.93 143.7C304.036 143.638 304.119 143.515 304.169 143.347C304.219 143.179 304.233 142.974 304.21 142.76L303.77 138.75C303.756 138.619 303.693 138.498 303.594 138.408C303.495 138.319 303.366 138.266 303.23 138.26ZM308.96 140.42C306.247 138.58 305.237 138.997 305.93 141.67C305.957 141.777 306.003 141.88 306.062 141.971C306.122 142.061 306.195 142.137 306.275 142.192C306.355 142.247 306.441 142.28 306.525 142.288C306.609 142.296 306.689 142.28 306.76 142.24L309.01 141.02C309.059 140.993 309.098 140.953 309.123 140.903C309.148 140.853 309.159 140.795 309.154 140.735C309.149 140.675 309.128 140.614 309.094 140.559C309.06 140.503 309.014 140.456 308.96 140.42Z"
            />
            <path
                fill={black}
                d="M315.79 152.75L316.02 153.07C316.08 153.155 316.175 153.222 316.295 153.264C316.414 153.306 316.554 153.322 316.7 153.31C321.473 152.883 326.233 152.813 330.98 153.1C345.38 153.267 359.77 153.32 374.15 153.26C377.21 153.25 379.1 154.16 380 157.06V235.81C378.86 238.39 377.16 239.25 374.25 239.24C348.843 239.127 323.44 239.213 298.04 239.5C290.553 239.147 283.14 239.143 275.8 239.49L249.3 239.28C248.987 239.28 248.667 239.377 248.38 239.56C212.36 261.94 167.64 262.04 131.88 239.73C131.377 239.416 130.818 239.253 130.27 239.26L104.12 239.46L82.05 239.35C56.3567 239.237 30.67 239.197 4.99 239.23C2.29 239.24 0.7 237.89 0 235.44V156.94C0.95 154.11 2.8 153.25 5.82 153.25C20.38 153.29 34.9433 153.26 49.51 153.16C54.6033 152.847 59.5633 152.933 64.39 153.42L80.8 153.2C80.8639 153.199 80.9269 153.185 80.9853 153.159C81.0437 153.133 81.0964 153.095 81.1402 153.049C81.1839 153.002 81.218 152.947 81.2403 152.888C81.2626 152.828 81.2727 152.764 81.27 152.7C79.27 107.2 105.55 65 147.64 47.34C221.81 16.22 301.84 72.63 298.8 152.71C298.797 152.78 298.807 152.85 298.828 152.916C298.85 152.982 298.882 153.041 298.924 153.092C298.967 153.142 299.017 153.182 299.073 153.21C299.129 153.237 299.189 153.25 299.25 153.25H315.5C315.559 153.249 315.616 153.223 315.661 153.178C315.707 153.132 315.738 153.069 315.75 153L315.79 152.75ZM247.4 64.33C228.193 50.81 206.7 44.9133 182.92 46.64C127.93 50.65 86.17 97.58 89.01 152.73C89.0178 152.87 89.0728 153.002 89.1638 153.098C89.2549 153.195 89.3751 153.249 89.5 153.25H290.5C290.688 153.249 290.868 153.168 291.002 153.022C291.137 152.876 291.215 152.678 291.22 152.47C292.05 116.08 276.68 84.94 247.4 64.33ZM374.23 161.06C374.23 160.911 374.171 160.769 374.066 160.664C373.961 160.559 373.819 160.5 373.67 160.5H6.47C6.32148 160.5 6.17904 160.559 6.07402 160.664C5.969 160.769 5.91 160.911 5.91 161.06V231.94C5.91 232.089 5.969 232.231 6.07402 232.336C6.17904 232.441 6.32148 232.5 6.47 232.5H373.67C373.819 232.5 373.961 232.441 374.066 232.336C374.171 232.231 374.23 232.089 374.23 231.94V161.06ZM147.76 239.7C175.747 251.793 203.777 251.857 231.85 239.89C232.483 239.623 232.467 239.49 231.8 239.49L147.75 239.33C147.19 239.33 147.193 239.453 147.76 239.7Z"
            />
            <path
                fill={black}
                d="M196.43 33.68C197.677 32.9533 197.6 32.3933 196.2 32C194.03 31.4 188.76 30.47 190.17 27.03C191.35 24.16 196.43 25.08 198.37 26.43C198.608 26.5973 198.786 26.8672 198.87 27.19C199.157 28.2433 198.693 28.6733 197.48 28.48C197.195 28.435 196.924 28.2872 196.71 28.06C194.34 25.53 190.14 28.12 193.55 28.9C195.183 29.2733 196.757 29.82 198.27 30.54C198.565 30.681 198.794 30.9279 198.91 31.23C200.97 36.53 193.12 37.13 190.99 35.37C188.823 33.5767 188.85 32.57 191.07 32.35C191.226 32.3351 191.38 32.3601 191.514 32.4221C191.649 32.484 191.758 32.5804 191.83 32.7C192.923 34.5067 194.457 34.8333 196.43 33.68Z"
            />
            <path
                fill={black}
                d="M152.42 36.2943C152.717 36.966 152.865 37.6948 152.858 38.4393C152.851 39.1837 152.688 39.9292 152.378 40.6331C152.068 41.337 151.618 41.9855 151.053 42.5417C150.489 43.0979 149.82 43.5508 149.086 43.8746C147.603 44.5285 145.944 44.6168 144.472 44.1201C143.001 43.6233 141.838 42.5822 141.24 41.2257C140.943 40.554 140.795 39.8252 140.802 39.0807C140.809 38.3363 140.972 37.5908 141.282 36.8869C141.592 36.183 142.042 35.5345 142.607 34.9783C143.171 34.4221 143.84 33.9692 144.574 33.6454C146.057 32.9915 147.716 32.9032 149.188 33.3999C150.659 33.8967 151.822 34.9378 152.42 36.2943ZM147.873 42.2939C148.755 42.0294 149.488 41.4024 149.912 40.5508C150.336 39.6992 150.416 38.6928 150.134 37.7529C149.852 36.813 149.231 36.0167 148.408 35.539C147.586 35.0614 146.628 34.9417 145.747 35.2061C144.865 35.4706 144.132 36.0976 143.708 36.9492C143.284 37.8008 143.204 38.8072 143.486 39.7471C143.768 40.687 144.389 41.4833 145.212 41.961C146.034 42.4386 146.992 42.5583 147.873 42.2939Z"
            />
            <path
                fill={black}
                d="M235.3 38.32C237.69 37.74 241.27 35.72 243.36 37.39C243.707 37.67 243.67 37.88 243.25 38.02L238.99 39.46C238.822 39.5177 238.679 39.6304 238.591 39.7763C238.502 39.9222 238.473 40.091 238.51 40.25L239.99 47C240 47.0482 239.994 47.0972 239.972 47.1428C239.951 47.1883 239.915 47.2291 239.868 47.2615C239.821 47.294 239.764 47.3172 239.701 47.3291C239.639 47.341 239.573 47.3413 239.51 47.33C236.5 46.75 236.86 43.45 236.33 41.21C236.286 41.0111 236.204 40.8315 236.1 40.7032C235.995 40.575 235.875 40.5065 235.76 40.51C234.067 40.5567 233.057 41.38 232.73 42.98C232.707 43.0939 232.676 43.2057 232.639 43.3084C232.602 43.4112 232.559 43.5025 232.514 43.5768C232.469 43.6511 232.422 43.7066 232.377 43.7398C232.331 43.7731 232.288 43.7834 232.25 43.77L230.33 43.17C230.281 43.1547 230.24 43.1186 230.211 43.064C230.182 43.0093 230.165 42.9374 230.162 42.8527C230.158 42.768 230.167 42.6724 230.189 42.5721C230.211 42.4718 230.246 42.3689 230.29 42.27L234.05 34.06C234.139 33.8712 234.26 33.7082 234.388 33.6041C234.516 33.5001 234.642 33.4628 234.74 33.5L236.18 34.06C236.249 34.0872 236.311 34.1316 236.361 34.1907C236.41 34.2497 236.448 34.3221 236.47 34.4034C236.493 34.4847 236.5 34.5733 236.491 34.6638C236.482 34.7543 236.458 34.8449 236.42 34.93L235.02 38.01C234.893 38.2967 234.987 38.4 235.3 38.32Z"
            />
            <path
                fill={black}
                d="M176.31 0H177.81C181.1 4.63 185.92 17.52 194.06 11.66C197.06 9.49 199.53 3.53 202.31 0H203.31L204.99 0.4C205.137 0.433547 205.274 0.505997 205.39 0.610775C205.505 0.715552 205.594 0.849341 205.65 1C207.81 6.61 209.22 16.73 217.75 15.17C219.15 14.91 220.323 14.25 221.27 13.19C223.57 10.63 225.69 8.26667 227.63 6.1C228.917 4.66 230.353 4.52333 231.94 5.69C232.06 5.77841 232.163 5.89557 232.242 6.03464C232.321 6.17371 232.375 6.33191 232.4 6.5C233.22 11.98 233.54 24.59 242.87 22.28C246.36 21.41 250.85 16.98 254.1 14.54C254.213 14.453 254.357 14.404 254.514 14.3987C254.672 14.3934 254.837 14.432 254.99 14.51L257 15.5C257.148 15.5754 257.271 15.689 257.358 15.8285C257.444 15.9679 257.49 16.1276 257.49 16.29C257.49 20.19 256.62 27.7 258.68 30.89C263.26 37.99 271.92 31.61 276.84 28.77C277.039 28.655 277.236 28.5681 277.4 28.5229C277.565 28.4777 277.688 28.4767 277.75 28.52L280.26 30.23C280.36 30.2995 280.433 30.4335 280.469 30.6142C280.504 30.7948 280.501 31.0132 280.46 31.24C279.43 36.76 275.32 47.46 283.7 49.66C287.41 50.63 293.38 47.97 297.27 46.82C297.476 46.7596 297.672 46.7258 297.837 46.7223C298.003 46.7188 298.132 46.7456 298.21 46.8C299.103 47.4 299.81 48.1967 300.33 49.19C300.379 49.2805 300.396 49.4149 300.378 49.5799C300.361 49.7449 300.31 49.9346 300.23 50.13C298.71 54.01 295.79 59.15 296.15 62.94C297.02 72.08 308.48 68.74 314.27 68.29C314.497 68.2723 314.711 68.2868 314.882 68.3315C315.054 68.3762 315.175 68.449 315.23 68.54L316.75 71C316.796 71.0787 316.793 71.206 316.743 71.3628C316.692 71.5196 316.597 71.6975 316.47 71.87C314.3 74.84 309.07 81.7 309.85 85.46C311.44 93.11 320.98 92.04 326.96 92.44C327.149 92.452 327.328 92.5105 327.473 92.6083C327.619 92.7061 327.726 92.8389 327.78 92.99L328.58 95.18C328.624 95.3032 328.623 95.4482 328.577 95.5985C328.531 95.7488 328.442 95.8983 328.32 96.03C325.58 99.01 320.12 103.72 319.44 107.6C317.95 116.07 329.01 116.98 334.61 118.51C334.838 118.57 335.043 118.658 335.193 118.759C335.343 118.861 335.43 118.97 335.44 119.07L335.79 121.74C335.805 121.859 335.755 122.006 335.649 122.162C335.542 122.319 335.383 122.478 335.19 122.62C331.97 124.96 325.69 128.53 324.44 132.17C321.74 140.07 332.26 143 337.29 145.53C337.498 145.636 337.678 145.761 337.805 145.89C337.932 146.019 338 146.145 338 146.25V149C337.998 149.082 337.928 149.192 337.8 149.312C337.673 149.433 337.494 149.558 337.29 149.67L330.98 153.1C326.233 152.813 321.473 152.883 316.7 153.31C316.554 153.322 316.414 153.306 316.295 153.264C316.175 153.222 316.08 153.155 316.02 153.07L315.79 152.75C316.583 122.643 308.38 96.0033 291.18 72.83C239.85 3.69 136.98 5.28 86.95 75.44C70.77 98.1267 63.25 124.12 64.39 153.42C59.5633 152.933 54.6033 152.847 49.51 153.16L42.7 149.71C42.5011 149.609 42.3295 149.49 42.2016 149.366C42.0738 149.242 41.994 149.116 41.97 149C41.77 148.027 41.8167 147.05 42.11 146.07C42.1501 145.927 42.2313 145.791 42.3474 145.671C42.4635 145.551 42.6115 145.452 42.78 145.38C47.69 143.21 58.39 140 55.58 132.33C54.16 128.45 48.28 125.12 44.7 122.51C44.5443 122.396 44.4173 122.264 44.334 122.129C44.2507 121.995 44.2147 121.863 44.23 121.75L44.64 119.18C44.6602 119.039 44.7415 118.901 44.8734 118.783C45.0052 118.665 45.1817 118.574 45.38 118.52C49.24 117.47 56.11 116.45 58.75 113.72C64.85 107.44 55.73 100.45 51.85 96.34C51.7019 96.1829 51.5847 96.0167 51.5148 95.8643C51.4449 95.712 51.4258 95.5811 51.46 95.49L52.54 92.8C52.5701 92.7167 52.6794 92.6373 52.8511 92.5741C53.0227 92.5108 53.2472 92.4672 53.49 92.45C57.49 92.14 64.24 92.37 67.32 90.08C74.28 84.91 66.82 76.82 63.82 72.11C63.6261 71.8125 63.5343 71.4844 63.56 71.18C64.12 63.47 81.99 75.7 83.8 63.3C84.38 59.33 81.2 53.67 79.64 49.72C79.5824 49.5745 79.5677 49.413 79.5977 49.2528C79.6276 49.0925 79.701 48.9395 79.81 48.81L81.42 46.92C81.492 46.8342 81.6074 46.7751 81.7515 46.7502C81.8956 46.7253 82.0621 46.7357 82.23 46.78C87.65 48.26 97.61 53.39 100.96 45.76C102.57 42.1 100.36 35.29 99.51 31.23C99.4612 30.9897 99.4514 30.757 99.4821 30.5674C99.5128 30.3778 99.5823 30.2417 99.68 30.18L101.99 28.7C102.077 28.6472 102.22 28.6362 102.401 28.6682C102.583 28.7002 102.795 28.774 103.01 28.88C106.54 30.6 111.93 34.15 115.51 34.15C124.54 34.13 122.52 22.09 122.51 16.56C122.51 16.3648 122.532 16.1844 122.572 16.0381C122.613 15.8919 122.671 15.7853 122.74 15.73C123.56 15.11 124.477 14.6833 125.49 14.45C125.558 14.4358 125.674 14.4683 125.822 14.5432C125.97 14.6182 126.144 14.7321 126.32 14.87C130.64 18.26 137.93 26.18 143.68 20.59C146.59 17.76 146.99 10.57 147.71 6.28C147.743 6.08858 147.812 5.91431 147.907 5.77785C148.003 5.64138 148.122 5.54843 148.25 5.51L150.76 4.77C150.869 4.73766 151.003 4.75563 151.144 4.8216C151.285 4.88757 151.426 4.99849 151.55 5.14C154.12 8.12 158.34 14 162.05 15.05C173.37 18.25 170.9 0.6 176.31 0Z"
            />
        </svg>
    );
});

export default LogoFrame;
