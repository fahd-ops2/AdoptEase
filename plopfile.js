module.exports = function (plop) {
    // Component generator
    plop.setGenerator('component', {
        description: 'Create a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name:',
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/app/components/{{pascalCase name}}.js',
                templateFile: 'plop-templates/Component.js.hbs',
            },
        ],
    });

    // Service generator
    plop.setGenerator('service', {
        description: 'Create a new service class',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Service class name:',
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/services/app/{{camelCase name}}Service.js',
                templateFile: 'plop-templates/Service.js.hbs',
            },
        ],
    });
};
