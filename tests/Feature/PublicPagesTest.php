<?php

use Inertia\Testing\AssertableInertia as Assert;

dataset('public pages', [
    'home' => ['/', 'welcome'],
    'tentang kami' => ['/tentang-kami', 'about-us'],
    'ibadah' => ['/ibadah', 'ibadah'],
    'kegiatan' => ['/kegiatan', 'kegiatan'],
    'media' => ['/media', 'media'],
    'e-warta' => ['/e-warta', 'e-warta'],
    'hubungi kami' => ['/hubungi-kami', 'contact-us'],
]);

test('public pages render for guests', function (string $url, string $component) {
    $this->get($url)
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component($component));
})->with('public pages');
