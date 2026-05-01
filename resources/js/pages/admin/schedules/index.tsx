import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import AdminPageHeader from '@/components/admin/admin-page-header';
import AdminFormCard from '@/components/admin/admin-form-card';
import AdminTable from '@/components/admin/admin-table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Edit2, Trash, Plus } from 'lucide-react';

interface Schedule {
    id: number;
    category: string;
    type: string;
    time: string;
    created_at?: string;
    updated_at?: string;
}

interface Props {
    schedules: Schedule[];
}

export default function AdminSchedules({ schedules }: Props) {
    const [editingSchedule, setEditingSchedule] = useState<Schedule | null>(null);

    const { data, setData, post, put, delete: destroy, reset, processing, errors } = useForm({
        category: '',
        type: 'ONSITE',
        time: '',
    });

    const handleEdit = (schedule: Schedule) => {
        setEditingSchedule(schedule);
        setData({
            category: schedule.category,
            type: schedule.type,
            time: schedule.time,
        });
    };

    const handleCancel = () => {
        setEditingSchedule(null);
        reset();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingSchedule) {
            put(`/admin/schedules/${editingSchedule.id}`, {
                onSuccess: () => {
                    setEditingSchedule(null);
                    reset();
                },
            });
        } else {
            post('/admin/schedules', {
                onSuccess: () => reset(),
            });
        }
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus jadwal ini?')) {
            destroy(`/admin/schedules/${id}`);
        }
    };

    return (
        <>
            <Head title="Manajemen Jadwal Ibadah" />

            <div className="flex flex-col gap-10">
                <AdminPageHeader
                    category="Jadwal & Waktu"
                    title="Manajemen Jadwal Ibadah"
                    description="Tambahkan, ubah, atau hapus jadwal ibadah mingguan dan hari raya untuk jemaat."
                />

                <AdminFormCard title={editingSchedule ? 'Ubah Informasi Jadwal Ibadah' : 'Daftarkan Jadwal Baru'}>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                        <div className="grid gap-2">
                            <Label htmlFor="category" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                Kategori Ibadah
                            </Label>
                            <Input
                                id="category"
                                type="text"
                                value={data.category}
                                onChange={(e) => setData('category', e.target.value)}
                                placeholder="Contoh: Umum, PROUD, Anak, Natal"
                                required
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-sm"
                            />
                            {errors.category && (
                                <p className="text-xs text-red-600 font-medium">{errors.category}</p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="type" className="text-xs font-bold uppercase tracking-wider text-slate-700 select-none">
                                Tipe Ibadah
                            </Label>
                            <select
                                id="type"
                                value={data.type}
                                onChange={(e) => setData('type', e.target.value)}
                                className="border border-slate-200 bg-white rounded-xl h-11 px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a9d54] focus-visible:border-transparent transition-all shadow-sm font-semibold select-none text-slate-800 cursor-pointer"
                                required
                            >
                                <option value="ONSITE">ONSITE</option>
                                <option value="STREAMING">STREAMING</option>
                            </select>
                            {errors.type && (
                                <p className="text-xs text-red-600 font-medium">{errors.type}</p>
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
                                placeholder="Contoh: 07:00 WIB"
                                required
                                className="h-11 border-slate-200/80 rounded-xl focus-visible:ring-[#7a9d54] text-sm"
                            />
                            {errors.time && (
                                <p className="text-xs text-red-600 font-medium">{errors.time}</p>
                            )}
                        </div>

                        <div className="md:col-span-3 flex justify-end gap-3 pt-2">
                            {editingSchedule && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleCancel}
                                    disabled={processing}
                                    className="h-11 px-6 rounded-xl border-slate-200/80 text-xs font-bold"
                                >
                                    Batal
                                </Button>
                            )}
                            <Button 
                                type="submit" 
                                disabled={processing} 
                                className="h-11 px-6 bg-[#7a9d54] hover:bg-[#5f7a50] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
                            >
                                <Plus className="w-4 h-4" />
                                {editingSchedule ? 'Simpan Perubahan' : 'Daftarkan Jadwal'}
                            </Button>
                        </div>
                    </form>
                </AdminFormCard>

                <AdminTable title="Daftar Jadwal Terdaftar">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/60 border-b border-slate-200/60">
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Kategori Ibadah</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tipe Pelayanan</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Waktu Pelaksanaan</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Aksi Manajemen</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {schedules.map((schedule) => (
                                <tr key={schedule.id} className="hover:bg-slate-50/40 transition-colors group">
                                    <td className="px-6 py-4 text-sm font-extrabold text-slate-800">
                                        {schedule.category}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span
                                            className={`inline-flex items-center px-3 py-1 rounded-xl text-xs font-black tracking-wider ${
                                                schedule.type === 'ONSITE'
                                                    ? 'bg-blue-50 text-blue-700 border border-blue-100/50'
                                                    : 'bg-emerald-50 text-emerald-700 border border-emerald-100/50'
                                            }`}
                                        >
                                            {schedule.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 font-semibold">
                                        {schedule.time}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right">
                                        <div className="flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleEdit(schedule)}
                                                className="h-8 w-8 p-0 rounded-lg flex items-center justify-center hover:bg-slate-50 text-slate-600"
                                                title="Ubah Jadwal"
                                            >
                                                <Edit2 className="w-3.5 h-3.5" />
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => handleDelete(schedule.id)}
                                                className="h-8 w-8 p-0 rounded-lg flex items-center justify-center bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border border-transparent transition-all"
                                                title="Hapus Jadwal"
                                            >
                                                <Trash className="w-3.5 h-3.5" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {schedules.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500 font-medium">
                                        Belum ada jadwal ibadah yang ditambahkan.
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

AdminSchedules.layout = (page: any) => (
    <AdminLayout>
        {page}
    </AdminLayout>
);
