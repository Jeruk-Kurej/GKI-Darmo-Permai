import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Edit2, Trash, Plus, Film, Calendar, Sparkles } from 'lucide-react';

interface MediaData {
    id: number;
    title: string;
    subtitle?: string;
    type: string;
    month: string;
    youtube_url?: string;
    spotify_url?: string;
    image_path: string;
    created_at?: string;
    updated_at?: string;
}

interface Props {
    mediaItems: MediaData[];
}

export default function AdminMedia({ mediaItems }: Props) {
    const [editingItem, setEditingItem] = useState<MediaData | null>(null);

    const { data, setData, post, delete: destroy, reset, processing, errors } = useForm<{
        title: string;
        subtitle: string;
        type: string;
        month: string;
        youtube_url: string;
        spotify_url: string;
        image: File | null;
    }>({
        title: '',
        subtitle: '',
        type: 'video',
        month: '',
        youtube_url: '',
        spotify_url: '',
        image: null,
    });

    const handleEdit = (item: MediaData) => {
        setEditingItem(item);
        setData({
            title: item.title,
            subtitle: item.subtitle || '',
            type: item.type,
            month: item.month,
            youtube_url: item.youtube_url || '',
            spotify_url: item.spotify_url || '',
            image: null,
        });
    };

    const handleCancel = () => {
        setEditingItem(null);
        reset();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingItem) {
            post(`/admin/media/${editingItem.id}`, {
                onSuccess: () => {
                    setEditingItem(null);
                    reset();
                },
            });
        } else {
            post('/admin/media', {
                onSuccess: () => reset(),
            });
        }
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus media ini?')) {
            destroy(`/admin/media/${id}`);
        }
    };

    return (
        <>
            <Head title="Manajemen Media" />

            <div className="flex flex-col gap-10">
                {/* Heading Area */}
                <div>
                    <span className="text-[10px] bg-[#7a9d54]/15 font-black text-[#4c6336] px-3 py-1 rounded-full uppercase tracking-widest select-none">
                        Video & Galeri
                    </span>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-3 leading-snug">
                        Manajemen Media & Video
                    </h1>
                    <p className="text-slate-500 text-sm mt-1 max-w-lg leading-relaxed">
                        Kelola album foto galeri, video SAMAS, dan rekaman khotbah ibadah secara komprehensif.
                    </p>
                </div>

                {/* Form: Add / Edit */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6 animate-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                        <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                            <Sparkles className="w-4 h-4" />
                        </div>
                        <h2 className="text-lg font-black text-slate-800 tracking-tight">
                            {editingItem ? 'Ubah Informasi Media' : 'Tambah Media Baru'}
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
                        <div className="grid gap-2">
                            <Label htmlFor="title" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                Judul Media
                            </Label>
                            <Input
                                id="title"
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                placeholder="Contoh: Ibadah Minggu 25 Januari"
                                required
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-sm"
                            />
                            {errors.title && (
                                <p className="text-xs text-red-600 font-medium">{errors.title}</p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="subtitle" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                Subtitle / Tanggal Terbit
                            </Label>
                            <Input
                                id="subtitle"
                                type="text"
                                value={data.subtitle}
                                onChange={(e) => setData('subtitle', e.target.value)}
                                placeholder="Contoh: Pdt. Budi Santoso / 20 Jan 2026"
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-sm"
                            />
                            {errors.subtitle && (
                                <p className="text-xs text-red-600 font-medium">{errors.subtitle}</p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="type" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                Tipe Media
                            </Label>
                            <select
                                id="type"
                                value={data.type}
                                onChange={(e) => setData('type', e.target.value)}
                                className="border border-slate-200 bg-white rounded-xl h-11 px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a9d54] focus-visible:border-transparent transition-all shadow-sm font-semibold select-none text-slate-800 cursor-pointer"
                                required
                            >
                                <option value="video">Video Ibadah</option>
                                <option value="samas">SAMAS</option>
                                <option value="gallery">Galeri</option>
                            </select>
                            {errors.type && (
                                <p className="text-xs text-red-600 font-medium">{errors.type}</p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="month" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                Bulan & Tahun
                            </Label>
                            <Input
                                id="month"
                                type="text"
                                value={data.month}
                                onChange={(e) => setData('month', e.target.value)}
                                placeholder="Contoh: JANUARI 2026"
                                required
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-sm"
                            />
                            {errors.month && (
                                <p className="text-xs text-red-600 font-medium">{errors.month}</p>
                            )}
                        </div>

                        {data.type !== 'gallery' && (
                            <div className="grid gap-2">
                                <Label htmlFor="youtube_url" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                    Link Video YouTube
                                </Label>
                                <Input
                                    id="youtube_url"
                                    type="text"
                                    value={data.youtube_url}
                                    onChange={(e) => setData('youtube_url', e.target.value)}
                                    placeholder="Contoh: https://youtube.com/..."
                                    className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-sm"
                                />
                                {errors.youtube_url && (
                                    <p className="text-xs text-red-600 font-medium">{errors.youtube_url}</p>
                                )}
                            </div>
                        )}

                        {data.type === 'samas' && (
                            <div className="grid gap-2">
                                <Label htmlFor="spotify_url" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                    Link Podcast Spotify
                                </Label>
                                <Input
                                    id="spotify_url"
                                    type="text"
                                    value={data.spotify_url}
                                    onChange={(e) => setData('spotify_url', e.target.value)}
                                    placeholder="Contoh: https://spotify.com/..."
                                    className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-sm"
                                />
                                {errors.spotify_url && (
                                    <p className="text-xs text-red-600 font-medium">{errors.spotify_url}</p>
                                )}
                            </div>
                        )}

                        <div className="grid gap-2">
                            <Label htmlFor="image" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none flex items-center justify-between">
                                Foto Thumbnail / Poster
                                {editingItem && <span className="text-[10px] text-slate-400 font-normal normal-case">(Opsional)</span>}
                            </Label>
                            <Input
                                id="image"
                                type="file"
                                accept="image/*"
                                onChange={(e) => setData('image', e.target.files ? e.target.files[0] : null)}
                                required={!editingItem}
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-xs pt-2.5 file:font-black file:text-xs file:bg-[#7a9d54]/10 file:text-[#4c6336] file:border-0 file:rounded-lg file:px-3 file:py-1 cursor-pointer select-none"
                            />
                            {errors.image && (
                                <p className="text-xs text-red-600 font-medium">{errors.image}</p>
                            )}
                        </div>

                        <div className="md:col-span-2 lg:col-span-3 flex justify-end gap-3 pt-2">
                            {editingItem && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleCancel}
                                    disabled={processing}
                                    className="h-11 px-6 rounded-xl border-slate-200/80 text-xs font-bold select-none cursor-pointer"
                                >
                                    Batal
                                </Button>
                            )}
                            <Button 
                                type="submit" 
                                disabled={processing} 
                                className="h-11 px-6 bg-[#7a9d54] hover:bg-[#5f7a50] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all select-none cursor-pointer"
                            >
                                <Plus className="w-4 h-4" />
                                {editingItem ? 'Simpan Perubahan' : 'Tambah Media'}
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Table List */}
                <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm animate-in slide-in-from-bottom-3 duration-500 select-none">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-lg font-black text-slate-800 tracking-tight leading-normal">
                            Daftar Media Website
                        </h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/60 border-b border-slate-200/60">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Judul Media</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Bulan Terbit</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tipe Media</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Aksi Manajemen</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {mediaItems.map((item) => (
                                    <tr key={item.id} className="hover:bg-slate-50/40 transition-colors group">
                                        <td className="px-6 py-4 text-sm font-extrabold text-slate-800 leading-snug">
                                            {item.title}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 font-semibold">
                                            {item.month}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            <span className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-black tracking-wider bg-purple-50 text-purple-700 border border-purple-100/50 capitalize">
                                                {item.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-right">
                                            <div className="flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleEdit(item)}
                                                    className="h-8 w-8 p-0 rounded-lg flex items-center justify-center hover:bg-slate-50 text-slate-600"
                                                    title="Ubah Media"
                                                >
                                                    <Edit2 className="w-3.5 h-3.5" />
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() => handleDelete(item.id)}
                                                    className="h-8 w-8 p-0 rounded-lg flex items-center justify-center bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border border-transparent transition-all"
                                                    title="Hapus Media"
                                                >
                                                    <Trash className="w-3.5 h-3.5" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {mediaItems.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-12 text-center text-slate-500 font-medium">
                                            Belum ada media yang ditambahkan.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

AdminMedia.layout = (page: any) => (
    <AdminLayout>
        {page}
    </AdminLayout>
);
