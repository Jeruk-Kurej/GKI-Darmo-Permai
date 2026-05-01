import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\BulletinController::index
* @see app/Http/Controllers/Admin/BulletinController.php:13
* @route '/admin/bulletins'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/bulletins',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BulletinController::index
* @see app/Http/Controllers/Admin/BulletinController.php:13
* @route '/admin/bulletins'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BulletinController::index
* @see app/Http/Controllers/Admin/BulletinController.php:13
* @route '/admin/bulletins'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BulletinController::index
* @see app/Http/Controllers/Admin/BulletinController.php:13
* @route '/admin/bulletins'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BulletinController::index
* @see app/Http/Controllers/Admin/BulletinController.php:13
* @route '/admin/bulletins'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BulletinController::index
* @see app/Http/Controllers/Admin/BulletinController.php:13
* @route '/admin/bulletins'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BulletinController::index
* @see app/Http/Controllers/Admin/BulletinController.php:13
* @route '/admin/bulletins'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Admin\BulletinController::store
* @see app/Http/Controllers/Admin/BulletinController.php:21
* @route '/admin/bulletins'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/bulletins',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\BulletinController::store
* @see app/Http/Controllers/Admin/BulletinController.php:21
* @route '/admin/bulletins'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BulletinController::store
* @see app/Http/Controllers/Admin/BulletinController.php:21
* @route '/admin/bulletins'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BulletinController::store
* @see app/Http/Controllers/Admin/BulletinController.php:21
* @route '/admin/bulletins'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BulletinController::store
* @see app/Http/Controllers/Admin/BulletinController.php:21
* @route '/admin/bulletins'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\BulletinController::update
* @see app/Http/Controllers/Admin/BulletinController.php:39
* @route '/admin/bulletins/{bulletin}'
*/
export const update = (args: { bulletin: number | { id: number } } | [bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/bulletins/{bulletin}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\BulletinController::update
* @see app/Http/Controllers/Admin/BulletinController.php:39
* @route '/admin/bulletins/{bulletin}'
*/
update.url = (args: { bulletin: number | { id: number } } | [bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { bulletin: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { bulletin: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            bulletin: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        bulletin: typeof args.bulletin === 'object'
        ? args.bulletin.id
        : args.bulletin,
    }

    return update.definition.url
            .replace('{bulletin}', parsedArgs.bulletin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BulletinController::update
* @see app/Http/Controllers/Admin/BulletinController.php:39
* @route '/admin/bulletins/{bulletin}'
*/
update.post = (args: { bulletin: number | { id: number } } | [bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BulletinController::update
* @see app/Http/Controllers/Admin/BulletinController.php:39
* @route '/admin/bulletins/{bulletin}'
*/
const updateForm = (args: { bulletin: number | { id: number } } | [bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BulletinController::update
* @see app/Http/Controllers/Admin/BulletinController.php:39
* @route '/admin/bulletins/{bulletin}'
*/
updateForm.post = (args: { bulletin: number | { id: number } } | [bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Admin\BulletinController::destroy
* @see app/Http/Controllers/Admin/BulletinController.php:62
* @route '/admin/bulletins/{bulletin}'
*/
export const destroy = (args: { bulletin: number | { id: number } } | [bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/bulletins/{bulletin}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\BulletinController::destroy
* @see app/Http/Controllers/Admin/BulletinController.php:62
* @route '/admin/bulletins/{bulletin}'
*/
destroy.url = (args: { bulletin: number | { id: number } } | [bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { bulletin: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { bulletin: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            bulletin: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        bulletin: typeof args.bulletin === 'object'
        ? args.bulletin.id
        : args.bulletin,
    }

    return destroy.definition.url
            .replace('{bulletin}', parsedArgs.bulletin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BulletinController::destroy
* @see app/Http/Controllers/Admin/BulletinController.php:62
* @route '/admin/bulletins/{bulletin}'
*/
destroy.delete = (args: { bulletin: number | { id: number } } | [bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\BulletinController::destroy
* @see app/Http/Controllers/Admin/BulletinController.php:62
* @route '/admin/bulletins/{bulletin}'
*/
const destroyForm = (args: { bulletin: number | { id: number } } | [bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BulletinController::destroy
* @see app/Http/Controllers/Admin/BulletinController.php:62
* @route '/admin/bulletins/{bulletin}'
*/
destroyForm.delete = (args: { bulletin: number | { id: number } } | [bulletin: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const bulletins = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default bulletins