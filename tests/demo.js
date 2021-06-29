/**
    const secureTransition: (checks: any)
     => (transitionName: any, params: any) => string
 */
const secureTransition = (checks) => {
    return (transitionName, params) => {
        return `transition ${transitionName}(${params})
${checks}`
    }
}

module.exports = secureTransition