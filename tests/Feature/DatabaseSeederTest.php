<?php

use App\Models\Schedule;
use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Support\Facades\Hash;

test('the admin is seeded from the environment', function () {
    config(['app.admin' => ['email' => 'pengurus@example.com', 'password' => 'rahasia-lokal']]);

    $this->seed(DatabaseSeeder::class);

    $admin = User::where('email', 'pengurus@example.com')->first();

    expect($admin)->not->toBeNull()
        ->and($admin->is_admin)->toBeTrue()
        ->and(Hash::check('rahasia-lokal', $admin->password))->toBeTrue();
});

test('no admin is seeded without a password', function (?string $password) {
    config(['app.admin' => ['email' => 'pengurus@example.com', 'password' => $password]]);

    $this->seed(DatabaseSeeder::class);

    expect(User::count())->toBe(0)
        ->and(Schedule::count())->toBe(7);
})->with([null, '']);

test('seeding twice keeps one admin and one set of schedules', function () {
    config(['app.admin' => ['email' => 'pengurus@example.com', 'password' => 'rahasia-lokal']]);

    $this->seed(DatabaseSeeder::class);
    $this->seed(DatabaseSeeder::class);

    expect(User::where('email', 'pengurus@example.com')->count())->toBe(1)
        ->and(Schedule::count())->toBe(7);
});
