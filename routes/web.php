<?php

use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Controllers\Admin\ScheduleController;
use App\Http\Controllers\Admin\BulletinController;
use App\Http\Controllers\Admin\EventController;
use App\Http\Controllers\Admin\MediaItemController;
use App\Http\Middleware\EnsureTeamMembership;
use App\Models\Schedule;
use App\Models\Bulletin;
use App\Models\Event;
use App\Models\MediaItem;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

function safe_db_get(callable $callback) {
    try {
        return $callback();
    } catch (\Throwable $e) {
        return collect([]);
    }
}

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
        'schedules' => safe_db_get(fn() => Schedule::orderBy('category')->orderBy('id')->get()),
    ]);
})->name('home');

Route::inertia('/tentang-kami', 'about-us')->name('about-us');
Route::inertia('/ibadah', 'ibadah')->name('ibadah');

Route::get('/kegiatan', function () {
    return Inertia::render('kegiatan', [
        'events' => safe_db_get(fn() => Event::orderBy('date', 'desc')->get())
    ]);
})->name('kegiatan');

Route::get('/media', function () {
    return Inertia::render('media', [
        'mediaItems' => safe_db_get(fn() => MediaItem::orderBy('month', 'desc')->get())
    ]);
})->name('media');

Route::get('/e-warta', function () {
    return Inertia::render('e-warta', [
        'bulletins' => safe_db_get(fn() => Bulletin::orderBy('release_date', 'desc')->get())
    ]);
})->name('e-warta');

Route::inertia('/hubungi-kami', 'contact-us')->name('contact-us');

Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        Route::inertia('dashboard', 'dashboard')->name('dashboard');
    });

Route::middleware(['auth'])->group(function () {
    Route::get('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
    
    // Admin Main Dashboard
    Route::get('admin', function () {
        return Inertia::render('admin/dashboard', [
            'stats' => [
                'schedules_count' => Schedule::count(),
                'bulletins_count' => Bulletin::count(),
                'events_count' => Event::count(),
                'media_count' => MediaItem::count(),
            ]
        ]);
    })->name('admin.dashboard');

    // Admin Schedules CRUD
    Route::get('admin/schedules', [ScheduleController::class, 'index'])->name('admin.schedules.index');
    Route::post('admin/schedules', [ScheduleController::class, 'store'])->name('admin.schedules.store');
    Route::put('admin/schedules/{schedule}', [ScheduleController::class, 'update'])->name('admin.schedules.update');
    Route::delete('admin/schedules/{schedule}', [ScheduleController::class, 'destroy'])->name('admin.schedules.destroy');

    // Admin Bulletins CRUD
    Route::get('admin/bulletins', [BulletinController::class, 'index'])->name('admin.bulletins.index');
    Route::post('admin/bulletins', [BulletinController::class, 'store'])->name('admin.bulletins.store');
    Route::post('admin/bulletins/{bulletin}', [BulletinController::class, 'update'])->name('admin.bulletins.update');
    Route::delete('admin/bulletins/{bulletin}', [BulletinController::class, 'destroy'])->name('admin.bulletins.destroy');

    // Admin Events CRUD
    Route::get('admin/events', [EventController::class, 'index'])->name('admin.events.index');
    Route::post('admin/events', [EventController::class, 'store'])->name('admin.events.store');
    Route::post('admin/events/{event}', [EventController::class, 'update'])->name('admin.events.update');
    Route::delete('admin/events/{event}', [EventController::class, 'destroy'])->name('admin.events.destroy');

    // Admin Media Items CRUD
    Route::get('admin/media', [MediaItemController::class, 'index'])->name('admin.media.index');
    Route::post('admin/media', [MediaItemController::class, 'store'])->name('admin.media.store');
    Route::post('admin/media/{mediaItem}', [MediaItemController::class, 'update'])->name('admin.media.update');
    Route::delete('admin/media/{mediaItem}', [MediaItemController::class, 'destroy'])->name('admin.media.destroy');
});

require __DIR__.'/settings.php';
