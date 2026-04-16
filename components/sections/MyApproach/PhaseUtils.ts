export const getColor = (rgb: number[]) => `rgb(${rgb.join(",")})`;

export const getColorSoft = (rgb: number[]) =>
    `rgba(${rgb.join(",")}, 0.4)`;

export const getColorBg = (rgb: number[]) =>
    `rgba(${rgb.join(",")}, 0.08)`;