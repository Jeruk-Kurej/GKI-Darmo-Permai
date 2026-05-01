import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import AdminPageHeader from '@/components/admin/admin-page-header';
import AdminFormCard from '@/components/admin/admin-form-card';
import AdminTable from '@/components/admin/admin-table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Edit2, Trash, Upload, ExternalLink } from 'lucide-react';

interface Bulletin {
    id: number;
    title: string;
    release_date: string;
    file_path: string;
    created_at?: string;
    updated_at?: string;
}

interface Props {
    bulletins: Bulletin[];
}

export default function AdminBulletins({ bulletins }: Props) {
    const [editingBulletin, setEditingBulletin] = useState<Bulletin | null>(null);

    const { data, setData, post, delete: destroy, reset, processing, errors } = useForm<{
        title: string;
        release_date: string;
        file: File | null;
    }>({
        title: '',
        release_date: '',
        file: null,
    });

    const handleEdit = (bulletin: Bulletin) => {
        setEditingBulletin(bulletin);
        setData({
            title: bulletin.title,
            release_date: bulletin.release_date,
            file: null,
        });
    };

    const handleCancel = () => {
        setEditingBulletin(null);
        reset();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingBulletin) {
            post(`/admin/bulletins/${editingBulletin.id}`, {
                onSuccess: () => {
                    setEditingBulletin(null);
                    reset();
                },
            });
        } else {
            post('/admin/bulletins', {
                onSuccess: () => reset(),
            });
        }
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus E-Warta ini?')) {
            destroy(`/admin/bulletins/${id}`);
        }
    };

    return (
        <>
            <Head title="Manajemen E-Warta" />

            <div className="flex flex-col gap-10">
                <AdminPageHeader
                    category="Warta Mingguan"
                    title="Manajemen E-Warta"
                    description="Unggah file warta jemaat mingguan dalam format PDF atau gambar secara praktis."
                />

                <AdminFormCard title={editingBulletin ? 'Ubah Informasi E-Warta' : 'Unggah File Warta Baru'}>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                        <div className="grid gap-2">
                            <Label htmlFor="title" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                Judul Warta
                            </Label>
                            <Input
                                id="title"
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                placeholder="Contoh: Warta Jemaat 3 Mei 2026"
                                required
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-sm"
                            />
                            {errors.title && (
                                <p className="text-xs text-red-600 font-medium">{errors.title}</p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="release_date" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                Tanggal Terbit
                            </Label>
                            <Input
                                id="release_date"
                                type="date"
                                value={data.release_date}
                                onChange={(e) => setData('release_date', e.target.value)}
                                required
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-sm font-semibold select-none cursor-pointer"
                            />
                            {errors.release_date && (
                                <p className="text-xs text-red-600 font-medium">{errors.release_date}</p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="file" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none flex items-center justify-between">
                                Upload File PDF / Gambar
                                {editingBulletin && <span className="text-[10px] text-slate-400 font-normal normal-case">(Opsional)</span>}
                            </Label>
                            <Input
                                id="file"
                                type="file"
                                accept="application/pdf,image/*"
                                onChange={(e) => setData('file', e.target.files ? e.target.files[0] : null)}
                                required={!editingBulletin}
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-xs pt-2.5 file:font-black file:text-xs file:bg-[#7a9d54]/10 file:text-[#4c6336] file:border-0 file:rounded-lg file:px-3 file:py-1 cursor-pointer select-none"
                            />
                            {errors.file && (
                                <p className="text-xs text-red-600 font-medium">{errors.file}</p>
                            )}
                        </div>

                        <div className="md:col-span-3 flex justify-end gap-3 pt-2">
                            {editingBulletin && (
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
                                <Upload className="w-4 h-4" />
                                {editingBulletin ? 'Simpan Perubahan' : 'Unggah Warta'}
                            </Button>
                        </div>
                    </form>
                </AdminFormCard>

                <AdminTable title="Daftar Warta Terbit">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/60 border-b border-slate-200/60">
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Judul Warta</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tanggal Terbit</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Akses File</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Aksi Manajemen</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {bulletins.map((bulletin) => (
                                <tr key={bulletin.id} className="hover:bg-slate-50/40 transition-colors group">
                                    <td className="px-6 py-4 text-sm font-extrabold text-slate-800 leading-snug">
                                        {bulletin.title}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 font-semibold">
                                        {bulletin.release_date}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <a
                                            href={bulletin.file_path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-100/50 px-3 py-1.5 rounded-xl text-xs font-black transition-colors"
                                        >
                                            Lihat File
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right">
                                        <div className="flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleEdit(bulletin)}
                                                className="h-8 w-8 p-0 rounded-lg flex items-center justify-center hover:bg-slate-50 text-slate-600"
                                                title="Ubah Warta"
                                            >
                                                <Edit2 className="w-3.5 h-3.5" />
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => handleDelete(bulletin.id)}
                                                className="h-8 w-8 p-0 rounded-lg flex items-center justify-center bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border border-transparent transition-all"
                                                title="Hapus Warta"
                                            >
                                                <Trash className="w-3.5 h-3.5" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {bulletins.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500 font-medium">
                                        Belum ada file warta yang diunggah.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </AdminTable>
            </div>
        </>
    );
}

AdminBulletins.layout = (page: any) => (
    <AdminLayout>
        {page}
    </AdminLayout>
);
