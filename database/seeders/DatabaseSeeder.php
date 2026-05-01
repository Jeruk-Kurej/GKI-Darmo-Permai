<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Schedule;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        if (!User::where('email', 'admin@gki.com')->exists()) {
            User::create([
                'name' => 'Admin GKI',
                'email' => 'admin@gki.com',
                'password' => bcrypt('gkidamai24'),
            ]);
        }

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
}
