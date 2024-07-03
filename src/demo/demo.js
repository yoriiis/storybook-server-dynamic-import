// If the module is imported not dynamically, there is no errors
// import './module.js'

console.log('demo loaded')

/* webpackChunkName: "dynamic-import" */
// If the module is dynamically imported,  it will trigger an infinite preview reload in the Storybook
import ('./module.js').then(response => {
    console.log(response)
})
