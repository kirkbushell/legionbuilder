import { ReactNode } from "react"
import type { JSX } from "react"

interface BaseIconProperties {
	children: ReactNode
	className?: string
	width: Number
	height: Number
}

export interface IconProperties {
	className?: string
}

export function Icon({ children, className, width, height }: BaseIconProperties) {
	return (
		<svg viewBox={`0 0 ${width} ${height}`} className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg">
			{children}
		</svg>
	)
}

export function AccountCircle({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={24} height={24} className={className}>
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
		</Icon>
	)
}

export function APC({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M96.962 289.6c23.244.038 43.825 15.022 51 37.13 7.175-22.1 27.766-37.064 51-37.064 23.235 0 43.826 14.965 51 37.064 7.175-22.1 27.766-37.064 51-37.064 23.235 0 43.826 14.965 51 37.064 8.08-24.967 33.042-40.42 58.992-36.515 25.95 3.904 45.262 26.016 45.638 52.255 12.316-8.64 22.722-33.47 26.31-50.18 2.25-4.978-.737-10.75-6.1-11.79l-42.28-14.16a9.24 9.24 0 0 1-3.83-1.71l-55.42-50a9.68 9.68 0 0 0-5.85-2h-261.37a16.132 16.132 0 0 0-10.51 3.9l-64.31 60.67a14 14 0 0 0-4.62 13.37L45.842 327c7.097-22.255 27.76-37.373 51.12-37.4zm206.78-59.6h58.81l24.5 21.62h-83.31zm49.21-60h-99v8.73h-39.9v16.92h-65.7v-16.92h-14.49v-32.58h26.31v-14h42.71v14h51.07v9h99zm-256 209.85a36.62 36.62 0 1 1 14.014-70.452 36.62 36.62 0 0 1 22.606 33.832c0 20.22-16.39 36.614-36.61 36.62zm102 0a36.62 36.62 0 1 1 14.014-70.452 36.62 36.62 0 0 1 22.606 33.832c0 20.186-16.334 36.565-36.52 36.62zm102 0a36.62 36.62 0 1 1 14.014-70.452 36.62 36.62 0 0 1 22.606 33.832c0 20.186-16.334 36.565-36.52 36.62zm102 0a36.62 36.62 0 1 1 14.014-70.452 36.62 36.62 0 0 1 22.606 33.832c0 20.186-16.334 36.565-36.52 36.62z"></path>
		</Icon>
	)
}

export function ArrowUp({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={256} height={256} className={className}>
			<path d="M231.39,123.06A8,8,0,0,1,224,128H184v80a16,16,0,0,1-16,16H88a16,16,0,0,1-16-16V128H32a8,8,0,0,1-5.66-13.66l96-96a8,8,0,0,1,11.32,0l96,96A8,8,0,0,1,231.39,123.06Z"></path>
		</Icon>
	)
}

export function Banner({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M279 25v30h-46V25h46zm178 35.396c3.485 1.262 7.267 2.717 11.195 4.55 5.553 2.589 10.945 5.739 14.409 8.742C486.067 76.69 487 78.936 487 80c0 1.063-.933 3.31-4.396 6.313-3.464 3.002-8.856 6.152-14.409 8.742-3.928 1.832-7.71 3.287-11.195 4.549V60.396zm-402 0v39.208c-3.485-1.262-7.267-2.717-11.195-4.55-5.553-2.589-10.945-5.739-14.409-8.742C25.933 83.31 25 81.064 25 80c0-1.063.933-3.31 4.396-6.313 3.464-3.002 8.856-6.152 14.409-8.742 3.928-1.832 7.71-3.287 11.195-4.549zM439 73v14h-46V73h46zm-64 0v291.578L256 498.453 137 364.578V73h238zm-256 0v14H73V73h46zm210 23h-18v252.844l-55 68.75-55-68.75V96h-18v259.156l73 91.25 73-91.25V96z"></path>
		</Icon>
	)
}

export function Book({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={448} height={512} className={className}>
			<path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
		</Icon>
	)
}

export function Builder({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={576} height={512} className={className}>
			<path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path>
		</Icon>
	)
}

export function Bullets({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={576} height={512} className={className}>
			<path d="M96 36.61L41.21 173.6c.26.6.84 1.4 2.15 2.5 2.16 1.8 6.2 4 11.49 5.8 10.57 3.5 25.9 5.5 41.15 5.5 15.2 0 30.6-2 41.2-5.5 5.2-1.8 9.3-4 11.4-5.8 1.3-1.2 1.9-1.9 2.2-2.5zm160 0L201.2 173.6c.3.6.9 1.3 2.2 2.5 2.1 1.8 6.2 4 11.4 5.8 10.6 3.5 26 5.5 41.2 5.5 15.3 0 30.6-2 41.2-5.5 5.2-1.8 9.3-4 11.4-5.8 1.3-1.2 1.9-1.9 2.2-2.5zm160 0L361.2 173.6c.3.6.9 1.3 2.2 2.5 2.1 1.8 6.2 4 11.4 5.8 10.6 3.5 26 5.5 41.2 5.5 15.2 0 30.6-2 41.2-5.5 5.2-1.8 9.3-4 11.4-5.8 1.3-1.2 1.9-1.9 2.2-2.5zM41 195.7v17c0 1 .2 1.8 2.36 3.7 2.16 1.8 6.2 4 11.49 5.8 10.57 3.5 25.9 5.5 41.15 5.5 15.2 0 30.6-2 41.2-5.5 5.2-1.8 9.3-4 11.4-5.8 2.2-1.9 2.4-2.7 2.4-3.7v-17c-2.6 1.2-5.3 2.3-8.2 3.2-13.4 4.5-30 6.5-46.8 6.5-16.75 0-33.42-2-46.85-6.5-2.87-.9-5.59-2-8.15-3.2zm160 0v17c0 1 .2 1.8 2.4 3.7 2.1 1.8 6.2 4 11.4 5.8 10.6 3.5 26 5.5 41.2 5.5 15.3 0 30.6-2 41.2-5.5 5.2-1.8 9.3-4 11.4-5.8 2.2-1.9 2.4-2.7 2.4-3.7v-17c-2.6 1.2-5.3 2.3-8.2 3.2-13.4 4.5-30 6.5-46.8 6.5-16.8 0-33.4-2-46.8-6.5-2.9-.9-5.6-2-8.2-3.2zm160 0v17c0 1 .2 1.8 2.4 3.7 2.1 1.8 6.2 4 11.4 5.8 10.6 3.5 26 5.5 41.2 5.5 15.2 0 30.6-2 41.2-5.5 5.2-1.8 9.3-4 11.4-5.8 2.2-1.9 2.4-2.7 2.4-3.7v-17c-2.6 1.2-5.3 2.3-8.2 3.2-13.4 4.5-30 6.5-46.8 6.5-16.8 0-33.4-2-46.8-6.5-2.9-.9-5.6-2-8.2-3.2zM41 236v158.3l17.06 34.1-16.71 33.4c.3.6.87 1.3 2.01 2.3 2.16 1.8 6.2 4 11.49 5.8 10.57 3.5 25.9 5.5 41.15 5.5 15.2 0 30.6-2 41.2-5.5 5.2-1.8 9.3-4 11.4-5.8 1.2-1 1.7-1.7 2.1-2.3l-16.8-33.4 17.1-34.1V236c-2.6 1.2-5.3 2.3-8.2 3.2-13.4 4.5-30 6.5-46.8 6.5-16.75 0-33.42-2-46.85-6.5-2.87-.9-5.59-2-8.15-3.2zm160 0v158.3l17.1 34.1-16.8 33.4c.4.6.9 1.3 2.1 2.3 2.1 1.8 6.2 4 11.4 5.8 10.6 3.5 26 5.5 41.2 5.5 15.3 0 30.6-2 41.2-5.5 5.2-1.8 9.3-4 11.4-5.8 1.2-1 1.7-1.7 2.1-2.3l-16.8-33.4 17.1-34.1V236c-2.6 1.2-5.3 2.3-8.2 3.2-13.4 4.5-30 6.5-46.8 6.5-16.8 0-33.4-2-46.8-6.5-2.9-.9-5.6-2-8.2-3.2zm160 0v158.3l17.1 34.1-16.8 33.4c.4.6.9 1.3 2.1 2.3 2.1 1.8 6.2 4 11.4 5.8 10.6 3.5 26 5.5 41.2 5.5 15.2 0 30.6-2 41.2-5.5 5.2-1.8 9.3-4 11.4-5.8 1.2-1 1.7-1.7 2.1-2.3l-16.8-33.4 17.1-34.1V236c-2.6 1.2-5.3 2.3-8.2 3.2-13.4 4.5-30 6.5-46.8 6.5-16.8 0-33.4-2-46.8-6.5-2.9-.9-5.6-2-8.2-3.2z"></path>
		</Icon>
	)
}

export function Calculator({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z"></path>
		</Icon>
	)
}

export function Cannon({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M406.4 67.25c-2.1 0-4 .8-5.7 1.9-4.3 2.9-7.6 8.4-.8 18.6l53.4 79.85c6.8 10.2 13.2 9.3 17.5 6.4 4.4-2.9 7.7-8.4.9-18.6l-53.5-79.85c-4.2-6.4-8.3-8.4-11.8-8.3zM392 108.4l-141.2 88.5c4.6 12.4 12.1 26.2 21.1 38.8l1.8 2.4a24 24 0 0 1 3.6-.3 24 24 0 0 1 22.2 15h21.6l109.2-87.2zm-156.8 98.3l-99.1 62.2c4.1 17.3 11.5 33.6 21.7 47.9h54.5v-64h42.8a24 24 0 0 1 3-5.4c-.3-.4-.6-.9-.9-1.3-9-12.6-16.7-26.1-22-39.4zm-4.9 64.1v64h-64v64h-64v46h209.1c-6.9-8.5-11.1-19.3-11.1-31 0-23.9 17.3-43.9 40-48.2v-94.8zm-110.2 8.1l-34.2 21.5c-25.6 18.3-12.3 58.4 11.54 80.4h50.86v-46.6c-12.9-16.3-22.6-35.1-28.2-55.3zm309.2 39.9c-17.2 0-31 13.8-31 31 0 5.6 1.4 10.8 4 15.3 10.7 1 20.4 5.6 28 12.5 7-6.4 16-10.8 25.9-12.3 2.6-4.5 4.1-9.8 4.1-15.5 0-17.2-13.8-31-31-31zM66.66 370.9c-3.61 4-8.24 7.8-13.57 11-11.26 6.8-25.19 11.1-35.41 11.4l.58 18c14.31-.5 30.29-5.6 44.18-14 5.38-3.3 10.5-7.1 14.96-11.5-4-4.6-7.61-9.6-10.74-14.9zm282.64 11.9c-17.2 0-31 13.8-31 31s13.8 31 31 31c3.2 0 6.2-.5 9-1.3-6.2-8.3-10-18.6-10-29.7 0-11.1 3.8-21.4 10-29.7-2.8-.8-5.8-1.3-9-1.3zm48 0c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm66 0c-8.7 0-16.5 3.5-22.1 9.2 3.2 6.6 5.1 14 5.1 21.8 0 7.8-1.9 15.2-5.1 21.8 5.6 5.7 13.4 9.2 22.1 9.2 17.2 0 31-13.8 31-31s-13.8-31-31-31z"></path>
		</Icon>
	)
}

export function CaretDown({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={24} height={24} className={className}>
			<path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
		</Icon>
	)
}

export function CaretUp({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={24} height={24} className={className}>
			<path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
		</Icon>
	)
}

export function Close({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={15} height={15} className={className}>
			<path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"></path>
		</Icon>
	)
}

export function Cog({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M234.875 18.78c-26.087 2.367-51.557 8.56-74.875 18.782 15.37 32.763 14.222 66.706-6.72 82.407-20.835 15.617-54.055 7.965-81.124-15.69-16.246 19.452-29.336 41.36-38.875 65.626 33.83 12.333 56.635 37.665 52.94 63.5-3.698 25.835-32.697 43.74-68.626 46.094 2.338 25.796 8.91 50.778 18.937 73.875 17.81-8.182 35.793-11.09 51.095-8.938 13.032 1.87 23.927 7.015 31.156 16.657 15.817 21.097 7.603 54.713-16.78 81.97 19.516 16.35 42.216 29.444 66.594 39.03 12.33-33.828 37.655-56.634 63.5-52.938 25.844 3.697 43.74 32.696 46.094 68.625 26.087-2.365 51.557-8.555 74.875-18.78-15.766-32.997-14.26-67.588 6.843-83.406 9.64-7.23 22.568-9.022 35.594-7.125 15.112 2.16 31.19 10.25 45.563 22.78 16.088-19.345 29.4-41.51 38.875-65.594-33.83-12.332-56.635-37.653-52.938-63.5 3.697-25.846 32.665-43.772 68.594-46.125-2.36-25.944-8.774-50.663-18.906-73.874-32.612 15.117-66.66 13.145-82.282-7.687-15.696-20.944-7.252-53.86 16.688-81-19.52-16.352-42.248-29.447-66.625-39.032-12.332 33.828-37.657 56.66-63.5 52.968-25.846-3.693-43.744-32.696-46.095-68.625zm21.656 95.126c79.626 0 144.376 64.752 144.376 144.375 0 79.626-64.75 144.376-144.375 144.376-79.624 0-144.374-64.75-144.374-144.375 0-79.624 64.75-144.374 144.375-144.374zm0 18.688c-69.524 0-125.686 56.162-125.686 125.687 0 69.526 56.162 125.69 125.687 125.69 69.526 0 125.69-56.164 125.69-125.69 0-69.522-56.164-125.686-125.69-125.686zm.033 15.125c61.094 0 110.625 49.53 110.625 110.624 0 61.095-49.53 110.625-110.625 110.625s-110.625-49.53-110.625-110.626c0-61.095 49.53-110.625 110.625-110.625z"></path>
		</Icon>
	)
}

export function Exchange({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path>
		</Icon>
	)
}

export function GothicCross({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M257.635 19.707L235.02 57.67h45.228l-22.613-37.963zm-105.03 56.658v23.703H362.67V76.365H152.604zm41.375 42.4c18.588 20.862 30.24 45.644 38.967 72.128 4.876-1.883 10.014-3.222 15.344-3.952v-50.57h18.69v50.567c5.24.716 10.297 2.02 15.1 3.85 8.63-26.39 20.246-51.114 39.008-72.023H193.98zM78.898 150.21V360.25h23.657V150.21H78.898zm333.823 0V360.25h23.657V150.21H412.72zm-18.695 41.31c-20.847 18.572-45.605 30.22-72.064 38.945 1.89 4.88 3.24 10.02 3.974 15.357h50.498v18.69h-50.48c-.713 5.252-2.014 10.318-3.847 15.13 26.352 8.627 51.038 20.234 71.92 38.967V191.52zm-272.775.01v127.075c20.888-18.737 45.58-30.343 71.938-38.97-1.832-4.81-3.132-9.874-3.844-15.123h-50.506v-18.69h50.523c.736-5.334 2.083-10.474 3.972-15.35-26.465-8.725-51.23-20.37-72.082-38.94zm136.408 13.532c-27.628 0-50.226 22.598-50.226 50.227 0 27.627 22.598 50.224 50.226 50.224s50.225-22.597 50.225-50.225c0-27.63-22.597-50.227-50.225-50.227zm0 18.69c17.528 0 31.535 14.01 31.535 31.537 0 17.526-14.007 31.534-31.535 31.534-17.527 0-31.537-14.008-31.537-31.535 0-17.53 14.01-31.538 31.538-31.538zm-197.455 8.762l-38.03 22.654 38.03 22.652v-45.306zm394.87.004v45.298l38.023-22.648-38.024-22.65zM232.907 319.56c-8.72 26.427-20.358 51.154-38.902 71.98h127.056c-18.717-20.87-30.32-45.54-38.943-71.872-4.815 1.84-9.883 3.148-15.138 3.865v50.43h-18.687V323.53c-5.346-.732-10.498-2.078-15.387-3.97zm-80.304 90.674v23.704h210.068v-23.704H152.604zm82.4 42.4l22.63 37.993 22.634-37.994h-45.264z"></path>
		</Icon>
	)
}

export function Knight({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M255.406 17.75C189.313 39.42 124.536 85.124 79.03 150.344c21.238 57.44 32.72 94.314 32.72 131.375 0 36.493-11.52 73.723-32.125 129.655 49.72 36.73 100.08 58.95 150.313 64.938-5.052-60.378-9.83-120.748 1.593-181.125-30.644-3.28-61.384-13.286-92.03-30.72v-71.312c80.67 42.255 158.908 41.547 242.063 0v71.313c-30.06 14.376-60.192 24.722-90.25 29.28 8.684 60.46 7.723 120.915 2.03 181.375 46.386-7.335 92.89-28.824 139.032-64.312-33.966-112.954-34.03-145.933.594-260.47C391.162 84.844 317.924 39.89 255.405 17.75zm-75.125 212c-11.16-.13-19.646 3.174-21.25 9.156-2.33 8.7 10.778 19.76 29.282 24.72 18.505 4.957 35.388 1.92 37.72-6.782 2.33-8.7-10.775-19.76-29.282-24.72-5.783-1.55-11.396-2.315-16.47-2.374zm160.69 0c-5.074.06-10.687.825-16.47 2.375-18.507 4.96-31.613 16.018-29.28 24.72 2.33 8.7 19.213 11.738 37.717 6.78 18.505-4.958 31.613-16.018 29.282-24.72-1.604-5.98-10.09-9.286-21.25-9.155z"></path>
		</Icon>
	)
}

export function JetFighter({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M461.5 31.85c-5 1.2-10.4 3.4-16.4 6.4-12 6-26.7 15.3-42.1 26.1-26.7 18.7-55.5 41.75-75 59.95l39.8 19.9 19.9 39.8c18.2-19.5 41.2-48.3 59.9-75 10.8-15.35 20.1-30.05 26.2-42.15 3-6 5.2-11.3 6.3-16.3 1.2-5 1.9-10.9-2.9-15.7-4.8-4.56-10-4.25-15.7-3zm-14.8 33.4c4.9 4.71 5.6 12.1 3.8 18.7-1.8 6.6-6.1 13.3-12.9 20.15l-42.2 42.2-29.6-29.7L408 74.45c6.8-6.8 13.5-11.06 20.1-12.9 6.1-1.71 14.3-.44 18.6 3.7zM183.2 109.5l-21.3 21.2 45.6 5v-26.2zm129.9 25.2l-43.5 21.8-153 200.1 13.7 13.8 97.5-97.5 11.3 11.3c-32.5 32.5-65 65.1-97.5 97.6l13.8 13.6 200.1-153 21.8-43.5-21.4-42.8zm-256.59.4l7.4 22.2 120.99 83.5 64.5-84.3zm38.1 62.8l-13.1 13.2 24.39 24.3 17.6-17.5zm260.89 64.7l-84.3 64.5 83.5 121 22.2 7.3zm-190.9 4.8l-110.99 9.1-22.6 22.6 82.39 35.4zm212.1 41.2l4.6 41.5 17.1-17.2v-24.3zm-132.1 38.8l-67 51.2 35.3 82.4 22.6-22.6zm-138.7 21.2l-13.09 13.1 37.49 37.4 13.1-13zm188.2 19.9l-17.5 17.6 24.3 24.3 13.2-13.1z"></path>
		</Icon>
	)
}

export function Lists({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"></path>
		</Icon>
	)
}

export function Loader({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={24} height={24} className={className}>
			<path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path>
		</Icon>
	)
}

export function Login({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={24} height={24} className={className}>
			<path d="M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"></path>
		</Icon>
	)
}

export function Logout({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={24} height={24} className={className}>
			<path fill="none" d="M0 0h24v24H0z"></path>
			<path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
		</Icon>
	)
}

export function ManageAccount({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={24} height={24} className={className}>
			<path fill="none" d="M0 0h24v24H0V0z"></path>
			<circle cx="10" cy="8" r="4"></circle>
			<path d="M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26a6.963 6.963 0 01-.59-6.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
		</Icon>
	)
}

export function Menu({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
		</Icon>
	)
}

export function SentryGun({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M94 67.656v78.094h124.063V67.656H94zm-74.156 49.5v75.875l97.78 98.032h144.44l-.002-173.906H236.75V164.438H75.312V117.155H19.844zM280.75 136.03v89.407h99l-46.625 46.75H280.75v18.688h60.125l2.75-2.75 58.625-58.78 2.72-2.72v-1.188h.342V136.03H280.75zM424 154.407v51.75h68.53v-51.75H424zM165.906 309.75c.198 13.433 5.876 25.525 14.938 34.125L115.75 429.97c-25.832 2.44-47.42 20.308-56.97 45.217h126.064c-8.29-21.625-25.665-37.942-47-43.468l23.125-30.564h101.31l23.095 30.563c-21.332 5.527-38.68 21.844-46.97 43.467h126.032c-9.546-24.906-31.11-42.775-56.937-45.218l-63.28-83.658c10.65-8.667 17.47-21.81 17.686-36.562h-96zm30.813 44.156c5.34 2.05 11.124 3.156 17.186 3.156 4.702 0 9.237-.678 13.53-1.937l20.69 27.344h-73l21.593-28.564z"></path>
		</Icon>
	)
}

export function Shield({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M53.156 25.78c30.55 26.034 52.813 95.137 52.813 176.47 0 44.36-6.922 84.657-17.814 116.688 31.134 71.43 85.946 122.39 179.906 175.28 91.558-48.747 144.024-96.565 173.75-167.593-12.5-33.06-20.28-76.47-20.28-124.375 0-81.333 22.262-150.436 52.812-176.47-41.924 9.324-83.858 16.318-125.78 20.595L277.904 181.72l46.47 20.655L209.312 391.72l41.468-169.595-22.53-10.25-71.375 19.938 59.406-50.22L259.938 51.22c-68.92.347-137.86-7.508-206.78-25.44z"></path>
		</Icon>
	)
}

export function Skull({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M256 16C141.31 16 48 109.31 48 224v154.83l82 32.81L146.88 496H192v-64h32v64h16v-64h32v64h16v-64h32v64h45.12L382 411.64l82-32.81V224c0-114.69-93.31-208-208-208zm-88 320a56 56 0 1156-56 56.06 56.06 0 01-56 56zm51.51 64L244 320h24l24.49 80zM344 336a56 56 0 1156-56 56.06 56.06 0 01-56 56zm104 32z"></path>
		</Icon>
	)
}

export function Tank({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M130.613 43.002v66.926c-22.925 19.7-38.03 48.177-40.533 80.252h234.51c-2.666-34.175-19.637-64.265-45.133-84.006H149.303V43.002h-18.69zM472.62 58.738L431.09 69.865l16.504 61.588 41.525-11.127-16.5-61.588zm-54.042 36.627l-98.787 26.47c5.382 7.835 9.97 16.256 13.647 25.15l92.342-24.745-7.202-26.875zM121.53 206.342l-78.364 37.045.002 50.3 18.207-7.556H442.11l19.316 6.413c0-51.397-119.076-83.53-183.166-86.2H121.53zm-38.17 97.88v.038c-35.936.645-65.065 30.15-65.065 66.232 0 36.484 29.777 66.26 66.262 66.26 1.286 0 2.563-.046 3.832-.12h106.473c1.27.074 2.545.12 3.832.12s2.563-.046 3.832-.12h107.34c1.27.074 2.545.12 3.832.12 1.286 0 2.562-.046 3.83-.12H423.7c1.268.074 2.544.12 3.83.12 36.486 0 66.263-29.776 66.263-66.26 0-36.485-29.777-66.262-66.262-66.262-.276 0-.55.02-.827.022v-.03H83.36zm47.2 18.686h22.13c-4.283 4.144-8.012 8.855-11.063 14.014-3.05-5.16-6.78-9.87-11.066-14.014zm114.14 0h22.995c-4.49 4.344-8.37 9.313-11.498 14.766-3.13-5.453-7.006-10.422-11.498-14.766zm115.003 0h21.824c-4.21 4.074-7.89 8.692-10.912 13.748-3.022-5.056-6.7-9.674-10.912-13.748zm-275.146.012c26.385 0 47.572 21.187 47.572 47.572 0 25.293-19.477 45.798-44.333 47.45H83.36v.09c-25.825-.63-46.378-21.558-46.378-47.54 0-26.383 21.19-47.572 47.575-47.572zm114.138 0c26.386 0 47.573 21.187 47.573 47.572 0 25.293-19.476 45.798-44.332 47.45h-6.48c-24.858-1.652-44.335-22.157-44.335-47.45 0-26.383 21.19-47.572 47.575-47.572zm115.004 0c26.372 0 47.548 21.166 47.57 47.533v.078c-.02 25.276-19.487 45.76-44.33 47.413h-6.48c-24.858-1.653-44.335-22.158-44.335-47.45 0-26.384 21.19-47.573 47.574-47.573zm113.83 0c26.387 0 47.575 21.187 47.575 47.572 0 26.383-21.188 47.572-47.574 47.572-.277 0-.55-.016-.827-.02v-.1h-2.412c-24.843-1.653-44.31-22.138-44.33-47.413v-.078c.022-26.364 21.2-47.532 47.57-47.532zm-171.333 80.39c3.098 5.398 6.928 10.32 11.362 14.633h-22.724c4.434-4.312 8.264-9.235 11.36-14.632zm-114.572.75c3.02 5.106 6.702 9.77 10.93 13.883h-21.858c4.228-4.112 7.91-8.778 10.928-13.882zm228.99.266c2.99 5.002 6.62 9.576 10.776 13.617h-21.55c4.155-4.04 7.786-8.615 10.775-13.617z"></path>
		</Icon>
	)
}

export function TankTread({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M225.691 394.74a91.308 91.308 0 1 0-91.308-91.309 91.308 91.308 0 0 0 91.308 91.308zm0-132.663a41.345 41.345 0 1 1-41.344 41.345 41.392 41.392 0 0 1 41.344-41.345zm-13.778 41.345a13.778 13.778 0 1 1 13.778 13.759 13.797 13.797 0 0 1-13.788-13.75zm160.047-73.068a52.056 52.056 0 1 0-52.056-52.056 52.056 52.056 0 0 0 52.056 52.056zm0-75.628a23.572 23.572 0 1 1-23.572 23.572 23.6 23.6 0 0 1 23.572-23.553zm-7.854 23.572a7.854 7.854 0 1 1 7.854 7.855 7.864 7.864 0 0 1-7.864-7.855zm114.106 1.357v-1.022-.134a103.194 103.194 0 0 0-2.962-31.684l14.839-3.67A122.304 122.304 0 0 0 464.29 93.46l-11.485 9.976a103.749 103.749 0 0 0-22.483-19.645c-.84-.545-1.7-1.061-2.56-1.577l7.892-13.1a117.527 117.527 0 0 0-53.757-16.664l-.955 15.288v.163c-2.322-.153-4.654-.077-7.004-.077H350.06V52.506h-45.864v15.288h-30.577V52.506h-45.864v15.288H197.18V52.506h-45.864v15.288h-30.576V52.506H74.875v15.288H44.299V52.506H18.5v46.82h355.38c28.666 0 53.28 14.916 65.93 39.892a73.335 73.335 0 0 1 7.95 38.22v.44a71.959 71.959 0 0 1-10.682 32.487c-25.216 40.963-68.386 96.305-113.82 155.002a153.97 153.97 0 0 1-20.018 21.566 122.304 122.304 0 0 1-75.246 25.798H18.5v31.532h10.51v15.288h45.865v-15.288h30.576v15.288h45.864v-15.288h30.576v15.288h45.864v-15.498a145.762 145.762 0 0 0 21.824-1.615h.153l2.236 15.145a163.812 163.812 0 0 0 50.565-16.13l-6.975-13.682a149.794 149.794 0 0 0 26.916-17.59l9.737 11.857a164.146 164.146 0 0 0 28.025-29.554l6.364-8.6-12.317-9.058 18.155-24.623 12.25 9.02 27.183-36.94-12.316-9.058 18.154-24.623 12.317 9.058 27.146-36.95-12.317-9.058 13.177-17.839a107.215 107.215 0 0 0 5.035-7.51l13.033 8.026a117.336 117.336 0 0 0 17.4-53.575zm-231.853 232.37a118.148 118.148 0 0 0 35.287-11.467 117.986 117.986 0 0 1-35.287 11.466zM18.5 394.73v-49.964a41.392 41.392 0 0 0 40.924-41.335A41.392 41.392 0 0 0 18.5 262.096v-49.973a91.308 91.308 0 0 1 90.888 91.308A91.308 91.308 0 0 1 18.5 394.73zm0-77.55v-27.518a13.788 13.788 0 0 1 13.377 13.76A13.788 13.788 0 0 1 18.5 317.18z"></path>
		</Icon>
	)
}

export function Tower({ className }: IconProperties): JSX.Element {
	return (
		<Icon width={512} height={512} className={className}>
			<path d="M97.812 23.375v92.875l46.22 51.72V351h-25.845L94.594 491.906H414.53L390.938 351h-25.875V167.97l46.22-51.72V23.375h-53.938v43.97H324.5v-43.97h-53.938v43.97h-32.437v-43.97h-53.938v43.97H151.75v-43.97H97.812zm73.75 152.875h18.688v50.22h-18.688v-50.22zm73.594 0h18.688v50.22h-18.688v-50.22zm74.156 0H338v50.22h-18.688v-50.22z"></path>
		</Icon>
	)
}

const Icons: { [key: string]: ({ className }: IconProperties) => JSX.Element } = {
	account: AccountCircle,
	manageAccount: ManageAccount,
	banner: Banner,
	book: Book,
	builder: Builder,
	lists: Lists,
	login: Login,
	logout: Logout,
	sentryGun: SentryGun,
	skull: Skull,
	tank: Tank,
	calculator: Calculator,
	exchange: Exchange,
}

export default Icons
