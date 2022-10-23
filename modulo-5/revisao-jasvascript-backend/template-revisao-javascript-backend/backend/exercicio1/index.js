const tempeConverter = (tempe, scale) => {
    if (scale === 'F') {
        const results = ((tempe * 1.8) + 32)
        console.log(`${tempe}º C é igual a ${results}º ${scale}`)
    } else if ((scale === 'K')) {
        const result = (tempe + 273.15)
        console.log(`${tempe}º C é igual a ${result}º ${scale}`)
    }
}

tempeConverter(18, 'F')
tempeConverter(21, 'K')
