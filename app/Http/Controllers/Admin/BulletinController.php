<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bulletin;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class BulletinController extends Controller
{
    public function index()
    {
        $bulletins = Bulletin::orderBy('release_date', 'desc')->get();
        return Inertia::render('admin/bulletins/index', [
            'bulletins' => $bulletins
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'release_date' => 'required|date',
            'file' => 'required|file|mimes:pdf,png,jpg,jpeg|max:10240',
        ]);

        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('bulletins', 'public');
            $validated['file_path'] = '/storage/' . $path;
        }

        Bulletin::create($validated);

        return redirect()->back()->with('success', 'E-Warta berhasil ditambahkan.');
    }

    public function update(Request $request, Bulletin $bulletin)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'release_date' => 'required|date',
            'file' => 'nullable|file|mimes:pdf,png,jpg,jpeg|max:10240',
        ]);

        if ($request->hasFile('file')) {
            // Delete old file if exists
            if ($bulletin->file_path && str_starts_with($bulletin->file_path, '/storage/')) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $bulletin->file_path));
            }

            $path = $request->file('file')->store('bulletins', 'public');
            $validated['file_path'] = '/storage/' . $path;
        }

        $bulletin->update($validated);

        return redirect()->back()->with('success', 'E-Warta berhasil diperbarui.');
    }

    public function destroy(Bulletin $bulletin)
    {
        if ($bulletin->file_path && str_starts_with($bulletin->file_path, '/storage/')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $bulletin->file_path));
        }

        $bulletin->delete();

        return redirect()->back()->with('success', 'E-Warta berhasil dihapus.');
    }
}
