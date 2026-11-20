<?php

use App\Models\Schedule;
use Inertia\Testing\AssertableInertia as Assert;

test('the home page lists Umum first, then PROUD, then Anak', function () {
    Schedule::create(['category' => 'Anak', 'type' => 'ONSITE', 'time' => '09:30 WIB']);
    Schedule::create(['category' => 'PROUD', 'type' => 'ONSITE', 'time' => '09:30 WIB']);
    Schedule::create(['category' => 'Umum', 'type' => 'ONSITE', 'time' => '07:00 WIB']);
    Schedule::create(['category' => 'Umum', 'type' => 'STREAMING', 'time' => '07:30 WIB']);

    $this->get('/')->assertInertia(fn (Assert $page) => $page
        ->component('welcome')
        ->where('schedules.0.category', 'Umum')
        ->where('schedules.1.category', 'Umum')
        ->where('schedules.1.type', 'STREAMING')
        ->where('schedules.2.category', 'PROUD')
        ->where('schedules.3.category', 'Anak'));
});
