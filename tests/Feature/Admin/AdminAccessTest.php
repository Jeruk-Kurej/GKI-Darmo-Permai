<?php

use App\Models\Schedule;
use App\Models\User;

dataset('admin pages', [
    'dashboard' => 'admin.dashboard',
    'schedules' => 'admin.schedules.index',
    'bulletins' => 'admin.bulletins.index',
    'events' => 'admin.events.index',
    'media' => 'admin.media.index',
]);

test('guests are redirected to the login page', function (string $route) {
    $this->get(route($route))->assertRedirect(route('login'));
})->with('admin pages');

test('non admin users cannot visit admin pages', function (string $route) {
    $user = User::factory()->create();

    $this->actingAs($user)->get(route($route))->assertForbidden();
})->with('admin pages');

test('admin users can visit admin pages', function (string $route) {
    $admin = User::factory()->admin()->create();

    $this->actingAs($admin)->get(route($route))->assertOk();
})->with('admin pages');

test('non admin users cannot change content', function () {
    $user = User::factory()->create();
    $schedule = Schedule::create(['category' => 'Umum', 'type' => 'ONSITE', 'time' => '07:00 WIB']);

    $this->actingAs($user)
        ->post(route('admin.schedules.store'), ['category' => 'Umum', 'type' => 'ONSITE', 'time' => '09:00 WIB'])
        ->assertForbidden();

    $this->actingAs($user)
        ->delete(route('admin.schedules.destroy', $schedule))
        ->assertForbidden();

    expect(Schedule::count())->toBe(1);
});

test('admin users can create schedules', function () {
    $admin = User::factory()->admin()->create();

    $this->actingAs($admin)
        ->post(route('admin.schedules.store'), ['category' => 'Umum', 'type' => 'ONSITE', 'time' => '09:00 WIB'])
        ->assertRedirect();

    expect(Schedule::where('time', '09:00 WIB')->exists())->toBeTrue();
});

test('admin users are redirected to the admin dashboard after login', function () {
    $admin = User::factory()->admin()->create();

    $this->post(route('login.store'), [
        'email' => $admin->email,
        'password' => 'password',
    ])->assertRedirect(route('admin.dashboard'));
});

test('is_admin cannot be mass assigned', function () {
    $user = User::create([
        'name' => 'Jemaat',
        'email' => 'jemaat@example.com',
        'password' => 'password',
        'is_admin' => true,
    ]);

    expect($user->fresh()->is_admin)->toBeFalse();
});
