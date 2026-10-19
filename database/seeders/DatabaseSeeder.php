<?php

namespace Database\Seeders;

use App\Models\Schedule;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->seedAdmin();

        if (Schedule::count() === 0) {
            Schedule::create(['category' => 'Umum', 'type' => 'ONSITE', 'time' => '07:00 WIB']);
            Schedule::create(['category' => 'Umum', 'type' => 'ONSITE', 'time' => '09:30 WIB']);
            Schedule::create(['category' => 'Umum', 'type' => 'ONSITE', 'time' => '17:00 WIB']);
            Schedule::create(['category' => 'Umum', 'type' => 'STREAMING', 'time' => '07:30 WIB']);
            Schedule::create(['category' => 'PROUD', 'type' => 'ONSITE', 'time' => '09:30 WIB']);
            Schedule::create(['category' => 'PROUD', 'type' => 'STREAMING', 'time' => '09:30 WIB']);
            Schedule::create(['category' => 'Anak', 'type' => 'ONSITE', 'time' => '09:30 WIB']);
        }
    }

    /**
     * Create the first admin from ADMIN_EMAIL and ADMIN_PASSWORD, never from values in the code.
     */
    protected function seedAdmin(): void
    {
        ['email' => $email, 'password' => $password] = config('app.admin');

        if (blank($email) || blank($password)) {
            $this->command?->warn('ADMIN_EMAIL or ADMIN_PASSWORD is not set, the admin account was not seeded.');

            return;
        }

        if (User::where('email', $email)->exists()) {
            return;
        }

        User::forceCreate([
            'name' => 'Admin GKI',
            'email' => $email,
            'password' => $password,
            'is_admin' => true,
        ]);
    }
}
