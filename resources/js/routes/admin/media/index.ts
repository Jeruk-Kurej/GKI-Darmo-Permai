import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\MediaItemController::index
* @see app/Http/Controllers/Admin/MediaItemController.php:13
* @route '/admin/media'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MediaItemController::index
* @see app/Http/Controllers/Admin/MediaItemController.php:13
* @route '/admin/media'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MediaItemController::index
* @see app/Http/Controllers/Admin/MediaItemController.php:13
* @route '/admin/media'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MediaItemController::index
* @see app/Http/Controllers/Admin/MediaItemController.php:13
* @route '/admin/media'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\MediaItemController::index
* @see app/Http/Controllers/Admin/MediaItemController.php:13
* @route '/admin/media'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MediaItemController::index
* @see app/Http/Controllers/Admin/MediaItemController.php:13
* @route '/admin/media'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MediaItemController::index
* @see app/Http/Controllers/Admin/MediaItemController.php:13
* @route '/admin/media'
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
* @see \App\Http\Controllers\Admin\MediaItemController::store
* @see app/Http/Controllers/Admin/MediaItemController.php:21
* @route '/admin/media'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/media',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MediaItemController::store
* @see app/Http/Controllers/Admin/MediaItemController.php:21
* @route '/admin/media'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MediaItemController::store
* @see app/Http/Controllers/Admin/MediaItemController.php:21
* @route '/admin/media'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MediaItemController::store
* @see app/Http/Controllers/Admin/MediaItemController.php:21
* @route '/admin/media'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MediaItemController::store
* @see app/Http/Controllers/Admin/MediaItemController.php:21
* @route '/admin/media'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\MediaItemController::update
* @see app/Http/Controllers/Admin/MediaItemController.php:43
* @route '/admin/media/{mediaItem}'
*/
export const update = (args: { mediaItem: number | { id: number } } | [mediaItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/media/{mediaItem}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MediaItemController::update
* @see app/Http/Controllers/Admin/MediaItemController.php:43
* @route '/admin/media/{mediaItem}'
*/
update.url = (args: { mediaItem: number | { id: number } } | [mediaItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mediaItem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { mediaItem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            mediaItem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        mediaItem: typeof args.mediaItem === 'object'
        ? args.mediaItem.id
        : args.mediaItem,
    }

    return update.definition.url
            .replace('{mediaItem}', parsedArgs.mediaItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MediaItemController::update
* @see app/Http/Controllers/Admin/MediaItemController.php:43
* @route '/admin/media/{mediaItem}'
*/
update.post = (args: { mediaItem: number | { id: number } } | [mediaItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MediaItemController::update
* @see app/Http/Controllers/Admin/MediaItemController.php:43
* @route '/admin/media/{mediaItem}'
*/
const updateForm = (args: { mediaItem: number | { id: number } } | [mediaItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MediaItemController::update
* @see app/Http/Controllers/Admin/MediaItemController.php:43
* @route '/admin/media/{mediaItem}'
*/
updateForm.post = (args: { mediaItem: number | { id: number } } | [mediaItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Admin\MediaItemController::destroy
* @see app/Http/Controllers/Admin/MediaItemController.php:70
* @route '/admin/media/{mediaItem}'
*/
export const destroy = (args: { mediaItem: number | { id: number } } | [mediaItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/media/{mediaItem}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\MediaItemController::destroy
* @see app/Http/Controllers/Admin/MediaItemController.php:70
* @route '/admin/media/{mediaItem}'
*/
destroy.url = (args: { mediaItem: number | { id: number } } | [mediaItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mediaItem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { mediaItem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            mediaItem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        mediaItem: typeof args.mediaItem === 'object'
        ? args.mediaItem.id
        : args.mediaItem,
    }

    return destroy.definition.url
            .replace('{mediaItem}', parsedArgs.mediaItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MediaItemController::destroy
* @see app/Http/Controllers/Admin/MediaItemController.php:70
* @route '/admin/media/{mediaItem}'
*/
destroy.delete = (args: { mediaItem: number | { id: number } } | [mediaItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\MediaItemController::destroy
* @see app/Http/Controllers/Admin/MediaItemController.php:70
* @route '/admin/media/{mediaItem}'
*/
const destroyForm = (args: { mediaItem: number | { id: number } } | [mediaItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MediaItemController::destroy
* @see app/Http/Controllers/Admin/MediaItemController.php:70
* @route '/admin/media/{mediaItem}'
*/
destroyForm.delete = (args: { mediaItem: number | { id: number } } | [mediaItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const media = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default media