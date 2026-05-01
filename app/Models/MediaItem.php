<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MediaItem extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'type',
        'month',
        'youtube_url',
        'spotify_url',
        'image_path',
    ];
}
