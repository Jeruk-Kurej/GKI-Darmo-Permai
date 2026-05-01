import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Edit2, Trash, Plus, Award, Calendar, Clock, Sparkles } from 'lucide-react';

interface EventData {
    id: number;
    title: string;
    category: string;
    date: string;
    pastor: string;
    time: string;
    image_path: string;
    created_at?: string;
    updated_at?: string;
}

interface Props {
    events: EventData[];
}

export default function AdminEvents({ events }: Props) {
    const [editingEvent, setEditingEvent] = useState<EventData | null>(null);

    const { data, setData, post, delete: destroy, reset, processing, errors } = useForm<{
        title: string;
        category: string;
        date: string;
        pastor: string;
        time: string;
        image: File | null;
    }>({
        title: '',
        category: 'Semua',
        date: '',
        pastor: '',
        time: '',
        image: null,
    });

    const handleEdit = (event: EventData) => {
        setEditingEvent(event);
        setData({
            title: event.title,
            category: event.category,
            date: event.date,
            pastor: event.pastor,
            time: event.time,
            image: null,
        });
    };

    const handleCancel = () => {
        setEditingEvent(null);
        reset();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingEvent) {
            post(`/admin/events/${editingEvent.id}`, {
                onSuccess: () => {
                    setEditingEvent(null);
                    reset();
                },
            });
        } else {
            post('/admin/events', {
                onSuccess: () => reset(),
            });
        }
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus kegiatan ini?')) {
            destroy(`/admin/events/${id}`);
        }
    };

    const categories = ["Semua", "Keluarga", "Anak", "Remaja"];

    return (
        <>
            <Head title="Manajemen Kegiatan" />

            <div className="flex flex-col gap-10">
                {/* Heading Area */}
                <div>
                    <span className="text-[10px] bg-[#7a9d54]/15 font-black text-[#4c6336] px-3 py-1 rounded-full uppercase tracking-widest select-none">
                        Acara & Kegiatan
                    </span>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-3 leading-snug">
                        Manajemen Kegiatan & Acara
                    </h1>
                    <p className="text-slate-500 text-sm mt-1 max-w-lg leading-relaxed">
                        Tambahkan, ubah, atau hapus kegiatan gereja yang akan datang secara terstruktur.
                    </p>
                </div>

                {/* Form: Add / Edit */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6 animate-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                        <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                            <Sparkles className="w-4 h-4" />
                        </div>
                        <h2 className="text-lg font-black text-slate-800 tracking-tight">
                            {editingEvent ? 'Ubah Informasi Kegiatan' : 'Tambah Kegiatan Baru'}
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
                        <div className="grid gap-2">
                            <Label htmlFor="title" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                Judul Kegiatan
                            </Label>
                            <Input
                                id="title"
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                placeholder="Contoh: Ibadah PROUD Remaja"
                                required
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-sm"
                            />
                            {errors.title && (
                                <p className="text-xs text-red-600 font-medium">{errors.title}</p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="category" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                Kategori
                            </Label>
                            <select
                                id="category"
                                value={data.category}
                                onChange={(e) => setData('category', e.target.value)}
                                className="border border-slate-200 bg-white rounded-xl h-11 px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a9d54] focus-visible:border-transparent transition-all shadow-sm font-semibold select-none text-slate-800 cursor-pointer"
                                required
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                            {errors.category && (
                                <p className="text-xs text-red-600 font-medium">{errors.category}</p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="date" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                Tanggal Acara
                            </Label>
                            <Input
                                id="date"
                                type="date"
                                value={data.date}
                                onChange={(e) => setData('date', e.target.value)}
                                required
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-sm font-semibold select-none cursor-pointer"
                            />
                            {errors.date && (
                                <p className="text-xs text-red-600 font-medium">{errors.date}</p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="pastor" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                Pembicara / Pastor
                            </Label>
                            <Input
                                id="pastor"
                                type="text"
                                value={data.pastor}
                                onChange={(e) => setData('pastor', e.target.value)}
                                placeholder="Contoh: Pdt. Yohanes Sulaiman"
                                required
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-sm"
                            />
                            {errors.pastor && (
                                <p className="text-xs text-red-600 font-medium">{errors.pastor}</p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="time" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                Waktu / Jam
                            </Label>
                            <Input
                                id="time"
                                type="text"
                                value={data.time}
                                onChange={(e) => setData('time', e.target.value)}
                                placeholder="Contoh: MINGGU | 09:00 WIB"
                                required
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-sm"
                            />
                            {errors.time && (
                                <p className="text-xs text-red-600 font-medium">{errors.time}</p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="image" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none flex items-center justify-between">
                                Upload Flyer / Poster
                                {editingEvent && <span className="text-[10px] text-slate-400 font-normal normal-case">(Opsional)</span>}
                            </Label>
                            <Input
                                id="image"
                                type="file"
                                accept="image/*"
                                onChange={(e) => setData('image', e.target.files ? e.target.files[0] : null)}
                                required={!editingEvent}
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-xs pt-2.5 file:font-black file:text-xs file:bg-[#7a9d54]/10 file:text-[#4c6336] file:border-0 file:rounded-lg file:px-3 file:py-1 cursor-pointer select-none"
                            />
                            {errors.image && (
                                <p className="text-xs text-red-600 font-medium">{errors.image}</p>
                            )}
                        </div>

                        <div className="md:col-span-2 lg:col-span-3 flex justify-end gap-3 pt-2">
                            {editingEvent && (
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
                                {editingEvent ? 'Simpan Perubahan' : 'Tambah Acara'}
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Table List */}
                <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm animate-in slide-in-from-bottom-3 duration-500 select-none">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-lg font-black text-slate-800 tracking-tight leading-normal">
                            Daftar Acara Terdaftar
                        </h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/60 border-b border-slate-200/60">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Judul Acara</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tanggal & Waktu</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Kategori</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Aksi Manajemen</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {events.map((event) => (
                                    <tr key={event.id} className="hover:bg-slate-50/40 transition-colors group">
                                        <td className="px-6 py-4 text-sm font-extrabold text-slate-800 leading-snug">
                                            {event.title}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 font-semibold">
                                            <div className="flex flex-col">
                                                <span>{event.date}</span>
                                                <span className="text-[11px] text-slate-400 font-normal">{event.time}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            <span className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-black tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100/50">
                                                {event.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-right">
                                            <div className="flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleEdit(event)}
                                                    className="h-8 w-8 p-0 rounded-lg flex items-center justify-center hover:bg-slate-50 text-slate-600"
                                                    title="Ubah Acara"
                                                >
                                                    <Edit2 className="w-3.5 h-3.5" />
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() => handleDelete(event.id)}
                                                    className="h-8 w-8 p-0 rounded-lg flex items-center justify-center bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border border-transparent transition-all"
                                                    title="Hapus Acara"
                                                >
                                                    <Trash className="w-3.5 h-3.5" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {events.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-12 text-center text-slate-500 font-medium">
                                            Belum ada kegiatan yang ditambahkan.
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

AdminEvents.layout = (page: any) => (
    <AdminLayout>
        {page}
    </AdminLayout>
);
