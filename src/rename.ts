
export const toClass    = toPascalCase
export const toColumn   = toSnakeCase
export const toCssClass = toKebabCase
export const toCssId    = toKebabCase
export const toField    = toSnakeCase
export const toFunction = toCamelCase
export const toMethod   = toCamelCase
export const toProperty = toCamelCase
export const toRoute    = toKebabCase
export const toUrl      = toKebabCase
export const toVariable = toCamelCase

export function lcFirst(string: string)
{
	return string[0].toLowerCase() + string.slice(1)
}

export function toCamelCase(string: string)
{
	return string[0].toLowerCase() + string.slice(1)
		.replace(/[ _-](a-zA-Z0-9)/g, (_, high: string) => high.toUpperCase())
}

export function toDisplay(string: string)
{
	return string[0].toLowerCase() + string.slice(1)
		.replace(/[_-]/g, ' ')
		.replace(/([a-z0-9])([A-Z])/g, (_, low: string, high: string) => low + ' ' + high.toLowerCase())
}

export function toKebabCase(string: string)
{
	return string[0].toLowerCase() + string.slice(1)
		.replace(/[ _]/g, '-')
		.replace(/([a-z0-9])([A-Z])/g, (_, low: string, high: string) => low + '-' + high.toLowerCase())
}

export function toPascalCase(string: string)
{
	return string[0].toUpperCase() + string.slice(1)
		.replace(/[ _-]([a-zA-Z0-9])/g, (_, high: string) => high.toUpperCase())
}

export function toSnakeCase(string: string)
{
	return string[0].toLowerCase() + string.slice(1)
		.replace(/[ -]/g, '_')
		.replace(/([a-z0-9])([A-Z])/g, (_, low: string, high: string) => low + '_' + high.toLowerCase())
}

export function ucFirst(string: string)
{
	return string[0].toUpperCase() + string.slice(1)
}

export class Str extends String
{

	camelCase()  { return toCamelCase(this + '') }
	kebabCase()  { return toKebabCase(this + '') }
	lcFirst()    { return lcFirst(this + '') }
	pascalCase() { return toPascalCase(this + '') }
	snakeCase()  { return toSnakeCase(this + '') }
	toClass()    { return toClass(this + '') }
	toColumn()   { return toColumn(this + '') }
	toCssClass() { return toCssClass(this + '') }
	toCssId()    { return toCssId(this + '') }
	toDisplay()  { return toDisplay(this + '') }
	toField()    { return toField(this + '') }
	toFunction() { return toFunction(this + '') }
	toMethod()   { return toMethod(this + '') }
	toProperty() { return toProperty(this + '') }
	toRoute()    { return toRoute(this + '') }
	toUrl()      { return toUrl(this + '') }
	toVariable() { return toVariable(this + '') }
	ucFirst()    { return ucFirst(this + '') }

}
