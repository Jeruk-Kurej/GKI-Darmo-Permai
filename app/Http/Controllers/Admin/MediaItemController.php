<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MediaItem;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class MediaItemController extends Controller
{
    public function index()
    {
        $mediaItems = MediaItem::orderBy('month', 'desc')->get();
        return Inertia::render('admin/media/index', [
            'mediaItems' => $mediaItems
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'type' => 'required|string|max:255',
            'month' => 'required|string|max:255',
            'youtube_url' => 'nullable|string|max:255',
            'spotify_url' => 'nullable|string|max:255',
            'image' => 'required|image|mimes:jpg,jpeg,png,webp|max:5120',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('media', 'public');
            $validated['image_path'] = '/storage/' . $path;
        }

        MediaItem::create($validated);

        return redirect()->back()->with('success', 'Media berhasil ditambahkan.');
    }

    public function update(Request $request, MediaItem $mediaItem)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'type' => 'required|string|max:255',
            'month' => 'required|string|max:255',
            'youtube_url' => 'nullable|string|max:255',
            'spotify_url' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:5120',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($mediaItem->image_path && str_starts_with($mediaItem->image_path, '/storage/')) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $mediaItem->image_path));
            }

            $path = $request->file('image')->store('media', 'public');
            $validated['image_path'] = '/storage/' . $path;
        }

        $mediaItem->update($validated);

        return redirect()->back()->with('success', 'Media berhasil diperbarui.');
    }

    public function destroy(MediaItem $mediaItem)
    {
        if ($mediaItem->image_path && str_starts_with($mediaItem->image_path, '/storage/')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $mediaItem->image_path));
        }

        $mediaItem->delete();

        return redirect()->back()->with('success', 'Media berhasil dihapus.');
    }
}
