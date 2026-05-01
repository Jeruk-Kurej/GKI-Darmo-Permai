import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tentang-kami'
*/
const Controllercaa0ac59a54ac8054bbfb3b32db74b70 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllercaa0ac59a54ac8054bbfb3b32db74b70.url(options),
    method: 'get',
})

Controllercaa0ac59a54ac8054bbfb3b32db74b70.definition = {
    methods: ["get","head"],
    url: '/tentang-kami',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tentang-kami'
*/
Controllercaa0ac59a54ac8054bbfb3b32db74b70.url = (options?: RouteQueryOptions) => {
    return Controllercaa0ac59a54ac8054bbfb3b32db74b70.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tentang-kami'
*/
Controllercaa0ac59a54ac8054bbfb3b32db74b70.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllercaa0ac59a54ac8054bbfb3b32db74b70.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tentang-kami'
*/
Controllercaa0ac59a54ac8054bbfb3b32db74b70.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllercaa0ac59a54ac8054bbfb3b32db74b70.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tentang-kami'
*/
const Controllercaa0ac59a54ac8054bbfb3b32db74b70Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllercaa0ac59a54ac8054bbfb3b32db74b70.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tentang-kami'
*/
Controllercaa0ac59a54ac8054bbfb3b32db74b70Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllercaa0ac59a54ac8054bbfb3b32db74b70.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tentang-kami'
*/
Controllercaa0ac59a54ac8054bbfb3b32db74b70Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllercaa0ac59a54ac8054bbfb3b32db74b70.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllercaa0ac59a54ac8054bbfb3b32db74b70.form = Controllercaa0ac59a54ac8054bbfb3b32db74b70Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/ibadah'
*/
const Controller05d51cd1fea0aaa330d8c8fd0b00707a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller05d51cd1fea0aaa330d8c8fd0b00707a.url(options),
    method: 'get',
})

Controller05d51cd1fea0aaa330d8c8fd0b00707a.definition = {
    methods: ["get","head"],
    url: '/ibadah',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/ibadah'
*/
Controller05d51cd1fea0aaa330d8c8fd0b00707a.url = (options?: RouteQueryOptions) => {
    return Controller05d51cd1fea0aaa330d8c8fd0b00707a.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/ibadah'
*/
Controller05d51cd1fea0aaa330d8c8fd0b00707a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller05d51cd1fea0aaa330d8c8fd0b00707a.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/ibadah'
*/
Controller05d51cd1fea0aaa330d8c8fd0b00707a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller05d51cd1fea0aaa330d8c8fd0b00707a.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/ibadah'
*/
const Controller05d51cd1fea0aaa330d8c8fd0b00707aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller05d51cd1fea0aaa330d8c8fd0b00707a.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/ibadah'
*/
Controller05d51cd1fea0aaa330d8c8fd0b00707aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller05d51cd1fea0aaa330d8c8fd0b00707a.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/ibadah'
*/
Controller05d51cd1fea0aaa330d8c8fd0b00707aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller05d51cd1fea0aaa330d8c8fd0b00707a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller05d51cd1fea0aaa330d8c8fd0b00707a.form = Controller05d51cd1fea0aaa330d8c8fd0b00707aForm
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/hubungi-kami'
*/
const Controllerb2ad1919cc156958282f0facf292d011 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerb2ad1919cc156958282f0facf292d011.url(options),
    method: 'get',
})

Controllerb2ad1919cc156958282f0facf292d011.definition = {
    methods: ["get","head"],
    url: '/hubungi-kami',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/hubungi-kami'
*/
Controllerb2ad1919cc156958282f0facf292d011.url = (options?: RouteQueryOptions) => {
    return Controllerb2ad1919cc156958282f0facf292d011.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/hubungi-kami'
*/
Controllerb2ad1919cc156958282f0facf292d011.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerb2ad1919cc156958282f0facf292d011.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/hubungi-kami'
*/
Controllerb2ad1919cc156958282f0facf292d011.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerb2ad1919cc156958282f0facf292d011.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/hubungi-kami'
*/
const Controllerb2ad1919cc156958282f0facf292d011Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerb2ad1919cc156958282f0facf292d011.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/hubungi-kami'
*/
Controllerb2ad1919cc156958282f0facf292d011Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerb2ad1919cc156958282f0facf292d011.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/hubungi-kami'
*/
Controllerb2ad1919cc156958282f0facf292d011Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerb2ad1919cc156958282f0facf292d011.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllerb2ad1919cc156958282f0facf292d011.form = Controllerb2ad1919cc156958282f0facf292d011Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/{current_team}/dashboard'
*/
const Controller7c56b49c1afb48e6321cba0b75b6ac61 = (args: { current_team: string | number } | [current_team: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller7c56b49c1afb48e6321cba0b75b6ac61.url(args, options),
    method: 'get',
})

Controller7c56b49c1afb48e6321cba0b75b6ac61.definition = {
    methods: ["get","head"],
    url: '/{current_team}/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/{current_team}/dashboard'
*/
Controller7c56b49c1afb48e6321cba0b75b6ac61.url = (args: { current_team: string | number } | [current_team: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { current_team: args }
    }

    if (Array.isArray(args)) {
        args = {
            current_team: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        current_team: args.current_team,
    }

    return Controller7c56b49c1afb48e6321cba0b75b6ac61.definition.url
            .replace('{current_team}', parsedArgs.current_team.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/{current_team}/dashboard'
*/
Controller7c56b49c1afb48e6321cba0b75b6ac61.get = (args: { current_team: string | number } | [current_team: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller7c56b49c1afb48e6321cba0b75b6ac61.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/{current_team}/dashboard'
*/
Controller7c56b49c1afb48e6321cba0b75b6ac61.head = (args: { current_team: string | number } | [current_team: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller7c56b49c1afb48e6321cba0b75b6ac61.url(args, options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/{current_team}/dashboard'
*/
const Controller7c56b49c1afb48e6321cba0b75b6ac61Form = (args: { current_team: string | number } | [current_team: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7c56b49c1afb48e6321cba0b75b6ac61.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/{current_team}/dashboard'
*/
Controller7c56b49c1afb48e6321cba0b75b6ac61Form.get = (args: { current_team: string | number } | [current_team: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7c56b49c1afb48e6321cba0b75b6ac61.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/{current_team}/dashboard'
*/
Controller7c56b49c1afb48e6321cba0b75b6ac61Form.head = (args: { current_team: string | number } | [current_team: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7c56b49c1afb48e6321cba0b75b6ac61.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller7c56b49c1afb48e6321cba0b75b6ac61.form = Controller7c56b49c1afb48e6321cba0b75b6ac61Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url = (options?: RouteQueryOptions) => {
    return Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.form = Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form

const Controller = {
    '/tentang-kami': Controllercaa0ac59a54ac8054bbfb3b32db74b70,
    '/ibadah': Controller05d51cd1fea0aaa330d8c8fd0b00707a,
    '/hubungi-kami': Controllerb2ad1919cc156958282f0facf292d011,
    '/{current_team}/dashboard': Controller7c56b49c1afb48e6321cba0b75b6ac61,
    '/settings/appearance': Controllere19ee86e9cf603ce1a59a1ec5d21dec5,
}

export default Controller