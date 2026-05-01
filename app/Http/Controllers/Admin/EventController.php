<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::orderBy('date', 'desc')->get();
        return Inertia::render('admin/events/index', [
            'events' => $events
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'date' => 'required|date',
            'pastor' => 'required|string|max:255',
            'time' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpg,jpeg,png,webp|max:5120',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('events', 'public');
            $validated['image_path'] = '/storage/' . $path;
        }

        Event::create($validated);

        return redirect()->back()->with('success', 'Kegiatan berhasil ditambahkan.');
    }

    public function update(Request $request, Event $event)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'date' => 'required|date',
            'pastor' => 'required|string|max:255',
            'time' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:5120',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($event->image_path && str_starts_with($event->image_path, '/storage/')) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $event->image_path));
            }

            $path = $request->file('image')->store('events', 'public');
            $validated['image_path'] = '/storage/' . $path;
        }

        $event->update($validated);

        return redirect()->back()->with('success', 'Kegiatan berhasil diperbarui.');
    }

    public function destroy(Event $event)
    {
        if ($event->image_path && str_starts_with($event->image_path, '/storage/')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $event->image_path));
        }

        $event->delete();

        return redirect()->back()->with('success', 'Kegiatan berhasil dihapus.');
    }
}
