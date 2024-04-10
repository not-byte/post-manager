
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const notbyteTheme: CustomThemeConfig = {
    name: 'notbyte-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
		"--theme-font-family-heading": `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "0px",
		"--theme-rounded-container": "0px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #ea5657 
		"--color-primary-50": "252 230 230", // #fce6e6
		"--color-primary-100": "251 221 221", // #fbdddd
		"--color-primary-200": "250 213 213", // #fad5d5
		"--color-primary-300": "247 187 188", // #f7bbbc
		"--color-primary-400": "240 137 137", // #f08989
		"--color-primary-500": "234 86 87", // #ea5657
		"--color-primary-600": "211 77 78", // #d34d4e
		"--color-primary-700": "176 65 65", // #b04141
		"--color-primary-800": "140 52 52", // #8c3434
		"--color-primary-900": "115 42 43", // #732a2b
		// secondary | #81519c 
		"--color-secondary-50": "236 229 240", // #ece5f0
		"--color-secondary-100": "230 220 235", // #e6dceb
		"--color-secondary-200": "224 212 230", // #e0d4e6
		"--color-secondary-300": "205 185 215", // #cdb9d7
		"--color-secondary-400": "167 133 186", // #a785ba
		"--color-secondary-500": "129 81 156", // #81519c
		"--color-secondary-600": "116 73 140", // #74498c
		"--color-secondary-700": "97 61 117", // #613d75
		"--color-secondary-800": "77 49 94", // #4d315e
		"--color-secondary-900": "63 40 76", // #3f284c
		// tertiary | #f08461 
		"--color-tertiary-50": "253 237 231", // #fdede7
		"--color-tertiary-100": "252 230 223", // #fce6df
		"--color-tertiary-200": "251 224 216", // #fbe0d8
		"--color-tertiary-300": "249 206 192", // #f9cec0
		"--color-tertiary-400": "245 169 144", // #f5a990
		"--color-tertiary-500": "240 132 97", // #f08461
		"--color-tertiary-600": "216 119 87", // #d87757
		"--color-tertiary-700": "180 99 73", // #b46349
		"--color-tertiary-800": "144 79 58", // #904f3a
		"--color-tertiary-900": "118 65 48", // #764130
		// success | #acec4b 
		"--color-success-50": "243 252 228", // #f3fce4
		"--color-success-100": "238 251 219", // #eefbdb
		"--color-success-200": "234 250 210", // #eafad2
		"--color-success-300": "222 247 183", // #def7b7
		"--color-success-400": "197 242 129", // #c5f281
		"--color-success-500": "172 236 75", // #acec4b
		"--color-success-600": "155 212 68", // #9bd444
		"--color-success-700": "129 177 56", // #81b138
		"--color-success-800": "103 142 45", // #678e2d
		"--color-success-900": "84 116 37", // #547425
		// warning | #ff7b42 
		"--color-warning-50": "255 235 227", // #ffebe3
		"--color-warning-100": "255 229 217", // #ffe5d9
		"--color-warning-200": "255 222 208", // #ffded0
		"--color-warning-300": "255 202 179", // #ffcab3
		"--color-warning-400": "255 163 123", // #ffa37b
		"--color-warning-500": "255 123 66", // #ff7b42
		"--color-warning-600": "230 111 59", // #e66f3b
		"--color-warning-700": "191 92 50", // #bf5c32
		"--color-warning-800": "153 74 40", // #994a28
		"--color-warning-900": "125 60 32", // #7d3c20
		// error | #a52222 
		"--color-error-50": "242 222 222", // #f2dede
		"--color-error-100": "237 211 211", // #edd3d3
		"--color-error-200": "233 200 200", // #e9c8c8
		"--color-error-300": "219 167 167", // #dba7a7
		"--color-error-400": "192 100 100", // #c06464
		"--color-error-500": "165 34 34", // #a52222
		"--color-error-600": "149 31 31", // #951f1f
		"--color-error-700": "124 26 26", // #7c1a1a
		"--color-error-800": "99 20 20", // #631414
		"--color-error-900": "81 17 17", // #511111
		// surface | #0f1013 
		"--color-surface-50": "255 255 255", // #dbdbdc
		"--color-surface-100": "249 249 249", // #cfcfd0
		"--color-surface-200": "195 195 196", // #c3c3c4
		"--color-surface-300": "159 159 161", // #9f9fa1
		"--color-surface-400": "87 88 90", // #57585a
		"--color-surface-500": "29 24 32", // #0f1013
		"--color-surface-600": "25 22 28", // #0e0e11
		"--color-surface-700": "21 20 25", // #0b0c0e
		"--color-surface-800": "18 18 22", // #090a0b
		"--color-surface-900": "15 16 19", // #070809
		
	}
}