
export function lcFirst(string: string)
{
	return string[0].toLowerCase() + string.slice(1)
}

export function toClass(string: string)
{
	return string[0].toUpperCase() + string.slice(1)
		.replace(/[ _-]([a-zA-Z0-9])/g, (_, high: string) => high.toUpperCase())
}

export function toColumn(string: string)
{
	return string[0].toLowerCase() + string.slice(1)
		.replace(/[ -]/g, '_')
		.replace(/([a-z0-9])([A-Z])/g, (_, low: string, high: string) => low + '_' + high.toLowerCase())
}

export function toDisplay(string: string)
{
	return string[0].toLowerCase() + string.slice(1)
		.replace(/[_-]/g, ' ')
		.replace(/([a-z0-9])([A-Z])/g, (_, low: string, high: string) => low + ' ' + high.toLowerCase())
}

export function toRoute(string: string)
{
	return string[0].toLowerCase() + string.slice(1)
		.replace(/[ _]/g, '-')
		.replace(/([a-z0-9])([A-Z])/g, (_, low: string, high: string) => low + '-' + high.toLowerCase())
}

export function toVariable(string: string)
{
	return string[0].toLowerCase() + string.slice(1)
		.replace(/[ _-](a-zA-Z0-9)/g, (_, high: string) => high.toUpperCase())
}

export function ucFirst(string: string)
{
	return string[0].toUpperCase() + string.slice(1)
}

export class Str extends String
{

	lcFirst()    { return lcFirst(this + '')    }
	toClass()    { return toClass(this + '')    }
	toColumn()   { return toColumn(this + '')   }
	toDisplay()  { return toDisplay(this + '')  }
	toRoute()    { return toRoute(this + '')    }
	toVariable() { return toVariable(this + '') }
	ucFirst()    { return ucFirst(this + '')    }

}
